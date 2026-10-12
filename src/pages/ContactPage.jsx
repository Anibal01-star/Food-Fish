import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageCircle, 
  Send, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';

const InstagramIcon = ({ size = 22, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
import { BUSINESS_INFO, WHATSAPP_BUSINESS_NUMBER, isWhatsAppConfigured, createWhatsAppUrl } from '../config/whatsapp.js';
import { WhatsAppNotice } from '../components/WhatsAppNotice.jsx';

export const ContactPage = () => {
  const [quickQuestion, setQuickQuestion] = useState('');

  const directChatUrl = createWhatsAppUrl(
    quickQuestion.trim() 
      ? `Halo FoodFish Malang! Saya ingin bertanya: "${quickQuestion.trim()}"`
      : "Halo FoodFish Malang! Saya ingin bertanya seputar pemesanan ikan marinasi."
  );

  const faqs = [
    {
      q: "Berapa lama ikan marinasi FoodFish tahan disimpan?",
      a: "Dalam kemasan vacuum pack tertutup rapat di dalam freezer suhu -18°C, produk FoodFish tahan hingga 2 bulan tanpa bahan pengawet kimia. Jika ditaruh di chiller biasa, disarankan dimasak dalam waktu 2-3 hari."
    },
    {
      q: "Apakah bumbu marinasi sudah siap masak tanpa perlu ditambah garam?",
      a: "Betul! Seluruh racikan bumbu rempah kami sudah komplit dan meresap ke dalam serat ikan. Anda tinggal panaskan minyak atau teflon tanpa perlu menambahkan garam, bumbu penyedap, atau perasan jeruk lagi."
    },
    {
      q: "Berapa lama waktu pengantaran di area Malang Raya?",
      a: "Pesanan yang terkonfirmasi sebelum jam 13:00 WIB dapat dikirimkan di hari yang sama (Same-day Delivery) melalui kurir instan atau ojek online, tergantung ketersediaan stok siap kirim."
    },
    {
      q: "Bagaimana cara pembayaran pesanan?",
      a: "Setelah Anda mengirimkan format pesanan via WhatsApp, penjual akan mengonfirmasi total nominal termasuk tarif ongkos kirim. Pembayaran dapat dilakukan via transfer bank atau metode lain yang disepakati langsung dengan penjual."
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="page-header">
        <div className="page-header-content">
          <span className="section-tag">Hubungi Kami</span>
          <h1 className="page-title">Kontak & Layanan FoodFish Malang</h1>
          <p className="page-subtitle">
            Punya pertanyaan mengenai menu, ketersediaan stok harian, atau pemesanan dalam jumlah banyak? Tim kami siap melayani Anda.
          </p>
        </div>
      </div>

      <div className="section-container" style={{ padding: '3rem 1.5rem 5rem' }}>
        {/* WhatsApp Notice Banner */}
        <WhatsAppNotice />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3.5rem',
          alignItems: 'start',
          marginBottom: '5rem'
        }}>
          {/* Contact Details Card */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '1.5rem' }}>
              Informasi Layanan Pelanggan
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#E8F5E9',
                  color: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-deep-navy)' }}>
                    WhatsApp Resmi
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
                    {isWhatsAppConfigured() ? `+${WHATSAPP_BUSINESS_NUMBER}` : `${WHATSAPP_BUSINESS_NUMBER} (Placeholder)`}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                    Fast response untuk konfirmasi pesanan dan tanya stok.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-ocean-blue-light)',
                  color: 'var(--color-ocean-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-deep-navy)' }}>
                    Jam Operasional & Pengiriman
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
                    {BUSINESS_INFO.operationalHours}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                    Pemesanan di luar jam kerja akan diproses pada pagi hari berikutnya.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-warm-cream)',
                  color: 'var(--color-coral-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-deep-navy)' }}>
                    Jangkauan Pengantaran
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
                    {BUSINESS_INFO.serviceArea}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                    Pengiriman dengan kurir khusus menjaga kondisi makanan tetap beku segar.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#FCE4EC',
                  color: '#C2185B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <InstagramIcon size={22} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-deep-navy)' }}>
                    Instagram
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
                    {BUSINESS_INFO.instagram}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                    Ikuti update stok harian dan testimoni pelanggan.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Chat via WhatsApp Box */}
          <div style={{
            backgroundColor: 'var(--color-deep-navy)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            color: '#FFFFFF',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'rgba(37, 211, 102, 0.2)',
              color: '#25D366',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              marginBottom: '1.25rem'
            }}>
              <MessageCircle size={15} />
              <span>Direct WhatsApp Chat</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.75rem' }}>
              Kirim Pertanyaan Cepat
            </h3>
            <p style={{ color: '#D3E4F0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
              Tulis pertanyaan Anda di bawah ini dan kami akan membuka WhatsApp dengan pesan Anda yang sudah siap dikirimkan langsung ke admin.
            </p>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#D3E4F0', marginBottom: '0.5rem' }}>
                Apa yang ingin Anda tanyakan?
              </label>
              <textarea
                className="form-control"
                placeholder="Contoh: Apakah hari ini ada stok ikan gurame bumbu kuning untuk dikirim ke Lowokwaru?"
                rows={4}
                value={quickQuestion}
                onChange={(e) => setQuickQuestion(e.target.value)}
                style={{ backgroundColor: '#FFFFFF', color: 'var(--color-deep-navy)' }}
              />
            </div>

            <a
              href={directChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageCircle size={18} />
              <span>Mulai Chat via WhatsApp</span>
              <ExternalLink size={16} />
            </a>

            <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: '#8CA0B2', textAlign: 'center', lineHeight: '1.4' }}>
              *Tombol ini akan membuka aplikasi WhatsApp pada smartphone atau WhatsApp Web pada komputer Anda.
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-tag">Pertanyaan Umum</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Jawaban atas hal-hal yang sering ditanyakan oleh pelanggan FoodFish di Malang Raya.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden'
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--color-deep-navy)'
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.3rem', color: 'var(--color-ocean-blue)' }}>
                    {openFaqIndex === idx ? '−' : '+'}
                  </span>
                </button>

                {openFaqIndex === idx && (
                  <div style={{
                    padding: '0 1.5rem 1.25rem',
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    borderTop: '1px solid var(--color-border-subtle)'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
