import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, '../public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const imagesToDownload = [
  {
    name: 'hero-ikan-marinasi.png',
    url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85&fm=png'
  },
  {
    name: 'gurame-bumbu-kuning.png',
    url: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'nila-bakar-madu.png',
    url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'lele-ketumbar.png',
    url: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'fillet-dori-garlic.png',
    url: 'https://images.unsplash.com/photo-1514944298352-f5f9f8e404e3?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'bandeng-cabut-duri.png',
    url: 'https://images.unsplash.com/photo-1544943910-4c1dc44a0b27?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'tongkol-balado.png',
    url: 'https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'udang-garlic-butter.png',
    url: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'paket-keluarga.png',
    url: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'salmon-teriyaki.png',
    url: 'https://images.unsplash.com/photo-1499125562588-29fb8a56b5d0?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'tips-menggoreng-ikan.png',
    url: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=800&q=85&fm=png'
  },
  {
    name: 'simpan-freezer.png',
    url: 'https://images.unsplash.com/photo-1544943910-4c1dc44a0b27?auto=format&fit=crop&w=800&q=85&fm=png'
  },
  {
    name: 'resep-sambal.png',
    url: 'https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=85&fm=png'
  },
  {
    name: 'dapur-persiapan.png',
    url: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'bumbu-rempah-nusantara.png',
    url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'kemasan-vacuum-pack.png',
    url: 'https://images.unsplash.com/photo-1544943910-4c1dc44a0b27?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'ikan-bakar-teflon.png',
    url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85&fm=png'
  },
  {
    name: 'ikan-goreng-crispy.png',
    url: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=900&q=85&fm=png'
  }
];

async function run() {
  console.log(`Downloading ${imagesToDownload.length} PNG images to ${targetDir}...`);
  for (const item of imagesToDownload) {
    const dest = path.join(targetDir, item.name);
    try {
      console.log(`Downloading ${item.name}...`);
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(dest, buffer);
      console.log(`✓ Saved ${item.name} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message);
    }
  }
  console.log('Finished downloading PNG images!');
}

run();
