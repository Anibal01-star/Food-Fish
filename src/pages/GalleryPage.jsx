import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_IMAGES } from '../data/gallery.js';
import { 
  Image as ImageIcon, 
  Maximize2, 
  Download, 
  ShoppingBag, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Filter,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'Semua Foto (PNG)' },
    { id: 'produk', label: 'Varian Ikan Marinasi' },
    { id: 'dapur', label: 'Proses Dapur & Rempah' },
    { id: 'sajian', label: 'Hasil Masakan Siap Santap' }
  ];

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const currentImage = activeLightboxIndex !== null ? filteredImages[activeLightboxIndex] : null;

  return (
    <div className="gallery-page">
      {/* Header Banner */}
      <div className="page-header">
        <div className="page-header-content">
          <span className="section-tag">Galeri Foto FoodFish</span>
          <h1 className="page-title">Koleksi Visual Produk & Dapur</h1>
          <p className="page-subtitle">
            Jelajahi seluruh dokumentasi foto ikan segar, proses racikan bumbu rempah alami, pengemasan vacuum, dan hasil sajian siap masak dalam format PNG berkualitas tinggi.
          </p>
        </div>
      </div>

      <div className="section-container" style={{ padding: '3rem 1.5rem 5rem' }}>
        {/* PNG Format Announcement Bar */}
        <div className="notice-box info" style={{ marginBottom: '2.5rem' }}>
          <Sparkles size={20} color="#1877A8" className="notice-icon" />
          <div className="notice-content">
            <div className="notice-title">Semua Aset Gambar Tersedia Dalam Format PNG</div>
            <p style={{ margin: 0, fontSize: '0.88rem' }}>
              Seluruh foto pada katalog dan galeri ini disimpan secara lokal dalam format <strong>.PNG</strong> berkualitas tinggi di folder publik. Anda dapat melihat pratinjau resolusi penuh maupun mengunduh gambar PNG untuk keperluan informasi dan promosi.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              className="product-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                transition: 'all var(--transition-normal)'
              }}
            >
              {/* Image Container with Overlay */}
              <div
                style={{
                  position: 'relative',
                  paddingTop: '66%',
                  backgroundColor: 'var(--color-warm-cream)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="gallery-thumb-img"
                />

                {/* PNG Badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  backgroundColor: 'rgba(18, 48, 71, 0.85)',
                  color: '#FFFFFF',
                  backdropFilter: 'blur(4px)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  letterSpacing: '0.05em'
                }}>
                  PNG FORMAT
                </div>

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  backgroundColor: 'rgba(24, 119, 168, 0.9)',
                  color: '#FFFFFF',
                  backdropFilter: 'blur(4px)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  {image.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--color-deep-navy)',
                  marginBottom: '0.45rem'
                }}>
                  {image.title}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.5',
                  marginBottom: '1.2rem',
                  flexGrow: 1
                }}>
                  {image.description}
                </p>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--color-border-subtle)',
                  gap: '0.5rem'
                }}>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => openLightbox(idx)}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <Maximize2 size={14} />
                    <span>Perbesar</span>
                  </button>

                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <a
                      href={image.src}
                      download={image.src.replace('/images/', '')}
                      className="btn btn-secondary btn-sm"
                      title="Download file PNG resolusi asli"
                      style={{ padding: '0.45rem 0.75rem' }}
                    >
                      <Download size={14} />
                    </a>

                    {image.productSlug && (
                      <Link
                        to={`/produk/${image.productSlug}`}
                        className="btn btn-primary btn-sm"
                        title="Beli produk ini"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                      >
                        <ShoppingBag size={14} />
                        <span>Pesan</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(12, 32, 48, 0.92)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          padding: '1.5rem'
        }}>
          {/* Top Bar */}
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            left: '2rem',
            right: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#FFFFFF'
          }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-fresh-mint)', fontWeight: 700 }}>
                {activeLightboxIndex + 1} / {filteredImages.length} • Format PNG
              </span>
              <h3 style={{ margin: 0, color: '#FFFFFF', fontSize: '1.25rem' }}>
                {currentImage.title}
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a
                href={currentImage.src}
                download={currentImage.src.replace('/images/', '')}
                className="btn btn-coral btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <Download size={15} />
                <span>Unduh PNG</span>
              </a>

              <button
                type="button"
                onClick={closeLightbox}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  color: '#FFFFFF',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Tutup pratinjau"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Center: Image with Nav Arrows */}
          <div style={{
            position: 'relative',
            maxWidth: '1000px',
            maxHeight: '75vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevLightbox}
              style={{
                position: 'absolute',
                left: '-60px',
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                color: '#FFFFFF',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft size={28} />
            </button>

            {/* The Image */}
            <img
              src={currentImage.src}
              alt={currentImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            />

            {/* Next Button */}
            <button
              type="button"
              onClick={nextLightbox}
              style={{
                position: 'absolute',
                right: '-60px',
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                color: '#FFFFFF',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Foto selanjutnya"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Bottom Info Bar */}
          <div style={{
            marginTop: '1.5rem',
            textAlign: 'center',
            maxWidth: '700px',
            color: '#D3E4F0',
            fontSize: '0.92rem'
          }}>
            <p style={{ margin: 0, lineHeight: '1.5' }}>{currentImage.description}</p>
            {currentImage.productSlug && (
              <div style={{ marginTop: '0.75rem' }}>
                <Link
                  to={`/produk/${currentImage.productSlug}`}
                  onClick={closeLightbox}
                  className="btn btn-primary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <ShoppingBag size={14} />
                  <span>Buka Halaman Produk & Pesan</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
