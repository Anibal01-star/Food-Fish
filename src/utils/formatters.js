/**
 * Format angka menjadi format Rupiah Indonesia (cth: Rp 42.000)
 * @param {number} amount
 * @returns {string}
 */
export const formatRupiah = (amount) => {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return 'Rp 0';
  }
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(amount);
};

/**
 * Format nomor telepon Indonesia menjadi format rapi untuk tampilan
 * @param {string} phone
 * @returns {string}
 */
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    return '08' + cleaned.slice(2);
  }
  return phone;
};

/**
 * Format pesan pesanan untuk dikirimkan melalui WhatsApp
 * @param {Object} orderData
 * @returns {string}
 */
export const buildWhatsAppOrderMessage = ({
  customerName,
  customerPhone,
  deliveryMethod,
  deliveryAddress,
  notes,
  cartItems,
  totalPrice
}) => {
  const line = "================================";
  const deliveryText = deliveryMethod === 'pickup' 
    ? "Ambil Sendiri (Self-Pickup)" 
    : "Pengiriman ke Alamat (Delivery)";

  const itemsList = cartItems.map((item, index) => {
    const subtotal = item.product.price * item.quantity;
    return `${index + 1}. *${item.product.name}*\n   • Jumlah: ${item.quantity} pack\n   • Harga Satuan: ${formatRupiah(item.product.price)}\n   • Subtotal: ${formatRupiah(subtotal)}`;
  }).join("\n\n");

  const addressSection = deliveryMethod === 'delivery' 
    ? `📍 *Alamat Pengiriman:*\n${deliveryAddress}\n(Area: Malang Raya)`
    : `📍 *Metode Penyerahan:*\nAmbil Sendiri (Self-Pickup di Lokasi FoodFish Malang)`;

  const notesSection = notes && notes.trim() !== ''
    ? `📝 *Catatan Khusus:*\n${notes.trim()}`
    : `📝 *Catatan Khusus:* (Tidak ada catatan)`;

  return `Halo FoodFish Malang! 🐟✨
Saya ingin memesan produk ikan marinasi siap masak dengan rincian berikut:

${line}
📋 *DATA PEMESAN*
• Nama: *${customerName}*
• No. WhatsApp: *${customerPhone}*
• Opsi: *${deliveryText}*
${addressSection}
${notesSection}
${line}

🛒 *RINCIAN PESANAN:*
${itemsList}

${line}
💰 *TOTAL HARGA PRODUK:* *${formatRupiah(totalPrice)}*
${line}

📌 *Catatan:* 
_Ongkos kirim akan dikonfirmasi oleh penjual berdasarkan titik pengantaran di Malang Raya. Mohon konfirmasi ketersediaan stok produk di atas. Terima kasih!_`;
};

/**
 * Format pesan tanya produk langsung (single product inquiry)
 */
export const buildSingleProductWhatsAppMessage = (product, quantity = 1) => {
  const subtotal = product.price * quantity;
  return `Halo FoodFish Malang! 🐟
Saya tertarik dan ingin menanyakan ketersediaan produk berikut:

• *${product.name}*
• Jumlah: ${quantity} pack (${product.weight || ''})
• Estimasi Harga: ${formatRupiah(subtotal)}

Apakah produk ini tersedia untuk pengiriman di Malang Raya hari ini? Terima kasih!`;
};
