#!/usr/bin/env node
/**
 * Convert image.png to image.ico for Windows app icon
 * Usage: node convert-icon.js
 */

const fs = require('fs');
const path = require('path');

// Check if image.png exists
const imagePath = path.join(__dirname, 'image.png');
if (!fs.existsSync(imagePath)) {
  console.error('❌ image.png not found in root folder');
  process.exit(1);
}

console.log('📦 Converting image.png to image.ico...');
console.log('');

// Option 1: Try using sharp if available
try {
  const sharp = require('sharp');
  
  sharp(imagePath)
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(__dirname, 'image.ico'), (err, info) => {
      if (err) throw err;
      console.log('✅ Successfully created image.ico');
      console.log('   Size: ' + (fs.statSync(path.join(__dirname, 'image.ico')).size / 1024).toFixed(2) + ' KB');
    });
} catch (e) {
  console.log('⚠️  Sharp not installed. Installing required packages...');
  console.log('');
  
  // Fallback: Provide instructions for manual conversion
  const instructions = `
MANUAL CONVERSION INSTRUCTIONS:

Option A - Online Tool (Fastest):
1. Go to: https://icoconvert.com/
2. Upload: image.png
3. Download: image.ico
4. Place image.ico in the root folder (same as image.png)

Option B - Using ImageMagick (if installed):
  convert image.png -define icon:auto-resize=256,128,96,64,48,32,16 image.ico

Option C - Install sharp for auto-conversion:
  npm install sharp
  node convert-icon.js

After conversion, run:
  npm run build-win
`;

  console.log(instructions);
  process.exit(1);
}
