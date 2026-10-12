import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  Package, 
  Truck, 
  PhoneCall, 
  ChefHat,
  HeartHandshake
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard.jsx';
import { CategoryCard } from '../components/CategoryCard.jsx';
import { ArticleCard } from '../components/ArticleCard.jsx';
import { WhatsAppNotice } from '../components/WhatsAppNotice.jsx';
import { getFeaturedProducts } from '../data/products.js';
import { CATEGORIES } from '../data/categories.js';
import { ARTICLES } from '../data/articles.js';
import { createWhatsAppUrl } from '../config/whatsapp.js';

export const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  const mainCategories = CATEGORIES.filter((c) => c.id !== 'all');
  const previewArticles = ARTICLES.slice(0, 3);

  const heroWaUrl = createWhatsAppUrl(
    "Halo FoodFish Malang! Saya ingin pesan ikan marinasi siap masak. Boleh minta info stok dan rekomendasi menu hari ini?"
  );

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text-content">
            <div className="hero-pill">
              <Sparkles size={16} color="var(--color-ocean-blue)" />
              <span>Solusi Praktis Kuliner Keluarga di Malang Raya</span>
            </div>

            <h1 className="hero-title">
              Ikan Berbumbu, <br />
              <span className="highlight">Praktis Tinggal Masak.</span>
            </h1>

            <p className="hero-description">
              Nikmati kelezatan ikan segar pilihan yang telah dimarinasi dengan racikan rempah nusantara alami. 
              Bersih higienis, bumbu meresap sampai ke tulang, siap digoreng atau dibakar hanya dalam hitungan menit tanpa repot mengulek bumbu.
            </p>

            <div className="hero-cta-group">
              <Link to="/produk" className="btn btn-primary">
                <span>Lihat Katalog Produk</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href={heroWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                id="hero-wa-btn"
              >
                <MessageCircle size={18} />
                <span>Pesan via WhatsApp</span>
              </a>
            </div>

            <div className="hero-trust-badges">
              <div className="trust-item">
                <ShieldCheck size={20} className="trust-item-icon" />
                <span>100% Rempah Alami</span>
              </div>
              <div className="trust-item">
                <Clock size={20} className="trust-item-icon" />
                <span>Masak Cepat 10 Menit</span>
              </div>
              <div className="trust-item">
                <Truck size={20} className="trust-item-icon" />
                <span>Area Malang Raya</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <img
                src="/images/hero-ikan-marinasi.png"
                alt="Ikan berbumbu marinasi rempah segar siap masak dengan jeruk nipis dan cabai"
                className="hero-image"
                loading="eager"
              />
              <div className="hero-floating-badge">
                <div className="floating-icon-wrap">
                  <Flame size={22} color="var(--color-coral-orange)" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-deep-navy)' }}>
                    Bumbu Meresap Sempurna
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                    Tinggal buka kemasan, panaskan wajan!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Configuration Notice for users/testers */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '1.5rem auto 0', padding: '0 1.5rem' }}>
        <WhatsAppNotice compact={true} />
      </div>

      {/* 2. Product Category Cards */}
      <section className="section section-cream">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Kategori Favorit</span>
            <h2 className="section-title">Pilihan Olahan Ikan Siap Masak</h2>
            <p className="section-desc">
              Pilih varian rasa bumbu favorit keluarga Anda, mulai dari rempah kuning tradisional hingga bumbu bakar manis gurih.
            </p>
          </div>

          <div className="grid-4">
            {mainCategories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products Grid */}
      <section className="section section-white">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Menu Terlaris</span>
            <h2 className="section-title">Produk Marinasi Rekomendasi</h2>
            <p className="section-desc">
              Menu favorit pelanggan setia FoodFish di Malang Raya. Daging empuk berpadu rempah kaya rasa.
            </p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/produk" className="btn btn-outline" style={{ padding: '0.85rem 2rem' }}>
              <span>Jelajahi Seluruh Menu ({CATEGORIES.length > 0 ? 'Katalog Lengkap' : ''})</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FoodFish Benefits Section */}
      <section className="section section-cream">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Keunggulan FoodFish</span>
            <h2 className="section-title">Mengapa Memilih Ikan Marinasi Kami?</h2>
            <p className="section-desc">
              Kami memahami kesibukan Anda. FoodFish hadir memberi solusi lauk sehat, bergizi, dan lezat tanpa menyita waktu di dapur.
            </p>
          </div>

          <div className="grid-3">
            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <Sparkles size={26} />
              </div>
              <h3 className="benefit-title">Bumbu Rempah Alami Meresap</h3>
              <p className="benefit-desc">
                Diracik menggunakan bumbu segar nusantara asli (kunyit, jahe, bawang lokal, serai) tanpa bahan pengawet kimia sintetis.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <ChefHat size={26} />
              </div>
              <h3 className="benefit-title">Bersih, Higienis & Siap Olah</h3>
              <p className="benefit-desc">
                Ikan telah dibersihkan sisik, kotoran perut, dan insangnya secara teliti dengan standar kebersihan tinggi sebelum dibumbui.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <Clock size={26} />
              </div>
              <h3 className="benefit-title">Praktis Matang 10 Menit</h3>
              <p className="benefit-desc">
                Tidak perlu repot mengulek bumbu atau mencuci ikan berlumur darah. Cukup panaskan minyak atau teflon dan sajikan hangat.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <Package size={26} />
              </div>
              <h3 className="benefit-title">Kemasan Kedap Udara (Vacuum Pack)</h3>
              <p className="benefit-desc">
                Dikemas kedap udara menjaga kualitas daging tetap juicy dan bumbu tidak terkontaminasi bau lain saat disimpan di freezer.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <HeartHandshake size={26} />
              </div>
              <h3 className="benefit-title">Aman untuk Seluruh Anggota Keluarga</h3>
              <p className="benefit-desc">
                Tersedia varian rasa gurih tidak pedas dan pilihan ikan bebas duri (fillet) yang aman dan sangat disukai anak-anak.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <Truck size={26} />
              </div>
              <h3 className="benefit-title">Pengiriman Cepat Malang Raya</h3>
              <p className="benefit-desc">
                Melayani pengantaran cepat ke Kota Malang, Kabupaten Malang, dan Kota Batu dengan kurir atau ojek online terpercaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Three-Step Ordering Guide */}
      <section className="section section-white">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Cara Pemesanan</span>
            <h2 className="section-title">3 Langkah Mudah Menikmati FoodFish</h2>
            <p className="section-desc">
              Pesan makanan lezat untuk keluarga tidak pernah semudah ini.
            </p>
          </div>

          <div className="grid-3">
            <div className="step-card">
              <span className="step-number">01</span>
              <div className="step-icon-wrap">
                <Package size={24} />
              </div>
              <h3 className="step-title">Pilih Ikan & Bumbu Favorit</h3>
              <p className="step-desc">
                Jelajahi katalog kami, pilih varian ikan marinasi sesuai selera keluarga, lalu masukkan ke dalam keranjang belanja.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <div className="step-icon-wrap">
                <PhoneCall size={24} />
              </div>
              <h3 className="step-title">Konfirmasi via WhatsApp</h3>
              <p className="step-desc">
                Kirim format pesanan otomatis langsung ke WhatsApp resmi penjual. Seller akan mengonfirmasi stok dan tarif kurir.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <div className="step-icon-wrap">
                <Flame size={24} />
              </div>
              <h3 className="step-title">Ikan Diantar & Siap Masak</h3>
              <p className="step-desc">
                Pesanan dikirimkan dalam kondisi beku/dingin higienis siap olah. Goreng atau bakar langsung untuk santapan lezat!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Promotional-Style Banner (Without fabricated discounts) */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '5rem' }}>
        <div className="section-container">
          <div className="promo-banner">
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-coral-orange)',
                color: '#FFFFFF',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '0.3rem 0.8rem',
                borderRadius: '999px',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                Layanan Segar Malang Raya
              </span>
              <h2 className="promo-title">
                Stok Lauk Praktis Bergizi untuk Santapan Keluarga Setiap Hari
              </h2>
              <p className="promo-desc">
                Tidak perlu repot ke pasar pagi atau berkutat mencuci ikan berbau amis. 
                Simpan produk FoodFish di freezer Anda, siap disajikan hangat kapanpun keluarga lapar.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/produk" className="btn btn-coral">
                  Pesan Menu Praktis Sekarang
                </Link>
                <Link to="/tentang-kami" className="btn btn-outline" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)' }}>
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-fresh-mint)', marginBottom: '0.5rem' }}>
                  Coverage Area
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  Malang Raya
                </div>
                <p style={{ fontSize: '0.9rem', color: '#D3E4F0', margin: 0, lineHeight: 1.5 }}>
                  Pengiriman cepat menjangkau Kota Malang, Kabupaten Malang, dan Kota Batu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Article Previews */}
      <section className="section section-cream">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Inspirasi Dapur</span>
            <h2 className="section-title">Tips & Resep Olahan Ikan</h2>
            <p className="section-desc">
              Kiat praktis memasak ikan agar garing renyah, panduan food prep di freezer, dan resep sambal pelengkap hidangan.
            </p>
          </div>

          <div className="grid-3">
            {previewArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/artikel" className="btn btn-secondary">
              <span>Lihat Semua Artikel & Tips Dapur</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
