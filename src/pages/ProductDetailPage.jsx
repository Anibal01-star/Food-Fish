import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  ShoppingBag, 
  MessageCircle, 
  Scale, 
  Users, 
  Flame, 
  Sparkles, 
  ShieldCheck, 
  Utensils, 
  Plus, 
  Minus, 
  ArrowLeft,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products.js';
import { formatRupiah, buildSingleProductWhatsAppMessage } from '../utils/formatters.js';
import { useCart } from '../context/CartContext.jsx';
import { ProductCard } from '../components/ProductCard.jsx';
import { createWhatsAppUrl } from '../config/whatsapp.js';

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = getProductBySlug(slug);

  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [imageError, setImageError] = useState(false);

  const fallbackImage = "/images/gurame-bumbu-kuning.png";

  if (!product) {
    return (
      <div className="product-detail-section" style={{ textAlign: 'center', padding: '6rem 1.5rem' }}>
        <div className="empty-state">
          <AlertTriangle size={54} color="#F28C52" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', color: 'var(--color-deep-navy)' }}>
            Produk Tidak Ditemukan
          </h2>
          <p style={{ maxWidth: '460px', margin: '0 auto 1.5rem', color: 'var(--color-text-secondary)' }}>
            Produk marinasi yang Anda cari mungkin telah diganti atau tidak tersedia dalam katalog saat ini.
          </p>
          <Link to="/produk" className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>Kembali ke Katalog Produk</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category, 3);

  const handleQtyChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (!product.inStock) return;
    setIsAdding(true);
    addToCart(product, quantity);
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  // WhatsApp link for direct inquiry of this product
  const directWaMessage = buildSingleProductWhatsAppMessage(product, quantity);
  const directWaUrl = createWhatsAppUrl(directWaMessage);

  return (
    <div className="product-detail-page">
      <div className="product-detail-section">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Beranda</Link>
          <ChevronRight size={14} />
          <Link to="/produk">Katalog</Link>
          <ChevronRight size={14} />
          <Link to={`/produk?kategori=${product.category}`}>{product.categoryName}</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-deep-navy)', fontWeight: 600 }}>{product.name}</span>
        </nav>

        {/* Main Product Grid */}
        <div className="detail-grid">
          {/* Product Image Box */}
          <div className="detail-image-box">
            <img
              src={imageError ? fallbackImage : product.image}
              alt={product.name}
              className="detail-main-image"
              onError={() => setImageError(true)}
            />
            {/* Badges */}
            <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-category">{product.categoryName}</span>
              {!product.inStock && <span className="badge badge-outofstock">Stok Habis</span>}
              {product.isFeatured && <span className="badge badge-featured">Menu Rekomendasi</span>}
            </div>
          </div>

          {/* Product Info & Actions */}
          <div className="detail-info">
            <div className="detail-header">
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--color-ocean-blue)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                FoodFish Fresh Marinade • {product.categoryName}
              </span>
              <h1 className="detail-title">{product.name}</h1>
              
              <div className="detail-price-row">
                <span className="detail-price">{formatRupiah(product.price)}</span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>/ kemasan pack</span>
              </div>
            </div>

            {/* Meta Specifications */}
            <div className="detail-meta-table">
              {product.weight && (
                <div className="meta-row">
                  <div className="meta-label">
                    <Scale size={16} />
                    <span>Berat Bersih</span>
                  </div>
                  <div className="meta-value">{product.weight}</div>
                </div>
              )}

              {product.serving && (
                <div className="meta-row">
                  <div className="meta-label">
                    <Users size={16} />
                    <span>Porsi Saji</span>
                  </div>
                  <div className="meta-value">{product.serving}</div>
                </div>
              )}

              {product.spiceLevel && (
                <div className="meta-row">
                  <div className="meta-label">
                    <Sparkles size={16} />
                    <span>Cita Rasa / Pedas</span>
                  </div>
                  <div className="meta-value">{product.spiceLevel}</div>
                </div>
              )}

              {product.cookingMethod && (
                <div className="meta-row">
                  <div className="meta-label">
                    <Flame size={16} />
                    <span>Saran Memasak</span>
                  </div>
                  <div className="meta-value">{product.cookingMethod}</div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="detail-description">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: 'var(--color-deep-navy)' }}>
                Deskripsi Produk
              </h3>
              <p style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
                {product.description}
              </p>

              {product.ingredients && (
                <div style={{
                  padding: '0.85rem 1rem',
                  backgroundColor: 'var(--color-warm-cream)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.88rem',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border-subtle)'
                }}>
                  <strong style={{ color: 'var(--color-deep-navy)' }}>Komposisi Rempah: </strong>
                  {product.ingredients}
                </div>
              )}
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div className="detail-actions">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-deep-navy)' }}>
                  Jumlah:
                </span>
                <div className="quantity-control">
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => handleQtyChange(-1)}
                    disabled={quantity <= 1 || !product.inStock}
                    aria-label="Kurangi jumlah"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    className="qty-input"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      if (!isNaN(val) && val >= 1) setQuantity(val);
                    }}
                    min="1"
                    disabled={!product.inStock}
                    aria-label="Jumlah pesanan"
                  />
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => handleQtyChange(1)}
                    disabled={!product.inStock}
                    aria-label="Tambah jumlah"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddToCart}
                disabled={!product.inStock || isAdding}
                style={{ flex: 1, minWidth: '180px' }}
              >
                <ShoppingBag size={18} />
                <span>{product.inStock ? (isAdding ? "Ditambahkan..." : "Tambah ke Keranjang") : "Stok Habis"}</span>
              </button>

              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                title="Pesan atau tanya ketersediaan menu ini langsung lewat WhatsApp"
              >
                <MessageCircle size={18} />
                <span>Pesan via WA</span>
              </a>
            </div>

            {/* Subtotal preview */}
            <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              Subtotal estimasi: <strong style={{ color: 'var(--color-ocean-blue)' }}>{formatRupiah(product.price * quantity)}</strong>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: '5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <div>
                <span className="section-tag">Rekomendasi Lainnya</span>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginTop: '0.35rem' }}>
                  Produk Terkait yang Mungkin Anda Sukai
                </h2>
              </div>
              <Link to="/produk" className="btn btn-secondary btn-sm">
                Lihat Semua
              </Link>
            </div>

            <div className="product-grid">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
