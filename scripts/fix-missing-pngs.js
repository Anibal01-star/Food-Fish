import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.resolve(__dirname, '../public/images');

const missingFallbacks = [
  {
    name: 'fillet-dori-garlic-marinasi-pak-abil.png',
    fallbackSource: 'udang-garlic-butter-marinasi-pak-abil.png'
  },
  {
    name: 'bandeng-cabut-duri-marinasi-pak-abil.png',
    fallbackSource: 'gurame-bumbu-kuning-marinasi-pak-abil.png'
  },
  {
    name: 'salmon-teriyaki-marinasi-pak-abil.png',
    fallbackSource: 'nila-bakar-madu-marinasi-pak-abil.png'
  },
  {
    name: 'simpan-freezer-marinasi-pak-abil.png',
    fallbackSource: 'paket-keluarga-marinasi-pak-abil.png'
  },
  {
    name: 'kemasan-vacuum-pack-marinasi-pak-abil.png',
    fallbackSource: 'bumbu-rempah-nusantara-marinasi-pak-abil.png'
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
