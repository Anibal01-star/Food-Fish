/**
 * DATA ARTIKEL & INSPIRASI MEMASAK FOODFISH
 * Seluruh foto artikel menggunakan format PNG lokal di /images/*.png.
 */

export const ARTICLES = [
  {
    id: "art-001",
    slug: "tips-menggoreng-ikan-marinasi-agar-garing-tidak-lengket",
    title: "5 Tips Menggoreng Ikan Marinasi Agar Garing Maksimal & Anti Lengket di Wajan",
    excerpt: "Sering mengalami bumbu ikan menempel di wajan atau minyak meletup saat menggoreng ikan berbumbu? Ikuti 5 langkah sederhana dari chef rumahan ini.",
    category: "Tips Memasak",
    date: "10 Oktober 2026",
    readTime: "4 menit baca",
    author: "Tim Dapur FoodFish",
    image: "/images/tips-menggoreng-ikan.png",
    tags: ["Tips Menggoreng", "Anti Lengket", "Ikan Garing"],
    content: `
      Menggoreng ikan yang sudah dimarinasi dengan aneka bumbu rempah seperti kunyit, bawang, dan ketumbar memerlukan sedikit trik agar bumbu tidak gosong duluan sebelum ikan matang.

      1. **Pastikan Ikan Tidak Terlalu Dingin (Thawing Sempurna)**
      Jika ikan baru dikeluarkan dari freezer, pastikan sudah dithawing (dicairkan) pada suhu ruang atau chiller hingga tekstur daging lentur kembali. Menggoreng ikan yang masih beku di bagian dalam akan menurunkan suhu minyak secara drastis dan membuat bagian luar gosong sementara daging dalam masih mentah.

      2. **Gunakan Minyak Cukup & Panas Stabil**
      Pastikan jumlah minyak cukup untuk merendam setidaknya setengah badan ikan. Panaskan minyak dengan api sedang. Untuk menguji kesiapan minyak, celupkan sedikit ujung sumpit kayu—jika timbul gelembung halus, minyak siap digunakan.

      3. **Trik Taburan Tepung Beras di Minyak**
      Taburkan sejumput kecil tepung beras atau tepung terigu ke dalam minyak panas sebelum memasukkan ikan. Tepung akan mengikat sisa kelembapan berlebih sehingga minyak tidak meletup dan ikan tidak menempel di dasar wajan.

      4. **Jangan Terburu-buru Membalik Ikan**
      Biarkan satu sisi mengering dan berubah warna menjadi kuning kecokelatan keemasan sebelum dibalik. Membalik ikan terlalu cepat saat bumbu belum set adalah penyebab utama kulit ikan hancur dan menempel di wajan.

      5. **Tiriskan Berdiri di Rak Peniris**
      Setelah diangkat, letakkan ikan secara vertikal atau di atas rak kawat berpori, bukan langsung di atas tisu makan datar agar uap panas tidak membuat bagian bawah ikan kembali lembek.
    `
  },
  {
    id: "art-002",
    slug: "cara-menyimpan-ikan-berbumbu-di-freezer-tahan-lama",
    title: "Panduan Menyimpan Ikan Berbumbu di Freezer Agar Tetap Segar Hingga 2 Bulan",
    excerpt: "Simpan stok lauk ikan marinasi Anda dengan teknik vacuum & deep freeze yang tepat agar cita rasa bumbu tetap meresap prima.",
    category: "Food Preparation",
    date: "8 Oktober 2026",
    readTime: "3 menit baca",
    author: "Chef FoodFish",
    image: "/images/simpan-freezer.png",
    tags: ["Food Prep", "Penyimpanan", "Freezer"],
    content: `
      Keunggulan utama produk ikan marinasi FoodFish adalah kepraktisannya sebagai stok makanan harian. Agar kualitas rasa dan tekstur ikan tetap prima:

      1. **Pertahankan Kemasan Kedap Udara (Vacuum Pack)**
      Setiap produk FoodFish dikemas menggunakan kemasan kedap udara. Udara adalah musuh utama kesegaran ikan karena dapat menyebabkan 'freezer burn' (kondisi daging mengering dan kehilangan sari rasa).

      2. **Atur Suhu Freezer Minimal -18°C**
      Suhu beku yang stabil menghentikan aktivitas bakteri dan menjaga enzim alami daging ikan tetap terjaga. Hindari meletakkan ikan di pintu freezer karena suhu pintu kerap fluktuatif akibat sering dibuka-tutup.

      3. **Bagi Per Porsi Makan**
      Jangan pernah membekukan kembali (re-freeze) ikan yang sudah dicairkan. Selalu cairkan hanya sejumlah pack yang akan dimasak untuk santapan hari tersebut.
    `
  },
  {
    id: "art-003",
    slug: "3-resep-sambal-pendamping-ikan-bakar-dan-goreng",
    title: "3 Resep Sambal Segar Rumahan Paling Cocok Menemani Ikan Bakar & Ikan Goreng",
    excerpt: "Mulai dari Sambal Dabu-Dabu khas Manado, Sambal Bawang Korek pedas nampol, hingga Sambal Matah aroma kecombrang yang segar.",
    category: "Resep & Inspirasi",
    date: "5 Oktober 2026",
    readTime: "5 menit baca",
    author: "Dapur Rasa Malang",
    image: "/images/resep-sambal.png",
    tags: ["Resep Sambal", "Pendamping Ikan", "Kuliner"],
    content: `
      Ikan berbumbu gurih nikmat rasanya belum lengkap tanpa cocolan sambal segar khas nusantara. Berikut 3 resep sambal kilat yang bisa Anda buat hanya dalam 5 menit:

      1. **Sambal Dabu-Dabu Segar**
      Potong dadu tomat merah, tomat hijau, cabai rawit merah, dan bawang merah. Beri sedikit perasan air jeruk nipis, sejumput garam, dan siram dengan minyak kelapa panas. Sangat cocok untuk mendampingi Ikan Bakar Madu Jimbaran.

      2. **Sambal Bawang Korek Pedas Nampol**
      Ulek kasar 15 buah cabai rawit merah dan 4 siung bawang putih dengan garam dan penyedap rasa. Siram dengan 3 sendok makan minyak jelantah sisa menggoreng Ikan Gurame Bumbu Kuning selagi mendidih. Aromanya luar biasa harum!

      3. **Sambal Kecap Rawit Limau**
      Iris tipis cabai rawit, bawang merah, dan tomat. Campurkan ke dalam kecap manis kental, lalu kucuri air perasan jeruk limau. Sempurna untuk cocolan cumi atau fillet dori goreng tepung.
    `
  }
];

export const getArticleBySlug = (slug) => {
  return ARTICLES.find((a) => a.slug === slug);
};
