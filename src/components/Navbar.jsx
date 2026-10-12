import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { ShoppingBag, Fish, Menu, X, MessageCircle } from 'lucide-react';
import { isWhatsAppConfigured, createWhatsAppUrl } from '../config/whatsapp.js';

export const Navbar = () => {
  const { totalItemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // WhatsApp quick greeting message
  const quickWaUrl = createWhatsAppUrl("Halo FoodFish Malang! Saya ingin bertanya mengenai katalog ikan marinasi siap masak hari ini.");

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMobileMenu}>
          <div className="brand-icon">
            <Fish size={22} strokeWidth={2.5} />
          </div>
          <span>Food<span style={{ color: 'var(--color-ocean-blue)' }}>Fish</span></span>
        </Link>

        {/* Desktop Nav Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink to="/produk" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Produk
              </NavLink>
            </li>
            <li>
              <NavLink to="/galeri" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Galeri Foto
              </NavLink>
            </li>
            <li>
              <NavLink to="/tentang-kami" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink to="/artikel" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Artikel & Tips
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontak" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Kontak
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Actions (Cart & WhatsApp CTA) */}
        <div className="nav-actions">
          <Link to="/keranjang" className="cart-button-link" title="Lihat Keranjang Belanja">
            <ShoppingBag size={20} />
            {totalItemCount > 0 && (
              <span className="cart-badge" aria-label={`${totalItemCount} barang di keranjang`}>
                {totalItemCount}
              </span>
            )}
          </Link>

          <a
            href={quickWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            style={{ display: 'none' }} /* shown on medium+ screens */
            id="nav-wa-btn"
          >
            <MessageCircle size={16} />
            <span>Pesan WA</span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--color-border)',
          padding: '1.25rem 1.5rem',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <NavLink 
            to="/" 
            end 
            onClick={closeMobileMenu}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            style={{ padding: '0.4rem 0' }}
          >
            Beranda
          </NavLink>
          <NavLink 
            to="/produk" 
            onClick={closeMobileMenu}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            style={{ padding: '0.4rem 0' }}
          >
            Produk Katalog
          </NavLink>
          <NavLink 
            to="/galeri" 
            onClick={closeMobileMenu}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            style={{ padding: '0.4rem 0' }}
          >
            Galeri Foto (PNG)
          </NavLink>
          <NavLink 
            to="/tentang-kami" 
            onClick={closeMobileMenu}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            style={{ padding: '0.4rem 0' }}
          >
            Tentang Kami
          </NavLink>
          <NavLink 
            to="/artikel" 
            onClick={closeMobileMenu}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            style={{ padding: '0.4rem 0' }}
          >
            Artikel & Tips Memasak
          </NavLink>
          <NavLink 
            to="/kontak" 
            onClick={closeMobileMenu}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            style={{ padding: '0.4rem 0' }}
          >
            Kontak & Lokasi
          </NavLink>

          <div style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--color-border)' }}>
            <a
              href={quickWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageCircle size={18} />
              <span>Chat WhatsApp Penjual</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
