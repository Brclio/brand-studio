import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'posters.js'), 'utf8'), sandbox);
const posters = sandbox.window.POSTERS;
const permitMissing = process.argv.includes('--allow-missing');
const errors = [];
const results = [];
const hashes = new Set();
const ids = new Set();

if (posters.length !== 28) errors.push(`Expected 28 manifest entries, found ${posters.length}`);
for (const [series, expected] of [['material', 18], ['esther', 10]]) {
  const expectedFiles = posters.filter(poster => poster.series === series).map(poster => poster.file);
  if (expectedFiles.length !== expected) errors.push(`${series}: expected ${expected} entries`);
  const folder = path.join(root, `${series}-series`);
  const actual = fs.readdirSync(folder).filter(file => /\.(png|jpe?g|webp)$/i.test(file));
  for (const file of actual) {
    if (!expectedFiles.includes(file)) errors.push(`Unexpected delivery image: ${series}-series/${file}`);
  }
}

for (const poster of posters) {
  if (ids.has(poster.id)) errors.push(`Duplicate id ${poster.id}`);
  ids.add(poster.id);
  if (path.basename(poster.file) !== poster.file || !poster.file.endsWith('.png')) {
    errors.push(`Invalid path: ${poster.file}`);
    continue;
  }
  const relative = `${poster.series}-series/${poster.file}`;
  const file = path.join(root, relative);
  if (!fs.existsSync(file)) {
    results.push({ id: poster.id, file: relative, status: 'missing' });
    if (!permitMissing) errors.push(`Missing: ${relative}`);
    continue;
  }
  const bytes = fs.readFileSync(file);
  if (bytes.length < 1000 || !bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) {
    errors.push(`Not a valid PNG: ${relative}`);
    continue;
  }
  if (bytes.toString('ascii', 12, 16) !== 'IHDR') errors.push(`Missing PNG header: ${relative}`);
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  const relativeAspectError = Math.abs(width / height / (16 / 9) - 1);
  if (relativeAspectError > 0.002) errors.push(`Not approximately 16:9: ${relative} (${width}x${height})`);
  if (width < 1600 || height < 900) errors.push(`Below delivery target: ${relative} (${width}x${height})`);
  if (bytes.length >= 100 * 1024 * 1024) errors.push(`Over GitHub's 100 MiB file limit: ${relative}`);
  const sha256 = crypto.createHash('sha256').update(bytes).digest('hex');
  if (hashes.has(sha256)) errors.push(`Duplicate image bytes: ${relative}`);
  hashes.add(sha256);
  results.push({ id: poster.id, file: relative, title: poster.title, width, height, bytes: bytes.length, sha256, status: 'ok' });
}

console.log(JSON.stringify({
  checkedAt: new Date().toISOString(),
  method: 'PNG headers, aspect ratio, count, filenames, size limits and SHA-256; visual/text review is separate.',
  expected: 28,
  present: results.filter(result => result.status === 'ok').length,
  totalBytes: results.reduce((total, result) => total + (result.bytes || 0), 0),
  errors,
  results
}, null, 2));
if (errors.length) process.exitCode = 1;
