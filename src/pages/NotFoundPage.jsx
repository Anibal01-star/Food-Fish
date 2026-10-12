import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, Home, ShoppingBag, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div style={{
      padding: '6rem 1.5rem',
      textAlign: 'center',
      minHeight: '65vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '540px', margin: '0 auto' }}>
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-fresh-mint)',
          color: 'var(--color-deep-navy)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem'
        }}>
          <Fish size={44} />
        </div>

        <div style={{
          fontSize: '4.5rem',
          fontWeight: 900,
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-deep-navy)',
          lineHeight: 1,
          marginBottom: '0.75rem'
        }}>
          404
        </div>

        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 800,
          color: 'var(--color-deep-navy)',
          marginBottom: '1rem'
        }}>
          Halaman Tidak Ditemukan
        </h1>

        <p style={{
          color: 'var(--color-text-secondary)',
          fontSize: '1.05rem',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          Maaf, halaman yang Anda tuju tidak tersedia atau telah dipindahkan. 
          Mari kembali ke katalog utama untuk memilih ikan bumbu marinasi favorit Anda.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-secondary">
            <Home size={18} />
            <span>Kembali ke Beranda</span>
          </Link>

          <Link to="/produk" className="btn btn-primary">
            <ShoppingBag size={18} />
            <span>Lihat Katalog Produk</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
