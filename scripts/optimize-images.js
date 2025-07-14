// optimize-images.js
// Usage: node scripts/optimize-images.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '../public/images/hero');
const maxWidth = 554;

function isImage(file) {
  return /\.(jpe?g|png|avif)$/i.test(file);
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const base = filePath.replace(ext, '');
  const image = sharp(filePath);
  const metadata = await image.metadata();
  let resized = image;
  if (metadata.width > maxWidth) {
    resized = image.resize({ width: maxWidth });
  }
  // Output .webp
  await resized.toFile(base + '.webp');
  // Output .avif
  await resized.toFile(base + '.avif');
  // Delete original JPEG if new versions created
  if (ext === '.jpg' || ext === '.jpeg') {
    fs.unlinkSync(filePath);
    console.log('Deleted original:', filePath);
  }
  console.log('Optimized:', filePath);
}

async function processAll() {
  const files = fs.readdirSync(imagesDir);
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    if (fs.statSync(filePath).isFile() && isImage(file)) {
      try {
        await optimizeImage(filePath);
      } catch (e) {
        console.error('Error processing', file, e);
      }
    }
  }
}

processAll();
