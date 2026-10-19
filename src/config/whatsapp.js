/**
 * KONFIGURASI WHATSAPP & IDENTITAS BISNIS — MARINASI PAK ABIL
 *
 * Nomor WhatsApp resmi bisnis Marinasi Pak ABIL di Malang Raya.
 * Format internasional tanpa tanda plus atau strip: "6287796397461".
 */

export const WHATSAPP_BUSINESS_NUMBER = "6287796397461";

// Nama bisnis & identitas resmi
export const BUSINESS_INFO = {
  name: "Marinasi Pak ABIL",
  tagline: "Ikan Marinasi Siap Masak Malang",
  serviceArea: "Malang Raya (Kota Malang, Kab. Malang, Kota Batu), Jawa Timur",
  operationalHours: "Setiap Hari, 07:00 - 17:00 WIB",
  email: "radikanabil8@gmail.com",
  address: "Area Layanan Pengiriman: Malang Raya, Jawa Timur, Indonesia",
  instagram: "@marinasipakabil",
  notes: "Pemesanan dilayani melalui keranjang belanja website dan konfirmasi pesanan langsung via WhatsApp untuk area Malang Raya."
};

/**
 * Memeriksa apakah nomor WhatsApp bisnis sudah dikonfigurasi dengan nomor valid
 */
export const isWhatsAppConfigured = () => {
  if (!WHATSAPP_BUSINESS_NUMBER) return false;
  if (WHATSAPP_BUSINESS_NUMBER.includes("GANTI_DENGAN") || WHATSAPP_BUSINESS_NUMBER === "PLACEHOLDER") {
    return false;
  }
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
