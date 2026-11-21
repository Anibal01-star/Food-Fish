import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, Scale, Check } from 'lucide-react';
import { formatRupiah } from '../utils/formatters.js';
import { useCart } from '../context/CartContext.jsx';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fallback placeholder image jika link gambar eksternal gagal dimuat
  const fallbackImage = "/images/gurame-bumbu-kuning.png";

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!product.inStock) return;

    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  const imageAlt = product.alt || `Jual ${product.name} – Ikan Marinasi Siap Masak Malang Pak ABIL`;

  return (
    <article className="product-card">
      <div className="product-image-container">
        <Link to={`/produk/${product.slug}`} tabIndex={-1} aria-label={product.name}>
          <img
            src={imageError ? fallbackImage : product.image}
            alt={imageAlt}
            className="product-image"
            loading="lazy"
            width="320"
            height="220"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={() => setImageError(true)}
          />
        </Link>

        {/* Badges */}
        <div className="product-badge-list">
          {!product.inStock ? (
            <span className="badge badge-outofstock">Habis Sementara</span>
          ) : product.isFeatured ? (
            <span className="badge badge-featured">Favorit</span>
          ) : null}
          <span className="badge badge-category">{product.categoryName}</span>
        </div>
      </div>

      <div className="product-body">
        <Link to={`/produk/${product.slug}`}>
          <h3 className="product-title" title={product.name}>
            {product.name}
          </h3>
        </Link>

        {product.weight && (
          <div className="product-weight">
            <Scale size={14} />
            <span>{product.weight}</span>
          </div>
        )}

        <p className="product-excerpt">
          {product.shortDescription || product.description}
        </p>

        <div className="product-footer">
          <div>
            <span className="product-price-label">Harga per pack</span>
            <span className="product-price">{formatRupiah(product.price)}</span>
          </div>

          <div className="product-actions">
            <Link
              to={`/produk/${product.slug}`}
              className="btn btn-secondary btn-icon-only"
              title={`Lihat detail ${product.name}`}
              aria-label={`Lihat detail ${product.name}`}
            >
              <Eye size={18} />
            </Link>

            <button
              type="button"
              className="btn btn-primary btn-icon-only"
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
              title={product.inStock ? `Tambah ${product.name} ke Keranjang` : "Stok sedang habis"}
              aria-label={product.inStock ? `Tambah ${product.name} ke Keranjang` : "Stok sedang habis"}
              style={{
                backgroundColor: isAdding ? 'var(--color-success)' : (!product.inStock ? '#D1BFB0' : 'var(--color-primary)')
              }}
            >
              {isAdding ? <Check size={18} /> : <ShoppingBag size={18} />}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
