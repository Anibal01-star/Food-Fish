import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, MapPin, Clock, Phone, Mail, ShieldCheck, Heart } from 'lucide-react';

const InstagramIcon = ({ size = 18, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
import { BUSINESS_INFO, WHATSAPP_BUSINESS_NUMBER, isWhatsAppConfigured } from '../config/whatsapp.js';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                backgroundColor: 'var(--color-ocean-blue)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <Fish size={20} />
              </div>
              <h3 style={{ margin: 0, color: '#FFFFFF', fontSize: '1.4rem' }}>FoodFish</h3>
            </div>
            <p>
              Spesialis ikan segar marinasi bumbu rempah alami siap masak di Malang Raya. 
              Praktis, higienis, bumbu meresap sempurna, tinggal goreng atau bakar kapan saja untuk keluarga tercinta.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-fresh-mint)', fontSize: '0.85rem' }}>
              <ShieldCheck size={16} />
              <span>Bumbu Rempah Alami • Tanpa Pengawet Sintetis</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Navigasi</h4>
            <ul className="footer-links">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/produk">Katalog Ikan Marinasi</Link></li>
              <li><Link to="/galeri">Galeri Foto (PNG)</Link></li>
              <li><Link to="/tentang-kami">Tentang FoodFish</Link></li>
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
              <MapPin size={18} style={{ color: 'var(--color-coral-orange)', flexShrink: 0 }} />
              <span>{BUSINESS_INFO.serviceArea}</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} style={{ color: 'var(--color-coral-orange)', flexShrink: 0 }} />
              <span>{BUSINESS_INFO.operationalHours}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} style={{ color: 'var(--color-coral-orange)', flexShrink: 0 }} />
              <span>
                {isWhatsAppConfigured() ? `+${WHATSAPP_BUSINESS_NUMBER}` : '(Placeholder WhatsApp Bisnis)'}
              </span>
            </div>
            <div className="footer-contact-item">
              <InstagramIcon size={18} style={{ color: 'var(--color-coral-orange)', flexShrink: 0 }} />
              <span>{BUSINESS_INFO.instagram}</span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div style={{
          padding: '1.25rem 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.8rem',
          color: '#8CA0B2',
          lineHeight: '1.5'
        }}>
          <strong>Catatan Simulasi Bisnis:</strong> {BUSINESS_INFO.notes}
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} FoodFish Malang. Hak cipta dilindungi undang-undang.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Dibuat dengan</span>
            <Heart size={14} color="#F28C52" fill="#F28C52" />
            <span>untuk kepraktisan hidangan ikan keluarga</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
