import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { formatRupiah } from '../utils/formatters.js';

export const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalItemCount, totalProductPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="page-header">
          <div className="page-header-content">
            <span className="section-tag">Keranjang Belanja</span>
            <h1 className="page-title">Keranjang Anda Masih Kosong</h1>
            <p className="page-subtitle">
              Anda belum menambahkan ikan marinasi ke dalam keranjang belanja.
            </p>
          </div>
        </div>

        <div className="cart-section" style={{ textAlign: 'center', padding: '4rem 1.5rem 6rem' }}>
          <div className="empty-state" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-fresh-mint)',
              color: 'var(--color-deep-navy)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}>
              <ShoppingBag size={38} />
            </div>

            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-deep-navy)', marginBottom: '0.75rem' }}>
              Belum Ada Ikan Marinasi yang Dipilih
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Temukan aneka pilihan ikan gurame bumbu kuning, nila bakar madu, fillet dori tanpa duri, dan paket hemat keluarga siap masak di katalog kami.
            </p>

            <Link to="/produk" className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
              <span>Jelajahi Menu Ikan Marinasi</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="page-header">
        <div className="page-header-content">
          <span className="section-tag">Keranjang Belanja</span>
          <h1 className="page-title">Daftar Menu Pilihan Anda</h1>
          <p className="page-subtitle">
            Periksa rincian pesanan ikan marinasi sebelum melanjutkan ke pengisian data pemesanan.
          </p>
        </div>
      </div>

      <div className="cart-section">
        <div className="cart-layout">
          {/* Cart Items List */}
          <div className="cart-items-card">
            <div className="cart-items-header">
              <span style={{ fontWeight: 700, color: 'var(--color-deep-navy)' }}>
                {totalItemCount} Item Produk di Keranjang
              </span>
              <button
                type="button"
                onClick={clearCart}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-danger)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <Trash2 size={15} />
                <span>Kosongkan Keranjang</span>
              </button>
            </div>

            <div className="cart-items-list">
              {cartItems.map((item) => {
                const itemSubtotal = item.product.price * item.quantity;
                return (
                  <div key={item.productId} className="cart-item">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="cart-item-img"
                    />

                    <div className="cart-item-info">
                      <Link to={`/produk/${item.product.slug}`}>
                        <h4>{item.product.name}</h4>
                      </Link>
                      <div className="cart-item-price">
                        {formatRupiah(item.product.price)} / pack
                      </div>
                      {item.product.weight && (
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                          Kemasan: {item.product.weight}
                        </div>
                      )}
                    </div>

                    {/* Quantity Control */}
                    <div className="quantity-control">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        aria-label="Kurangi jumlah"
                      >
                        <Minus size={15} />
                      </button>
                      <input
                        type="text"
                        className="qty-input"
                        value={item.quantity}
                        readOnly
                        aria-label="Jumlah pesanan"
                      />
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        aria-label="Tambah jumlah"
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    {/* Subtotal & Delete */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                      <div className="cart-item-subtotal">
                        {formatRupiah(itemSubtotal)}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.productId)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--color-text-muted)',
                          cursor: 'pointer',
                          padding: '4px'
                        }}
                        title="Hapus dari keranjang"
                        aria-label={`Hapus ${item.product.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{
              padding: '1.25rem 1.75rem',
              backgroundColor: 'var(--color-warm-cream)',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Link to="/produk" style={{
                color: 'var(--color-ocean-blue)',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <ArrowLeft size={16} />
                <span>Tambah Menu Lainnya</span>
              </Link>
            </div>
          </div>

          {/* Cart Summary Card */}
          <div className="cart-summary-card">
            <h3 className="summary-title">Ringkasan Pesanan</h3>

            <div className="summary-row">
              <span>Total Kuantitas</span>
              <strong>{totalItemCount} pack</strong>
            </div>

            <div className="summary-row">
              <span>Subtotal Produk</span>
              <strong>{formatRupiah(totalProductPrice)}</strong>
            </div>

            <div className="summary-row" style={{ alignItems: 'flex-start' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Truck size={15} color="var(--color-ocean-blue)" />
                <span>Biaya Ongkos Kirim</span>
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', textAlign: 'right' }}>
                Dikonfirmasi Penjual*
              </span>
            </div>

            <div className="summary-row total">
              <span>Total Produk</span>
              <span>{formatRupiah(totalProductPrice)}</span>
            </div>

            {/* Note about Shipping policy */}
            <div style={{
              backgroundColor: 'var(--color-warm-cream)',
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem',
              marginBottom: '1.5rem',
              fontSize: '0.82rem',
              lineHeight: '1.5',
              color: 'var(--color-text-secondary)',
              border: '1px solid var(--color-border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginBottom: '0.25rem' }}>
                <HelpCircle size={14} color="var(--color-ocean-blue)" />
                <span>*Kebijakan Pengiriman Malang Raya</span>
              </div>
              Ongkos kirim dihitung berdasarkan jarak tempuh ke alamat pengiriman Anda (via kurir internal / ojek online) dan akan dikonfirmasi langsung oleh penjual saat pemesanan WhatsApp.
            </div>

            <Link to="/checkout" className="btn btn-primary" style={{ width: '100%' }}>
              <span>Lanjut ke Checkout</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
