import { mkdir, readdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const sharp = require('sharp');

const sourceDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.dirname(sourceDir);

const jobs = [
  { html: 'material-posters.html', output: 'material-series', selector: '.poster', expected: 18 },
  { html: 'esther-posters.html', output: 'esther-series', selector: '.card', expected: 10 },
];

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
});

try {
  for (const job of jobs) {
    const outputDir = path.join(rootDir, job.output);
    await mkdir(outputDir, { recursive: true });
    const page = await browser.newPage({ viewport: { width: 2048, height: 1200 }, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(path.join(sourceDir, job.html)).href, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map(async (img) => {
        if (!img.complete) await new Promise((resolve) => img.addEventListener('load', resolve, { once: true }));
        try { await img.decode(); } catch {}
      }));
    });
    const cards = page.locator(job.selector);
    const count = await cards.count();
    if (count !== job.expected) throw new Error(`${job.html}: expected ${job.expected} posters, found ${count}`);
    for (let index = 0; index < count; index += 1) {
      const card = cards.nth(index);
      const slug = await card.getAttribute('data-file');
      if (!slug) throw new Error(`${job.html}: poster ${index + 1} is missing data-file`);
      await card.screenshot({ path: path.join(outputDir, `${slug}.png`), animations: 'disabled' });
    }
    await page.close();
  }
} finally {
  await browser.close();
}

async function contactSheet(inputDir, outputFile, columns = 4) {
  const names = (await readdir(inputDir)).filter((name) => name.endsWith('.png')).sort();
  const thumbWidth = 480;
  const thumbHeight = 270;
  const rows = Math.ceil(names.length / columns);
  const composites = [];
  for (let index = 0; index < names.length; index += 1) {
    const input = await sharp(path.join(inputDir, names[index])).resize(thumbWidth, thumbHeight).jpeg({ quality: 88 }).toBuffer();
    composites.push({ input, left: (index % columns) * thumbWidth, top: Math.floor(index / columns) * thumbHeight });
  }
  await sharp({ create: { width: columns * thumbWidth, height: rows * thumbHeight, channels: 3, background: '#d8d3c9' } })
    .composite(composites)
    .jpeg({ quality: 90 })
    .toFile(outputFile);
}

await contactSheet(path.join(rootDir, 'material-series'), path.join(rootDir, 'overview-material-series.jpg'));
await contactSheet(path.join(rootDir, 'esther-series'), path.join(rootDir, 'overview-esther-series.jpg'));

console.log('Rendered 28 posters at 1920x1080 and 2 contact sheets.');
