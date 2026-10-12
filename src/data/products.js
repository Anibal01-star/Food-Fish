/**
 * DATA PRODUK FOODFISH (CONTOH SIMULASI KATALOG)
 *
 * Catatan: Seluruh aset gambar produk menggunakan format PNG lokal di folder /images/*.png.
 * Data produk, berat, foto contoh, dan harga dalam rupiah di bawah ini merupakan data
 * simulasi contoh untuk kebutuhan demonstrasi frontend website.
 */

export const PRODUCTS = [
  {
    id: "ff-001",
    slug: "gurame-bumbu-kuning-rempah",
    name: "Gurame Bumbu Kuning Rempah",
    category: "bumbu-kuning",
    categoryName: "Ikan Bumbu Kuning",
    shortDescription: "Ikan gurame segar dibalut racikan kunyit, bawang putih, lengkuas & rempah khas nusantara.",
    description: "Ikan Gurame segar kualitas pilihan yang telah dibersihkan secara higienis, dibelah butterfly (pipih), dan dimarinasi dengan bumbu kuning tradisional kaya rempah. Bumbu meresap sempurna hingga ke serat daging terdalam. Siap langsung digoreng garing atau dipanggang teflon tanpa perlu tambahan bumbu apapun.",
    price: 42000,
    weight: "500 - 600 gram (1 ekor utuh potong butterfly)",
    serving: "2 - 3 Porsi",
    cookingMethod: "Goreng garing, Kukus bumbu, atau Bakar teflon",
    spiceLevel: "Gurih Rempah (Tidak Pedas)",
    ingredients: "Ikan Gurame segar, kunyit segar, bawang putih, bawang merah, ketumbar, lengkuas, jahe, garam laut, serai, daun jeruk.",
    isFeatured: true,
    inStock: true,
    image: "/images/gurame-bumbu-kuning.png",
    tags: ["Best Seller", "Siap Goreng", "Favorit Keluarga"]
  },
  {
    id: "ff-002",
    slug: "nila-marinasi-bakar-madu-jimbaran",
    name: "Nila Bakar Bumbu Madu Jimbaran",
    category: "bakar-marinasi",
    categoryName: "Ikan Bakar Marinasi",
    shortDescription: "Ikan nila pilihan dengan olesan bumbu bakar manis gurih beraroma asap menggugah selera.",
    description: "Nila air tawar segar pilihan tanpa bau lumpur. Dimarinasi dengan racikan saus bakar madu khas Jimbaran berpadu dengan kecap rempah dan cabai segar halus. Cukup panggang di atas wajan antilengket atau panggangan arang selama 8-10 menit untuk mendapatkan aroma karamel gurih lezat.",
    price: 36000,
    weight: "500 gram (Isi 2 ekor)",
    serving: "2 - 3 Porsi",
    cookingMethod: "Bakar teflon, Grill arang, atau Air fryer 180°C (12 menit)",
    spiceLevel: "Manis Gurih Sedang",
    ingredients: "Ikan Nila segar, madu alami, kecap manis tradisional, cabai merah keriting, bawang putih, terasi bakar, ketumbar, jeruk nipis.",
    isFeatured: true,
    inStock: true,
    image: "/images/nila-bakar-madu.png",
    tags: ["Rekomendasi", "Aroma Bakar", "Praktis"]
  },
  {
    id: "ff-003",
    slug: "lele-marinasi-ketumbar-bawang",
    name: "Lele Marinasi Ketumbar Bawang",
    category: "bumbu-kuning",
    categoryName: "Ikan Bumbu Kuning",
    shortDescription: "Lele segar bersih bebas lendir, dibumbui ketumbar sangrai dan bawang gurih renyah.",
    description: "Ikan lele segar yang telah dibersihkan organ dalam serta lendirnya secara teliti. Dimarinasi dalam perendaman air asam jawa, bawang putih lokal, dan ketumbar sangrai pilihan. Hasil gorengan dijamin renyah di luar, empuk gurih di dalam, dan tidak lengket saat digoreng.",
    price: 28000,
    weight: "500 gram (Isi 4 - 5 ekor)",
    serving: "3 - 4 Porsi",
    cookingMethod: "Goreng minyak banyak (Deep fry) hingga garing renyah",
    spiceLevel: "Gurih Asin Wangi Ketumbar",
    ingredients: "Ikan Lele segar, ketumbar sangrai, bawang putih, garam, kunyit, perasan jeruk nipis.",
    isFeatured: true,
    inStock: true,
    image: "/images/lele-ketumbar.png",
    tags: ["Super Crispy", "Menu Harian"]
  },
  {
    id: "ff-004",
    slug: "fillet-dori-bumbu-garlic-butter-lemon",
    name: "Fillet Dori Garlic Butter & Lemon",
    category: "fillet-siap-masak",
    categoryName: "Fillet & Tanpa Duri",
    shortDescription: "Daging dori fillet empuk tanpa duri dengan lumuran mentega bawang dan wangi lemon.",
    description: "Dori fillet premium tanpa tulang dan duri sama sekali. Daging lembut juicy dilapisi bumbu bawang putih panggang, butter lezat, dan sejumput herbs segar. Sangat disukai anak-anak dan cocok untuk pan-seared di wajan teflon dengan sedikit minyak atau butter.",
    price: 38000,
    weight: "450 gram (Isi 3 lembar fillet)",
    serving: "2 - 3 Porsi",
    cookingMethod: "Pan-sear teflon 3 menit per sisi, atau kukus sehat",
    spiceLevel: "Gurih Lembut Non-Pedas (Kids Friendly)",
    ingredients: "Fillet Ikan Dori murni, mentega, bawang putih cincang, sari lemon, peterseli, lada putih, garam himalaya.",
    isFeatured: true,
    inStock: true,
    image: "/images/fillet-dori-garlic.png",
    tags: ["Tanpa Duri", "Kids Friendly", "Tinggi Protein"]
  },
  {
    id: "ff-005",
    slug: "bandeng-cabut-duri-marinasi-kunyit",
    name: "Bandeng Cabut Duri Bumbu Kunyit",
    category: "fillet-siap-masak",
    categoryName: "Fillet & Tanpa Duri",
    shortDescription: "Ikan bandeng gurih dengan seluruh duri halus tercabut bersih, siap goreng empuk.",
    description: "Kini menikmati lezatnya bandeng tidak perlu khawatir duri! Bandeng cabut duri higienis yang telah dibersihkan duri halusnya satu per satu, kemudian dibalut bumbu marinasi kunyit jahe tradisional. Daging empuk, gurih, dan siap goreng dalam waktu 5 menit.",
    price: 45000,
    weight: "500 gram (Isi 2 ekor bandeng siap masak)",
    serving: "3 - 4 Porsi",
    cookingMethod: "Goreng tepung krispi, goreng biasa, atau kukus presto",
    spiceLevel: "Gurih Rempah Tradisional",
    ingredients: "Ikan Bandeng segar cabut duri, kunyit, bawang putih, jahe, kemiri, daun salam, ketumbar, garam.",
    isFeatured: false,
    inStock: true,
    image: "/images/bandeng-cabut-duri.png",
    tags: ["Bebas Duri", "Khas Nusantara"]
  },
  {
    id: "ff-006",
    slug: "tongkol-suwir-bumbu-balado-pedas",
    name: "Tongkol Segar Marinasi Balado Merah",
    category: "bakar-marinasi",
    categoryName: "Ikan Bakar Marinasi",
    shortDescription: "Potongan tongkol segar bumbu balado cabai merah pedas mantap siap tumis / panggang.",
    description: "Ikan tongkol segar potongan fillet bebas duri kasar yang dimarinasi dalam pasta bumbu balado cabai merah dan tomat segar. Tingkat kepedasan pas yang membangkitkan selera makan keluarga Indonesia. Praktis tinggal ditumis di wajan panas sebentar saja.",
    price: 32000,
    weight: "400 gram (Potongan steak/suwir tebal)",
    serving: "2 - 3 Porsi",
    cookingMethod: "Tumis dengan sedikit minyak atau panggang teflon",
    spiceLevel: "Pedas Sedang Menggigit",
    ingredients: "Ikan Tongkol segar, cabai merah besar, cabai rawit, tomat segar, bawang merah, bawang putih, daun jeruk, minyak kelapa.",
    isFeatured: false,
    inStock: true,
    image: "/images/tongkol-balado.png",
    tags: ["Pedas Mantap", "Lauk Favorit"]
  },
  {
    id: "ff-007",
    slug: "udang-vaname-marinasi-garlic-butter",
    name: "Udang Kupas Marinasi Bawang Putih",
    category: "fillet-siap-masak",
    categoryName: "Fillet & Tanpa Duri",
    shortDescription: "Udang vaname segar kupas bersih dengan racikan garlic butter istimewa.",
    description: "Udang vaname segar kupas (tersisa ekor) yang telah dibuang kotoran punggungnya (deveined). Dimarinasi dengan racikan garlic butter wangi dan taburan rempah daun. Tinggal ditumis selama 3-4 menit untuk pelengkap nasi hangat.",
    price: 49000,
    weight: "350 gram (Isi 18 - 22 ekor udang kupas)",
    serving: "2 - 3 Porsi",
    cookingMethod: "Tumis cepat di wajan panas (Stir-fry) 3 menit",
    spiceLevel: "Gurih Wangi Bawang",
    ingredients: "Udang Vaname segar, bawang putih cincang halus, mentega nabati, lada, garam laut, daun peterseli.",
    isFeatured: false,
    inStock: true,
    image: "/images/udang-garlic-butter.png",
    tags: ["Seafood Segar", "Siap Tumis"]
  },
  {
    id: "ff-008",
    slug: "paket-komplit-keluarga-hemat-3-varian",
    name: "Paket Hemat Komplit 3 Varian Ikan",
    category: "paket-keluarga",
    categoryName: "Paket Hemat Keluarga",
    shortDescription: "Paket komplit berisi Gurame Bumbu Kuning, Nila Bakar Madu, dan Lele Ketumbar.",
    description: "Pilihan terbaik untuk stok lauk praktis keluarga selama seminggu! Paket ini terdiri dari 1 pack Gurame Bumbu Kuning Rempah (500g), 1 pack Nila Bakar Madu Jimbaran (500g), dan 1 pack Lele Marinasi Ketumbar (500g). Kemasan vacuum pack higienis yang aman disimpan beku dalam freezer hingga 2 bulan.",
    price: 99000,
    weight: "1.500 gram (Total 3 kemasan pack)",
    serving: "8 - 10 Porsi makan keluarga",
    cookingMethod: "Goreng, Bakar Teflon, atau Airfryer sesuai selera masing-masing varian",
    spiceLevel: "Kombinasi (Gurih Rempah & Manis Gurih)",
    ingredients: "Kombinasi ikan Gurame, Nila, dan Lele segar dengan racikan bumbu rempah alami FoodFish.",
    isFeatured: true,
    inStock: true,
    image: "/images/paket-keluarga.png",
    tags: ["Paket Hemat", "Stok Mingguan", "Terlaris"]
  },
  {
    id: "ff-009",
    slug: "salmon-trout-marinasi-teriyaki",
    name: "Salmon Trout Marinasi Saus Teriyaki",
    category: "fillet-siap-masak",
    categoryName: "Fillet & Tanpa Duri",
    shortDescription: "Potongan fillet salmon kaya omega-3 dengan bumbu teriyaki manis gurih meresap.",
    description: "Potongan salmon trout segar kaya asam lemak omega-3 yang dimarinasi dalam racikan saus teriyaki gurih manis khas Jepang. Sangat praktis untuk sarapan atau makan malam sehat bergizi.",
    price: 68000,
    weight: "250 gram (Isi 2 steak fillet salmon)",
    serving: "2 Porsi",
    cookingMethod: "Pan-sear teflon 3-4 menit per sisi atau panggang oven",
    spiceLevel: "Manis Gurih Teriyaki",
    ingredients: "Fillet Salmon Trout segar, saus teriyaki alami, kecap kedelai fermentasi, jahe parut, biji wijen sangrai, madu.",
    isFeatured: false,
    inStock: false, // Digunakan untuk menguji ketersediaan / status habis (out of stock)
    image: "/images/salmon-teriyaki.png",
    tags: ["Stok Habis Sementara", "Omega-3", "Sehat"]
  }
];

export const getProductBySlug = (slug) => {
  return PRODUCTS.find((p) => p.slug === slug);
};

export const getFeaturedProducts = () => {
  return PRODUCTS.filter((p) => p.isFeatured);
};

export const getRelatedProducts = (currentProductId, category, limit = 3) => {
  return PRODUCTS
    .filter((p) => p.id !== currentProductId && (p.category === category || p.isFeatured))
    .slice(0, limit);
};
