/**
 * KONFIGURASI WHATSAPP FOODFISH
 *
 * Ubah nomor di bawah ini dengan nomor WhatsApp resmi bisnis FoodFish.
 * Format nomor internasional Indonesia tanpa tanda plus atau strip: contoh "6281234567890".
 * 
 * Nilai default adalah placeholder 'GANTI_DENGAN_NOMOR_BISNIS'.
 * Sistem akan mendeteksi jika nomor masih placeholder dan menampilkan panduan serta mencegah
 * pengiriman ke nomor fiktif/palsu.
 */

export const WHATSAPP_BUSINESS_NUMBER = "GANTI_DENGAN_NOMOR_BISNIS";

// Nama bisnis & identitas resmi
export const BUSINESS_INFO = {
  name: "FoodFish",
  tagline: "Ikan Berbumbu, Praktis Tinggal Masak",
  serviceArea: "Malang Raya (Kota Malang, Kab. Malang, Kota Batu)",
  operationalHours: "Setiap Hari, 07:00 - 17:00 WIB",
  email: "kontak@foodfish.id",
  address: "Area Layanan: Malang Raya, Jawa Timur, Indonesia",
  instagram: "@foodfish.malang",
  notes: "Katalog produk dan harga merupakan data simulasi contoh. Silakan lengkapi nomor WhatsApp bisnis dan data resmi sebelum peluncuran komersial."
};

/**
 * Memeriksa apakah nomor WhatsApp bisnis sudah dikonfigurasi dengan nomor valid
 */
export const isWhatsAppConfigured = () => {
  if (!WHATSAPP_BUSINESS_NUMBER) return false;
  if (WHATSAPP_BUSINESS_NUMBER.includes("GANTI_DENGAN") || WHATSAPP_BUSINESS_NUMBER === "PLACEHOLDER") {
    return false;
  }
  // Cek apakah angka dan panjang minimal wajar (misal minimal 9 digit)
  const cleanNumber = WHATSAPP_BUSINESS_NUMBER.replace(/\D/g, "");
  return cleanNumber.length >= 9;
};

/**
 * Menghasilkan URL wa.me yang aman dan terformat
 * @param {string} messageText Teks pesan WhatsApp
 * @param {string} customNumber Nomor override opsional untuk simulasi/testing
 */
export const createWhatsAppUrl = (messageText, customNumber = null) => {
  const number = customNumber || (isWhatsAppConfigured() ? WHATSAPP_BUSINESS_NUMBER.replace(/\D/g, "") : "");
  const encodedMessage = encodeURIComponent(messageText);
  if (!number) {
    return `https://wa.me/?text=${encodedMessage}`;
  }
  return `https://wa.me/${number}?text=${encodedMessage}`;
};
