import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, MapPin, Clock, Phone, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO, WHATSAPP_BUSINESS_NUMBER, isWhatsAppConfigured } from '../config/whatsapp.js';

const InstagramIcon = ({ size = 18, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                backgroundColor: 'var(--color-primary)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <Fish size={20} />
              </div>
              <h3 style={{ margin: 0, color: '#FFFFFF', fontSize: '1.4rem' }}>Marinasi Pak ABIL</h3>
            </div>
            <p>
              Spesialis penjualan ikan mentah segar berbumbu marinasi rempah alami siap masak di Malang Raya. 
              Praktis, higienis, bumbu meresap sempurna, tinggal goreng atau bakar kapan saja untuk santapan sehat keluarga.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', fontSize: '0.85rem' }}>
              <ShieldCheck size={16} />
              <span>100% Rempah Alami • Tanpa Pengawet Sintetis</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Navigasi Halaman</h4>
            <ul className="footer-links">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/produk">Katalog Ikan Marinasi</Link></li>
              <li><Link to="/galeri">Galeri Foto & Olahan</Link></li>
              <li><Link to="/tentang-kami">Tentang Marinasi Pak ABIL</Link></li>
              <li><Link to="/artikel">Artikel & Tips Memasak</Link></li>
              <li><Link to="/kontak">Hubungi Kami</Link></li>
              <li><Link to="/keranjang">Keranjang Belanja</Link></li>
            </ul>
          </div>

          {/* Kategori Populer */}
          <div className="footer-column">
            <h4>Kategori Pilihan</h4>
            <ul className="footer-links">
              <li><Link to="/produk?kategori=bumbu-kuning">Ikan Bumbu Kuning</Link></li>
              <li><Link to="/produk?kategori=bakar-marinasi">Ikan Bakar Marinasi</Link></li>
              <li><Link to="/produk?kategori=fillet-siap-masak">Fillet & Bebas Duri</Link></li>
              <li><Link to="/produk?kategori=paket-keluarga">Paket Hemat Keluarga</Link></li>
            </ul>
          </div>

          {/* Contact & Service Area */}
          <div className="footer-column">
            <h4>Layanan Malang Raya</h4>
            <div className="footer-contact-item">
              <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <span>{BUSINESS_INFO.serviceArea}</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <span>{BUSINESS_INFO.operationalHours}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <span>
                {isWhatsAppConfigured() ? `+${WHATSAPP_BUSINESS_NUMBER}` : '(Nomor WhatsApp Bisnis)'}
              </span>
            </div>
            <div className="footer-contact-item">
              <InstagramIcon size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
              <span>{BUSINESS_INFO.instagram}</span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div style={{
          padding: '1.25rem 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.82rem',
          color: '#D1BFB0',
          lineHeight: '1.6'
        }}>
          <strong>Catatan Layanan:</strong> {BUSINESS_INFO.notes}
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Marinasi Pak ABIL Malang. Hak cipta dilindungi undang-undang.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Dibuat dengan</span>
            <Heart size={14} color="#F28C28" fill="#F28C28" />
            <span>untuk kepraktisan hidangan ikan keluarga di Malang</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
