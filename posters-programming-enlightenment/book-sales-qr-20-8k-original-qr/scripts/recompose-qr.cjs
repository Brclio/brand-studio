#!/usr/bin/env node

const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const packageRoot = path.resolve(__dirname, "..");
const sourceDir = path.resolve(process.argv[2] || path.join(packageRoot, "posters"));
const outputDir = path.resolve(process.argv[3] || path.join(packageRoot, "posters"));
const qrPath = path.join(packageRoot, "assets", "purchase-qr-circle-original-270.png");
const canvas = { width: 7680, height: 4320 };

const placements = [
  { id: "01", centerX: 6836, centerY: 3164, diameter: 1104 },
  { id: "02", centerX: 1052, centerY: 3020, diameter: 1312 },
  { id: "03", centerX: 6836, centerY: 956, diameter: 1264 },
  { id: "04", centerX: 6660, centerY: 3504, diameter: 1296 },
  { id: "05", centerX: 5872, centerY: 1612, diameter: 1656 },
  { id: "06", centerX: 6648, centerY: 3128, diameter: 1040 },
  { id: "07", centerX: 6372, centerY: 916, diameter: 1520 },
  { id: "08", centerX: 6808, centerY: 3360, diameter: 1256 },
  { id: "09", centerX: 6828, centerY: 3000, diameter: 1112 },
  { id: "10", centerX: 6236, centerY: 2892, diameter: 1376 },
  { id: "11", centerX: 6752, centerY: 1212, diameter: 1248 },
  { id: "12", centerX: 7024, centerY: 3576, diameter: 1000 },
  { id: "13", centerX: 888, centerY: 864, diameter: 1400 },
  { id: "14", centerX: 6712, centerY: 1180, diameter: 1288 },
  { id: "15", centerX: 900, centerY: 3416, diameter: 1220 },
  { id: "16", centerX: 6048, centerY: 1828, diameter: 1704 },
  { id: "17", centerX: 6716, centerY: 2284, diameter: 1120 },
  { id: "18", centerX: 6888, centerY: 1860, diameter: 1376 },
  { id: "19", centerX: 6780, centerY: 3552, diameter: 1060 },
  { id: "20", centerX: 6732, centerY: 2884, diameter: 1388 },
].map((placement) => ({
  ...placement,
  left: placement.centerX - placement.diameter / 2,
  top: placement.centerY - placement.diameter / 2,
}));

