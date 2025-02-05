const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// SVG content using the lightning bolt
const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#60A5FA" stroke="#60A5FA">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>
`;

const sizes = [16, 32, 48, 64, 128, 256];
const publicDir = path.join(process.cwd(), 'public');

async function generateFavicons() {
  // Ensure public directory exists
  await fs.mkdir(publicDir, { recursive: true });

  // Write the original SVG
  await fs.writeFile(path.join(publicDir, 'favicon.svg'), svgContent);

  // Generate PNG files
  for (const size of sizes) {
    await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));

    // Generate WebP version
    await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .webp()
      .toFile(path.join(publicDir, `favicon-${size}x${size}.webp`));
  }

  // Generate ICO file (containing 16x16, 32x32, and 48x48)
  const icoSizes = [16, 32, 48];
  const icoBuffers = await Promise.all(
    icoSizes.map(size =>
      sharp(Buffer.from(svgContent))
        .resize(size, size)
        .png()
        .toBuffer()
    )
  );

  // Use the first PNG as favicon.ico (you might want to use a proper ICO generator for production)
  await fs.writeFile(
    path.join(publicDir, 'favicon.ico'),
    await sharp(icoBuffers[0]).toBuffer()
  );

  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error);
