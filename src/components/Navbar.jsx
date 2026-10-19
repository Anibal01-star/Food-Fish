import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { ShoppingBag, Fish, Menu, X, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../config/whatsapp.js';

export const Navbar = () => {
  const { totalItemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // WhatsApp quick greeting message
  const quickWaUrl = createWhatsAppUrl("Halo Marinasi Pak ABIL Malang! Saya ingin bertanya mengenai stok dan katalog ikan marinasi siap masak hari ini.");

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMobileMenu} title="Marinasi Pak ABIL — Jual Ikan Marinasi Malang">
          <div className="brand-icon">
            <Fish size={22} strokeWidth={2.5} />
          </div>
          <span>
            Marinasi <span style={{ color: 'var(--color-primary)' }}>Pak ABIL</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav aria-label="Navigasi Utama">
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink to="/produk" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Katalog Produk
              </NavLink>
            </li>
            <li>
              <NavLink to="/galeri" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Galeri Olahan
              </NavLink>
            </li>
            <li>
              <NavLink to="/tentang-kami" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink to="/artikel" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Artikel & Resep
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontak" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Kontak & Lokasi
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
            id="nav-wa-btn"
            title="Chat WhatsApp Marinasi Pak ABIL"
          >
            <MessageCircle size={16} />
            <span>Pesan WA</span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav id="mobile-nav-menu" className="mobile-nav-menu" aria-label="Navigasi Seluler">
          <NavLink 
            to="/" 
            end 
            onClick={closeMobileMenu}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Beranda
          </NavLink>
          <NavLink 
            to="/produk" 
            onClick={closeMobileMenu}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Katalog Produk Ikan Marinasi
          </NavLink>
          <NavLink 
            to="/galeri" 
            onClick={closeMobileMenu}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Galeri Olahan & Masakan
          </NavLink>
          <NavLink 
            to="/tentang-kami" 
            onClick={closeMobileMenu}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Tentang Marinasi Pak ABIL
          </NavLink>
          <NavLink 
            to="/artikel" 
            onClick={closeMobileMenu}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Artikel & Panduan Memasak
          </NavLink>
          <NavLink 
            to="/kontak" 
            onClick={closeMobileMenu}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Kontak & Pengiriman Malang
          </NavLink>

          <div className="mobile-nav-cta">
            <a
              href={quickWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>Chat WhatsApp Penjual</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
