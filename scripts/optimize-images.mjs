#!/usr/bin/env node
/**
 * Скрипт оптимизации изображений в public/
 * Уменьшает размер файлов без потери качества для веба
 * 
 * Запуск: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

const IMAGE_EXT = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
const MAX_WIDTH = 1920; // макс ширина для больших фото
const QUALITY = { jpeg: 82, webp: 85, png: 80, avif: 80 };

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!IMAGE_EXT.includes(ext)) return;

  const img = sharp(filePath);
  const meta = await img.metadata();
  const width = meta.width || 0;

  let pipeline = img;
  if (width > MAX_WIDTH) {
    pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    await pipeline.jpeg({ quality: QUALITY.jpeg, mozjpeg: true }).toFile(filePath + '.tmp');
  } else if (ext === '.png') {
    await pipeline.png({ quality: QUALITY.png, compressionLevel: 9 }).toFile(filePath + '.tmp');
  } else if (ext === '.webp') {
    await pipeline.webp({ quality: QUALITY.webp }).toFile(filePath + '.tmp');
  } else if (ext === '.avif') {
    await pipeline.avif({ quality: QUALITY.avif }).toFile(filePath + '.tmp');
  } else {
    return;
  }

  const { rename } = await import('fs/promises');
  await rename(filePath + '.tmp', filePath);
  return true;
}

async function processDir(dir) {
  const files = await readdir(dir);
  let count = 0;
  for (const file of files) {
    const full = join(dir, file);
    const s = await stat(full);
    if (s.isDirectory() && !file.startsWith('.')) {
      count += await processDir(full);
    } else if (IMAGE_EXT.includes(extname(file).toLowerCase())) {
      try {
        const before = s.size;
        await optimizeImage(full);
        const after = (await stat(full)).size;
        const saved = ((1 - after / before) * 100).toFixed(1);
        console.log(`  ✓ ${file} (${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB, -${saved}%)`);
        count++;
      } catch (e) {
        console.error(`  ✗ ${file}: ${e.message}`);
      }
    }
  }
  return count;
}

console.log('Оптимизация изображений в public/...\n');
const n = await processDir(PUBLIC_DIR);
console.log(`\nГотово. Оптимизировано ${n} файлов.`);
console.log('Рекомендуется сделать резервную копию перед первым запуском.');
