import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Flame, 
  Package, 
  Truck, 
  PhoneCall, 
  ChefHat,
  HeartHandshake,
  ChevronDown,
  HelpCircle
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

  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = "Jual Ikan Marinasi Malang | Siap Masak – Pak ABIL";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Cari ikan marinasi siap masak di Malang? Marinasi Pak ABIL menyediakan aneka ikan dan seafood berbumbu pilihan yang praktis, lezat, higienis, dan siap antar Malang Raya.'
      );
    }
  }, []);

  const heroWaUrl = createWhatsAppUrl(
    "Halo Marinasi Pak ABIL Malang! Saya ingin memesan ikan marinasi siap masak. Boleh minta info stok dan rekomendasi menu hari ini?"
  );

  const homeFaqs = [
    {
      q: "Berapa lama ikan marinasi Marinasi Pak ABIL tahan disimpan?",
      a: "Dalam kemasan vacuum pack tertutup rapat di dalam freezer suhu -18°C, produk tahan hingga 2 bulan dengan kualitas rasa dan kesegaran rempah yang terjaga. Di kulkas bawah (chiller), disarankan dimasak dalam waktu 2-3 hari."
    },
    {
      q: "Apakah perlu menambahkan bumbu lagi saat hendak menggoreng atau membakar?",
      a: "Tidak perlu sama sekali. Ikan telah dimarinasi secara merata dengan racikan rempah nusantara alami hingga ke serat tulang terdalam. Tinggal buka kemasan plastik, panaskan minyak atau teflon, dan langsung masak."
    },
    {
      q: "Bagaimana jangkauan pengiriman di wilayah Malang Raya?",
      a: "Kami melayani pengiriman menjangkau area Kota Malang, Kabupaten Malang, dan Kota Batu menggunakan kurir instan atau ojek online demi menjaga suhu dingin dan kesegaran produk sampai di tangan Anda."
    },
    {
      q: "Bagaimana cara memesan melalui website dan WhatsApp?",
      a: "Anda cukup memilih ikan marinasi yang diinginkan di halaman katalog, masukkan ke keranjang belanja, lalu klik tombol 'Konfirmasi via WhatsApp' pada saat checkout untuk terhubung langsung dengan penjual."
    },
    {
      q: "Bagaimana cara menyajikan dan memasak ikan marinasi ini di rumah?",
      a: "Lakukan proses thawing (rendam kemasan vacuum tertutup rapat di air biasa selama 20-30 menit hingga lentur). Kemudian goreng dalam minyak panas bersuhu sedang selama 8-10 menit hingga renyah keemasan, atau panggang di wajan teflon selama 4-5 menit per sisi. Praktis tanpa perlu menambah garam atau meracik bumbu lagi!"
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text-content">
            <div className="hero-pill">
              <Sparkles size={16} color="var(--color-primary)" />
              <span>Solusi Praktis Kuliner Keluarga di Malang Raya</span>
            </div>

            <h1 className="hero-title">
              Jual Ikan Marinasi Malang <br />
              <span className="highlight">Siap Masak – Pak ABIL</span>
            </h1>

            <p className="hero-description">
              Cari ikan marinasi siap masak di Malang? Marinasi Pak ABIL menyediakan aneka ikan bumbu marinasi dan seafood segar berbalut racikan rempah nusantara alami. Praktis tinggal goreng atau bakar tanpa repot membersihkan sisik dan mengulek bumbu.
            </p>

            <div className="hero-cta-group">
              <Link to="/produk" className="btn btn-primary" title="Lihat Pilihan Produk Ikan Marinasi Malang">
                <span>Lihat Produk</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href={heroWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                id="hero-wa-btn"
                title="Pesan Langsung via WhatsApp"
              >
                <MessageCircle size={18} />
                <span>Hubungi WhatsApp</span>
              </a>
            </div>

            <div className="hero-trust-badges">
              <div className="trust-item">
                <ShieldCheck size={20} className="trust-item-icon" />
                <span>100% Rempah Alami</span>
              </div>
              <div className="trust-item">
                <Clock size={20} className="trust-item-icon" />
                <span>Siap Masak 10 Menit</span>
              </div>
              <div className="trust-item">
                <Truck size={20} className="trust-item-icon" />
                <span>Pengiriman Malang Raya</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <img
                src="/images/hero-ikan-marinasi-marinasi-pak-abil.png"
                alt="Ikan Marinasi Pak ABIL – Aneka Ikan Bumbu Marinasi Siap Masak Malang"
                className="hero-image"
                loading="eager"
                fetchPriority="high"
                width="540"
                height="440"
              />
              <div className="hero-floating-badge">
                <div className="floating-icon-wrap">
                  <Flame size={22} color="var(--color-accent)" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
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

      {/* WhatsApp Configuration Notice */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '1.5rem auto 0', padding: '0 1.5rem' }}>
        <WhatsAppNotice compact={true} />
      </div>

      {/* 2. Pilihan Ikan Marinasi (Kategori) */}
      <section className="section section-cream">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Kategori Produk</span>
            <h2 className="section-title">Pilihan Ikan & Seafood Bumbu Marinasi</h2>
            <p className="section-desc">
              Pilih aneka varian ikan mentah berbumbu siap masak sesuai selera keluarga, dari bumbu kuning gurih hingga bakar madu manis sedap.
            </p>
          </div>

          <div className="grid-4">
            {mainCategories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Produk Favorit Pelanggan */}
      <section className="section section-white">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Menu Terlaris</span>
            <h2 className="section-title">Menu Ikan Marinasi Malang Terlaris</h2>
            <p className="section-desc">
              Menu pilihan pelanggan Marinasi Pak ABIL di Malang Raya. Daging empuk, bebas bau tanah, dan gurih meresap.
            </p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/produk" className="btn btn-outline" style={{ padding: '0.85rem 2rem' }}>
              <span>Lihat Seluruh Katalog Ikan Marinasi</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Mengapa Memilih Marinasi Pak ABIL? */}
      <section className="section section-cream">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Keunggulan Kualitas</span>
            <h2 className="section-title">Mengapa Memilih Marinasi Pak ABIL?</h2>
            <p className="section-desc">
              Kami berkomitmen menyajikan ikan marinasi berkualitas tinggi untuk memudahkan santapan sehat keluarga tanpa repot di dapur.
            </p>
          </div>

          <div className="grid-3">
            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <Sparkles size={26} color="var(--color-primary)" />
              </div>
              <h3 className="benefit-title">Bumbu Rempah Alami Meresap</h3>
              <p className="benefit-desc">
                Diracik menggunakan bumbu segar nusantara asli (kunyit, jahe, bawang lokal, serai) tanpa bahan pengawet kimia sintetis.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <ChefHat size={26} color="var(--color-primary)" />
              </div>
              <h3 className="benefit-title">Bersih, Higienis & Siap Olah</h3>
              <p className="benefit-desc">
                Ikan telah disiangi secara teliti dari sisik, insang, dan kotoran organ dalam sebelum dimarinasi dengan standar kebersihan tinggi.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <Clock size={26} color="var(--color-primary)" />
              </div>
              <h3 className="benefit-title">Praktis Siap Masak 10 Menit</h3>
              <p className="benefit-desc">
                Menghemat waktu dapur Anda di pagi atau malam hari. Cukup goreng atau bakar teflon tanpa perlu mengulek bumbu.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <Package size={26} color="var(--color-primary)" />
              </div>
              <h3 className="benefit-title">Kemasan Kedap Udara (Vacuum Pack)</h3>
              <p className="benefit-desc">
                Teknologi kemasan kedap udara menjaga kesegaran sari daging dan mencegah bau bercampur dengan bahan lain di lemari es.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <HeartHandshake size={26} color="var(--color-primary)" />
              </div>
              <h3 className="benefit-title">Pilihan Tanpa Duri untuk Anak</h3>
              <p className="benefit-desc">
                Tersedia varian fillet dori dan bandeng cabut duri yang aman dikonsumsi anak-anak dan lansia tanpa khawatir tersedak duri.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <Truck size={26} color="var(--color-primary)" />
              </div>
              <h3 className="benefit-title">Pengiriman Cepat Malang Raya</h3>
              <p className="benefit-desc">
                Melayani pengiriman tepat waktu ke area Kota Malang, Kabupaten Malang, dan Kota Batu dengan kurir terpercaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Cara Pemesanan */}
      <section className="section section-white">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Alur Belanja</span>
            <h2 className="section-title">Cara Pemesanan Ikan Marinasi Praktis</h2>
            <p className="section-desc">
              Pesan ikan marinasi segar pilihan untuk stok lauk harian melalui 3 langkah mudah:
            </p>
          </div>

          <div className="grid-3">
            <div className="step-card">
              <span className="step-number">01</span>
              <div className="step-icon-wrap">
                <Package size={24} color="var(--color-primary)" />
              </div>
              <h3 className="step-title">Pilih Menu di Website</h3>
              <p className="step-desc">
                Buka katalog produk Marinasi Pak ABIL, pilih varian ikan berbumbu sesuai selera keluarga, lalu masukkan ke keranjang belanja.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <div className="step-icon-wrap">
                <PhoneCall size={24} color="var(--color-primary)" />
              </div>
              <h3 className="step-title">Konfirmasi via WhatsApp</h3>
              <p className="step-desc">
                Kirim detail pesanan otomatis ke WhatsApp admin. Penjual akan mengonfirmasi ketersediaan stok dan total biaya pengantaran.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <div className="step-icon-wrap">
                <Flame size={24} color="var(--color-primary)" />
              </div>
              <h3 className="step-title">Pesanan Diantar & Siap Masak</h3>
              <p className="step-desc">
                Ikan marinasi dikirim dalam kondisi dingin higienis. Simpan di freezer atau langsung masak kapan pun Anda inginkan!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pertanyaan yang Sering Diajukan (FAQ) */}
      <section className="section section-cream">
        <div className="section-container" style={{ maxWidth: '850px' }}>
          <div className="section-header">
            <span className="section-tag">Pusat Informasi</span>
            <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
            <p className="section-desc">
              Informasi lengkap seputar daya tahan produk, pengolahan, dan layanan pengiriman di Malang Raya.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {homeFaqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    cursor: 'pointer',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.05rem'
                  }}
                  aria-expanded={openFaq === idx}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <HelpCircle size={18} color="var(--color-primary)" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }}
                  />
                </button>
                {openFaq === idx && (
                  <div style={{
                    padding: '0 1.5rem 1.25rem',
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.96rem',
                    lineHeight: 1.7,
                    borderTop: '1px solid var(--color-border-subtle)',
                    paddingTop: '1rem'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Promotional Service Banner */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '4rem' }}>
        <div className="section-container">
          <div className="promo-banner">
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-accent)',
                color: '#FFFFFF',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '0.35rem 0.9rem',
                borderRadius: '999px',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Layanan Segar Malang Raya
              </span>
              <h2 className="promo-title">
                Stok Lauk Praktis Bergizi untuk Santapan Keluarga Setiap Hari
              </h2>
              <p className="promo-desc">
                Tidak perlu repot ke pasar pagi atau berkutat mencuci ikan berbau amis. 
                Simpan produk Marinasi Pak ABIL di freezer Anda, siap disajikan hangat kapan pun keluarga lapar.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/produk" className="btn btn-coral">
                  Pesan Menu Praktis Sekarang
                </Link>
                <Link to="/tentang-kami" className="btn btn-outline" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.5)' }}>
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                  Coverage Area
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  Malang Raya
                </div>
                <p style={{ fontSize: '0.9rem', color: '#F6EDE4', margin: 0, lineHeight: 1.5 }}>
                  Pengiriman cepat menjangkau Kota Malang, Kabupaten Malang, dan Kota Batu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Inspirasi Dapur: Tips & Resep Olahan Ikan */}
      <section className="section section-cream">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Inspirasi Dapur</span>
            <h2 className="section-title">Tips & Resep Olahan Ikan Marinasi Malang</h2>
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
