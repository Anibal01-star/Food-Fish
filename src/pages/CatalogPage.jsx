import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, AlertCircle, RefreshCw, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products.js';
import { CATEGORIES } from '../data/categories.js';
import { ProductCard } from '../components/ProductCard.jsx';
import { WhatsAppNotice } from '../components/WhatsAppNotice.jsx';

export const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('kategori') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high', 'name-asc'

  // Update selectedCategory jika query param berubah
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('kategori');
    } else {
      searchParams.set('kategori', catId);
    }
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('featured');
    setSearchParams({});
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter Kategori
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter Pencarian (nama & deskripsi)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((p) => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(q))
      );
    }

    // Pengurutan (Sorting)
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name, 'id'));
        break;
      case 'featured':
      default:
        // Prioritaskan yang featured, lalu inStock
        result.sort((a, b) => {
          if (a.isFeatured === b.isFeatured) {
            return (b.inStock ? 1 : 0) - (a.inStock ? 1 : 0);
          }
          return b.isFeatured ? 1 : -1;
        });
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="catalog-page">
      {/* Header Banner */}
      <div className="page-header">
        <div className="page-header-content">
          <span className="section-tag">Katalog FoodFish</span>
          <h1 className="page-title">Ikan Marinasi & Siap Masak</h1>
          <p className="page-subtitle">
            Pilihan ikan segar berkualitas dengan bumbu rempah pilihan. Bersih, higienis, tinggal goreng atau bakar tanpa repot.
          </p>
        </div>
      </div>

      <div className="catalog-section">
        {/* Notice on simulation catalog */}
        <div className="notice-box info" style={{ marginBottom: '2rem' }}>
          <Sparkles size={20} color="#1877A8" className="notice-icon" />
          <div className="notice-content">
            <div className="notice-title">Katalog & Simulasi Pesanan FoodFish Malang</div>
            <p style={{ margin: 0, fontSize: '0.88rem' }}>
              Daftar menu dan harga di bawah ini merupakan data contoh katalog frontend. 
              Pesanan Anda akan dikirimkan sebagai draft pemesanan langsung ke penjual via WhatsApp untuk konfirmasi ketersediaan stok hari ini.
            </p>
          </div>
        </div>

        {/* Toolbar: Search, Sort, Categories */}
        <div className="catalog-toolbar">
          <div className="search-and-sort">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Cari ikan, bumbu kuning, nila madu, dori..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Cari produk"
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <SlidersHorizontal size={18} color="var(--color-text-secondary)" />
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Urutkan produk"
              >
                <option value="featured">Rekomendasi / Populer</option>
                <option value="price-low">Harga: Termurah</option>
                <option value="price-high">Harga: Termahal</option>
                <option value="name-asc">Nama Produk: A - Z</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="category-filter-pills" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter & Active Query Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.75rem',
          fontSize: '0.92rem',
          color: 'var(--color-text-secondary)'
        }}>
          <div>
            Menampilkan <strong>{filteredProducts.length}</strong> produk
            {searchQuery && (
              <span> untuk pencarian "<em>{searchQuery}</em>"</span>
            )}
          </div>

          {(searchQuery || selectedCategory !== 'all' || sortBy !== 'featured') && (
            <button
              type="button"
              onClick={handleResetFilters}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-ocean-blue)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              <RefreshCw size={14} />
              <span>Reset Filter</span>
            </button>
          )}
        </div>

        {/* Products Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <AlertCircle className="empty-state-icon" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--color-deep-navy)' }}>
              Produk Tidak Ditemukan
            </h3>
            <p style={{ maxWidth: '480px', margin: '0 auto 1.5rem', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              Tidak ada produk yang cocok dengan pencarian atau filter yang Anda pilih. 
              Coba gunakan kata kunci lain atau reset filter untuk melihat katalog lengkap.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleResetFilters}
            >
              <RefreshCw size={16} />
              <span>Tampilkan Semua Produk</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
