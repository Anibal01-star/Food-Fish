import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.resolve(__dirname, '../public/images');

const missingFallbacks = [
  {
    name: 'fillet-dori-garlic.png',
    fallbackSource: 'udang-garlic-butter.png'
  },
  {
    name: 'bandeng-cabut-duri.png',
    fallbackSource: 'gurame-bumbu-kuning.png'
  },
  {
    name: 'salmon-teriyaki.png',
    fallbackSource: 'nila-bakar-madu.png'
  },
  {
    name: 'simpan-freezer.png',
    fallbackSource: 'paket-keluarga.png'
  },
  {
    name: 'kemasan-vacuum-pack.png',
    fallbackSource: 'bumbu-rempah-nusantara.png'
  }
];

for (const item of missingFallbacks) {
  const dest = path.join(targetDir, item.name);
  if (!fs.existsSync(dest)) {
    const src = path.join(targetDir, item.fallbackSource);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`✓ Generated ${item.name} from ${item.fallbackSource}`);
    }
  }
}