function sha256(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function outsideBoxIsIdentical(before, after, placement, channels) {
  const rowBytes = canvas.width * channels;
  const topBytes = placement.top * rowBytes;
  const bottomOffset = (placement.top + placement.diameter) * rowBytes;

  if (!before.subarray(0, topBytes).equals(after.subarray(0, topBytes))) return false;
  if (!before.subarray(bottomOffset).equals(after.subarray(bottomOffset))) return false;

  const leftBytes = placement.left * channels;
  const rightOffset = (placement.left + placement.diameter) * channels;
  for (let y = placement.top; y < placement.top + placement.diameter; y += 1) {
    const rowOffset = y * rowBytes;
    if (!before.subarray(rowOffset, rowOffset + leftBytes)
      .equals(after.subarray(rowOffset, rowOffset + leftBytes))) return false;
    if (!before.subarray(rowOffset + rightOffset, rowOffset + rowBytes)
      .equals(after.subarray(rowOffset + rightOffset, rowOffset + rowBytes))) return false;
  }
  return true;
}

function compareOpaqueQrPixels(finalRaw, qrRaw, placement) {
  const finalChannels = 4;
  const qrChannels = 4;
  let opaquePixels = 0;
  let opaqueNonWhitePixels = 0;
  let mismatchPixels = 0;

  for (let y = 0; y < placement.diameter; y += 1) {
    for (let x = 0; x < placement.diameter; x += 1) {
      const qrOffset = (y * placement.diameter + x) * qrChannels;
      if (qrRaw[qrOffset + 3] !== 255) continue;

      opaquePixels += 1;
      if (qrRaw[qrOffset] < 245 || qrRaw[qrOffset + 1] < 245 || qrRaw[qrOffset + 2] < 245) {
        opaqueNonWhitePixels += 1;
      }

      const finalOffset = ((placement.top + y) * canvas.width + placement.left + x) * finalChannels;
      if (
        finalRaw[finalOffset] !== qrRaw[qrOffset]
        || finalRaw[finalOffset + 1] !== qrRaw[qrOffset + 1]
        || finalRaw[finalOffset + 2] !== qrRaw[qrOffset + 2]
        || finalRaw[finalOffset + 3] !== 255
      ) mismatchPixels += 1;
    }
  }

  return { opaquePixels, opaqueNonWhitePixels, mismatchPixels };
}

async function makeOverview(results) {
  const columns = 4;
  const tileWidth = 480;
  const tileHeight = 270;
  const rows = Math.ceil(results.length / columns);
  const overlays = [];

  for (let index = 0; index < results.length; index += 1) {
    const result = results[index];
    const left = (index % columns) * tileWidth;
    const top = Math.floor(index / columns) * tileHeight;
    const thumb = await sharp(result.filePath)
      .resize(tileWidth, tileHeight, { fit: "fill", kernel: sharp.kernel.lanczos3 })
      .png()
      .toBuffer();
    const label = Buffer.from(`
      <svg width="${tileWidth}" height="${tileHeight}" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="154" height="32" fill="rgba(255,255,255,0.93)"/>
        <text x="10" y="23" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#bd2b2b">${result.id} · QR ${result.diameter}px</text>
      </svg>
    `);
    overlays.push({ input: thumb, left, top });
    overlays.push({ input: label, left, top });
  }

  await sharp({
    create: {
      width: columns * tileWidth,
      height: rows * tileHeight,
      channels: 3,
      background: "#f5f0e6",
    },
  })
    .composite(overlays)
    .jpeg({ quality: 94, chromaSubsampling: "4:4:4", mozjpeg: true })
    .toFile(path.join(packageRoot, "overview.jpg"));
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const qrMetadata = await sharp(qrPath).metadata();
  assert(qrMetadata.width === 270 && qrMetadata.height === 270, "QR source must be 270×270");
  assert(qrMetadata.channels === 4 && qrMetadata.hasAlpha, "QR source must be RGBA");

  const qrSha256 = sha256(qrPath);
  const results = [];

  for (const placement of placements) {
    assert(Number.isInteger(placement.left) && Number.isInteger(placement.top), `${placement.id}: non-integer position`);
    assert(placement.left >= 0 && placement.top >= 0, `${placement.id}: QR starts outside canvas`);
    assert(placement.left + placement.diameter <= canvas.width, `${placement.id}: QR exceeds canvas width`);
    assert(placement.top + placement.diameter <= canvas.height, `${placement.id}: QR exceeds canvas height`);

    const fileName = `${placement.id}-purchase-qr-8k.png`;
    const sourcePath = path.join(sourceDir, fileName);
    const filePath = path.join(outputDir, fileName);
    const temporaryPath = `${filePath}.tmp.png`;
    const sourceMetadata = await sharp(sourcePath).metadata();
    assert(sourceMetadata.width === canvas.width && sourceMetadata.height === canvas.height, `${placement.id}: source is not 8K`);

    const resizedQr = await sharp(qrPath)
      .resize(placement.diameter, placement.diameter, {
        fit: "fill",
        kernel: sharp.kernel.nearest,
      })
      .png({ palette: false })
      .toBuffer();

    await sharp(sourcePath)
      .composite([{ input: resizedQr, left: placement.left, top: placement.top, blend: "over" }])
      .ensureAlpha()
      .png({ palette: false, compressionLevel: 8, adaptiveFiltering: true, effort: 7 })
      .toFile(temporaryPath);
    fs.renameSync(temporaryPath, filePath);

    const finalMetadata = await sharp(filePath).metadata();
    assert(finalMetadata.width === canvas.width && finalMetadata.height === canvas.height, `${placement.id}: output is not 8K`);

    const [beforeData, finalData, qrData] = await Promise.all([
      sharp(sourcePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true }),
      sharp(filePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true }),
      sharp(resizedQr).ensureAlpha().raw().toBuffer({ resolveWithObject: true }),
    ]);
    assert(beforeData.info.channels === 4 && finalData.info.channels === 4, `${placement.id}: unexpected poster channels`);
    assert(qrData.info.channels === 4, `${placement.id}: unexpected QR channels`);

    const outsideUnchanged = outsideBoxIsIdentical(beforeData.data, finalData.data, placement, 4);
    const qrPixelCheck = compareOpaqueQrPixels(finalData.data, qrData.data, placement);
    assert(outsideUnchanged, `${placement.id}: pixels outside QR box changed`);
    assert(qrPixelCheck.mismatchPixels === 0, `${placement.id}: opaque QR pixels changed`);

    results.push({
      ...placement,
      fileName,
      filePath,
      width: finalMetadata.width,
      height: finalMetadata.height,
      bytes: fs.statSync(filePath).size,
      sha256: sha256(filePath),
      outsideQrBoxUnchanged: outsideUnchanged,
      opaqueQrPixelsChecked: qrPixelCheck.opaquePixels,
      opaqueNonWhiteQrPixelsChecked: qrPixelCheck.opaqueNonWhitePixels,
      opaqueQrPixelMismatches: qrPixelCheck.mismatchPixels,
    });

    process.stdout.write(`${placement.id}/20  ${placement.diameter}px  OK\n`);
  }

  assert(new Set(results.map((result) => result.sha256)).size === placements.length, "Poster hashes are not unique");
  await makeOverview(results);

  const publicPlacements = placements.map(({ id, centerX, centerY, diameter, left, top }) => ({
    id, centerX, centerY, diameter, left, top,
    right: left + diameter,
    bottom: top + diameter,
  }));
  fs.writeFileSync(
    path.join(packageRoot, "placements-8k.json"),
    `${JSON.stringify({ canvas, qrSource: "assets/purchase-qr-circle-original-270.png", placements: publicPlacements }, null, 2)}\n`,
  );

  const qa = {
    generatedAt: new Date().toISOString(),
    method: "Original 270×270 uploaded QR crop resized once per poster with sharp.kernel.nearest, then composited over the 8K poster.",
    canvas,
    qrSource: {
      path: "assets/purchase-qr-circle-original-270.png",
      width: qrMetadata.width,
      height: qrMetadata.height,
      channels: qrMetadata.channels,
      sha256: qrSha256,
    },
    summary: {
      posterCount: results.length,
      uniquePosterHashes: new Set(results.map((result) => result.sha256)).size,
      allOutputs8K: results.every((result) => result.width === canvas.width && result.height === canvas.height),
      allQrBoxesInBounds: placements.every((placement) => placement.left >= 0
        && placement.top >= 0
        && placement.left + placement.diameter <= canvas.width
        && placement.top + placement.diameter <= canvas.height),
      allPixelsOutsideQrBoxUnchanged: results.every((result) => result.outsideQrBoxUnchanged),
      totalOpaqueQrPixelMismatches: results.reduce((sum, result) => sum + result.opaqueQrPixelMismatches, 0),
    },
    posters: results.map(({ filePath, ...result }) => result),
    realWechatScan: "not-verified",
  };
  fs.writeFileSync(path.join(packageRoot, "QA.json"), `${JSON.stringify(qa, null, 2)}\n`);
  fs.writeFileSync(
    path.join(packageRoot, "SHA256SUMS"),
    `${results.map((result) => `${result.sha256}  posters/${result.fileName}`).join("\n")}\n`,
  );

  process.stdout.write("20/20 recomposed and verified.\n");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
