import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  ArrowLeft, 
  MessageCircle, 
  Truck, 
  MapPin, 
  User, 
  Phone, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  ExternalLink,
  Store
} from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { formatRupiah, buildWhatsAppOrderMessage } from '../utils/formatters.js';
import { WHATSAPP_BUSINESS_NUMBER, isWhatsAppConfigured, createWhatsAppUrl } from '../config/whatsapp.js';
import { WhatsAppNotice } from '../components/WhatsAppNotice.jsx';

export const CheckoutPage = () => {
  const { cartItems, totalProductPrice, totalItemCount } = useCart();
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deliveryMethod: 'delivery', // 'delivery' | 'pickup'
    address: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [testCustomNumber, setTestCustomNumber] = useState('');
  const [showOrderPreviewModal, setShowOrderPreviewModal] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  // Validasi Form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap pemesan wajib diisi.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nama minimal 3 karakter.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor WhatsApp / telepon aktif wajib diisi.';
    } else {
      const cleanPhone = formData.phone.replace(/\D/g, '');
      if (cleanPhone.length < 9) {
        newErrors.phone = 'Format nomor telepon tidak valid (minimal 9 digit).';
      }
    }

    if (formData.deliveryMethod === 'delivery') {
      if (!formData.address.trim()) {
        newErrors.address = 'Alamat pengiriman di Malang Raya wajib diisi.';
      } else if (formData.address.trim().length < 10) {
        newErrors.address = 'Mohon masukkan alamat lengkap beserta kelurahan/kecamatan.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Checkout submission
  const handleSubmitOrder = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    // Bangun pesan WhatsApp terformat
    const message = buildWhatsAppOrderMessage({
      customerName: formData.name.trim(),
      customerPhone: formData.phone.trim(),
      deliveryMethod: formData.deliveryMethod,
      deliveryAddress: formData.address.trim(),
      notes: formData.notes,
      cartItems: cartItems,
      totalPrice: totalProductPrice
    });

    setGeneratedMessage(message);
    setShowOrderPreviewModal(true);
  };

  // Launch WhatsApp
  const handleProceedWhatsApp = () => {
    const finalWaUrl = createWhatsAppUrl(
      generatedMessage, 
      testCustomNumber ? testCustomNumber.trim() : null
    );

    // Buka WhatsApp di tab baru
    window.open(finalWaUrl, '_blank', 'noopener,noreferrer');
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="page-header">
          <div className="page-header-content">
            <span className="section-tag">Checkout Pesanan</span>
            <h1 className="page-title">Keranjang Belanja Kosong</h1>
            <p className="page-subtitle">
              Silakan pilih menu ikan marinasi terlebih dahulu sebelum melakukan pemesanan.
            </p>
          </div>
        </div>

        <div className="checkout-section" style={{ textAlign: 'center', padding: '4rem 1.5rem 6rem' }}>
          <div className="empty-state" style={{ maxWidth: '520px', margin: '0 auto' }}>
            <ShoppingBag size={48} color="var(--color-text-muted)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-deep-navy)' }}>
              Tidak Ada Item Untuk Dicheckout
            </h3>
            <Link to="/produk" className="btn btn-primary">
              Lihat Menu Ikan Marinasi
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="page-header">
        <div className="page-header-content">
          <span className="section-tag">Konfirmasi Pemesanan</span>
          <h1 className="page-title">Data Pengiriman & Checkout</h1>
          <p className="page-subtitle">
            Lengkapi data pemesan untuk pengiriman produk FoodFish di area Malang Raya via WhatsApp.
          </p>
        </div>
      </div>

      <div className="checkout-section">
        {/* Notice on WhatsApp integration & business number */}
        <WhatsAppNotice />

        <div className="checkout-layout">
          {/* Form Pemesan */}
          <div className="checkout-card">
            <form onSubmit={handleSubmitOrder} noValidate>
              <h2 className="checkout-step-title">
                <User size={22} color="var(--color-ocean-blue)" />
                <span>1. Data Informasi Pemesan</span>
              </h2>

              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Nama Lengkap Pemesan <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Contoh: Ibu Rina Wulandari"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Nomor WhatsApp / Telepon Aktif <span className="req">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  placeholder="Contoh: 081234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <div className="form-error">{errors.phone}</div>}
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
                  Digunakan untuk konfirmasi pesanan dan koordinasi pengiriman oleh tim FoodFish.
                </div>
              </div>

              <h2 className="checkout-step-title" style={{ marginTop: '2.5rem' }}>
                <Truck size={22} color="var(--color-ocean-blue)" />
                <span>2. Metode Pengantaran di Malang Raya</span>
              </h2>

              {/* Delivery vs Pickup Selector */}
              <div className="method-selector">
                <div
                  className={`method-option ${formData.deliveryMethod === 'delivery' ? 'selected' : ''}`}
                  onClick={() => setFormData((prev) => ({ ...prev, deliveryMethod: 'delivery' }))}
                  role="button"
                  tabIndex={0}
                >
                  <div className="method-name">
                    <Truck size={18} color="var(--color-ocean-blue)" />
                    <span>Pengiriman ke Alamat</span>
                  </div>
                  <div className="method-desc">
                    Dikirim langsung ke rumah Anda via kurir/ojek online se-Malang Raya.
                  </div>
                </div>

                <div
                  className={`method-option ${formData.deliveryMethod === 'pickup' ? 'selected' : ''}`}
                  onClick={() => setFormData((prev) => ({ ...prev, deliveryMethod: 'pickup' }))}
                  role="button"
                  tabIndex={0}
                >
                  <div className="method-name">
                    <Store size={18} color="var(--color-ocean-blue)" />
                    <span>Ambil Sendiri (Self-Pickup)</span>
                  </div>
                  <div className="method-desc">
                    Ambil pesanan langsung di dapur FoodFish Malang setelah konfirmasi.
                  </div>
                </div>
              </div>

              {/* Delivery Address Field */}
              {formData.deliveryMethod === 'delivery' ? (
                <div className="form-group">
                  <label className="form-label" htmlFor="address">
                    Alamat Lengkap Pengiriman <span className="req">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    placeholder="Contoh: Jl. Soekarno Hatta No. 45, RT 02 / RW 05, Kel. Mojolangu, Kec. Lowokwaru, Kota Malang (Patokan dekat apotek)"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && <div className="form-error">{errors.address}</div>}
                </div>
              ) : (
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'var(--color-warm-cream)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  fontSize: '0.88rem',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)'
                }}>
                  <strong style={{ color: 'var(--color-deep-navy)' }}>Lokasi Pengambilan:</strong> Titik dapur persiapan FoodFish di Malang Raya akan dibagikan via WhatsApp setelah seller menyiapkan paket Anda.
                </div>
              )}

              {/* Order Notes */}
              <div className="form-group">
                <label className="form-label" htmlFor="notes">
                  Catatan Tambahan untuk Penjual (Opsional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  className="form-control"
                  placeholder="Contoh: Minta bumbu tidak terlalu pedas, tolong dikirim sebelum jam 11 siang, atau catatan lainnya."
                  value={formData.notes}
                  onChange={handleChange}
                  style={{ minHeight: '80px' }}
                />
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/keranjang" className="btn btn-secondary">
                  <ArrowLeft size={16} />
                  <span>Kembali ke Keranjang</span>
                </Link>

                <button type="submit" className="btn btn-whatsapp" style={{ flex: 1 }}>
                  <MessageCircle size={18} />
                  <span>Kirim Pesanan ke WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

          {/* Sticky Order Summary */}
          <div className="cart-summary-card">
            <h3 className="summary-title">Ringkasan Produk</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
              {cartItems.map((item) => (
                <div key={item.productId} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem' }}>
                  <div>
                    <span style={{ fontWeight: 600, color: 'var(--color-deep-navy)' }}>{item.product.name}</span>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                      {item.quantity} x {formatRupiah(item.product.price)}
                    </div>
                  </div>
                  <strong style={{ color: 'var(--color-deep-navy)' }}>
                    {formatRupiah(item.product.price * item.quantity)}
                  </strong>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
              <div className="summary-row">
                <span>Total Item</span>
                <strong>{totalItemCount} pack</strong>
              </div>

              <div className="summary-row">
                <span>Subtotal Produk</span>
                <strong>{formatRupiah(totalProductPrice)}</strong>
              </div>

              <div className="summary-row">
                <span>Ongkos Kirim</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  Dikonfirmasi Penjual*
                </span>
              </div>

              <div className="summary-row total">
                <span>Total Estimasi Produk</span>
                <span>{formatRupiah(totalProductPrice)}</span>
              </div>
            </div>

            {/* Explanation box on WhatsApp process */}
            <div style={{
              backgroundColor: 'var(--color-warm-cream)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              fontSize: '0.82rem',
              lineHeight: '1.55',
              color: 'var(--color-text-secondary)',
              border: '1px solid var(--color-border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginBottom: '0.4rem' }}>
                <Info size={15} color="var(--color-ocean-blue)" />
                <span>Alur Pemesanan WhatsApp</span>
              </div>
              Setelah menekan tombol di atas, aplikasi akan membuka WhatsApp dengan draft format pesanan otomatis. 
              Pesanan belum terbayar atau terkonfirmasi hingga seller memeriksa ketersediaan stok fisik dan membalas pesan Anda. Keranjang belanja Anda tetap aman tersimpan.
            </div>
          </div>
        </div>
      </div>

      {/* Modal Preview Pesanan WhatsApp */}
      {showOrderPreviewModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(18, 48, 71, 0.7)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            maxWidth: '620px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'var(--shadow-hover)',
            overflow: 'hidden'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '1.25rem 1.75rem',
              backgroundColor: 'var(--color-deep-navy)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <MessageCircle size={22} color="#25D366" />
                <h3 style={{ margin: 0, color: '#FFFFFF', fontSize: '1.2rem' }}>
                  Siap Dikirim ke WhatsApp Penjual
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowOrderPreviewModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '1.2rem',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '1.5rem 1.75rem', overflowY: 'auto', flex: 1 }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: '1.5' }}>
                Format pesan di bawah ini telah digenerate secara otomatis. Saat Anda menekan tombol di bawah, 
                WhatsApp akan terbuka dan Anda dapat langsung mengirimkannya ke FoodFish.
              </p>

              {/* Testing number field if placeholder */}
              {!isWhatsAppConfigured() && (
                <div style={{
                  padding: '0.85rem 1rem',
                  backgroundColor: '#FFFBEB',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #FDE68A',
                  marginBottom: '1rem',
                  fontSize: '0.85rem'
                }}>
                  <div style={{ fontWeight: 700, color: '#92400E', marginBottom: '0.35rem' }}>
                    Mode Pengujian / Simulasi
                  </div>
                  <div>
                    Nomor bisnis resmi saat ini masih placeholder (<code>{WHATSAPP_BUSINESS_NUMBER}</code>). 
                    Anda dapat memasukkan nomor WhatsApp Anda sendiri untuk menguji pengiriman pesan pesanan ini secara langsung:
                  </div>
                  <div style={{ marginTop: '0.6rem', display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="text"
                      placeholder="Contoh: 6281234567890 (Opsional)"
                      value={testCustomNumber}
                      onChange={(e) => setTestCustomNumber(e.target.value)}
                      className="form-control"
                      style={{ fontSize: '0.85rem', padding: '0.45rem 0.75rem' }}
                    />
                  </div>
                </div>
              )}

              {/* Message Preview Box */}
              <div style={{
                backgroundColor: 'var(--color-warm-cream)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                fontFamily: 'monospace',
                fontSize: '0.82rem',
                lineHeight: '1.6',
                whiteSpace: 'pre-wrap',
                color: 'var(--color-deep-navy)',
                maxHeight: '260px',
                overflowY: 'auto'
              }}>
                {generatedMessage}
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '1.25rem 1.75rem',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '1rem',
              backgroundColor: '#FAFAFA'
            }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowOrderPreviewModal(false)}
              >
                Tutup & Ubah Data
              </button>

              <button
                type="button"
                className="btn btn-whatsapp"
                onClick={handleProceedWhatsApp}
              >
                <MessageCircle size={18} />
                <span>Buka WhatsApp Sekarang</span>
                <ExternalLink size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
