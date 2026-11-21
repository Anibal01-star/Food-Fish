import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import { ScrollToTop } from './components/ScrollToTop.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Toast } from './components/Toast.jsx';

// Pages
import { HomePage } from './pages/HomePage.jsx';
import { CatalogPage } from './pages/CatalogPage.jsx';
import { ProductDetailPage } from './pages/ProductDetailPage.jsx';
import { CartPage } from './pages/CartPage.jsx';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ArticlesPage } from './pages/ArticlesPage.jsx';
import { ArticleDetailPage } from './pages/ArticleDetailPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { GalleryPage } from './pages/GalleryPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';

const routeMeta = {
  '/': {
    title: 'Jual Ikan Marinasi Malang | Siap Masak – Pak ABIL',
    description: 'Cari ikan marinasi siap masak di Malang? Marinasi Pak ABIL menyediakan aneka ikan dan seafood berbumbu pilihan yang praktis, lezat, higienis, dan siap antar Malang Raya.',
    canonical: 'https://marinasi-malang-pakabil.vercel.app/'
  },
  '/produk': {
    title: 'Katalog Ikan Marinasi Siap Masak Malang | Marinasi Pak ABIL',
    description: 'Lihat katalog lengkap ikan mentah berbumbu marinasi siap masak dari Marinasi Pak ABIL di Malang Raya. Pilihan gurame bumbu kuning, nila bakar madu, lele ketumbar, fillet dori, dan seafood.',
    canonical: 'https://marinasi-malang-pakabil.vercel.app/produk'
  },
  '/keranjang': {
    title: 'Keranjang Belanja | Marinasi Pak ABIL Malang',
    description: 'Review pilihan produk ikan marinasi Anda sebelum dikirim ke area Malang Raya melalui WhatsApp dan website Marinasi Pak ABIL.',
    canonical: 'https://marinasi-malang-pakabil.vercel.app/keranjang'
  },
  '/checkout': {
    title: 'Checkout & Pemesanan WhatsApp | Marinasi Pak ABIL Malang',
    description: 'Lanjutkan pesanan ikan marinasi siap masak dari Marinasi Pak ABIL melalui checkout yang mudah dan konfirmasi WhatsApp.',
    canonical: 'https://marinasi-malang-pakabil.vercel.app/checkout'
  },
  '/galeri': {
    title: 'Galeri Olahan Ikan Marinasi Malang | Marinasi Pak ABIL',
    description: 'Jelajahi dokumentasi foto produk, proses rempah alami, kemasan vacuum pack, dan olahan ikan marinasi siap masak dari Marinasi Pak ABIL di Malang Raya.',
    canonical: 'https://marinasi-malang-pakabil.vercel.app/galeri'
  },
  '/tentang-kami': {
    title: 'Tentang Kami – Mengenal Marinasi Pak ABIL Malang',
    description: 'Kenali komitmen kualitas dan proses Marinasi Pak ABIL dalam menyajikan ikan mentah berbumbu marinasi siap masak higienis untuk keluarga di Malang Raya.',
    canonical: 'https://marinasi-malang-pakabil.vercel.app/tentang-kami'
  },
  '/artikel': {
    title: 'Artikel & Panduan Memasak Ikan Marinasi | Marinasi Pak ABIL Malang',
    description: 'Baca panduan memasak ikan marinasi anti lengket, tips food prep freezer, dan resep bumbu marinasi dari Marinasi Pak ABIL Malang.',
    canonical: 'https://marinasi-malang-pakabil.vercel.app/artikel'
  },
  '/kontak': {
    title: 'Kontak & Lokasi Layanan Malang | Marinasi Pak ABIL',
    description: 'Hubungi Marinasi Pak ABIL untuk pemesanan ikan marinasi siap masak di Malang Raya. Layanan responsif melalui WhatsApp resmi dan Google Business Profile.',
    canonical: 'https://marinasi-malang-pakabil.vercel.app/kontak'
  }
};

function AppSEO() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, '') || '/';
    
    // Skip static route meta update for dynamic detail pages so they manage their own SEO
    if (pathname.startsWith('/produk/') || pathname.startsWith('/artikel/')) {
      return;
    }

    const pageMeta = routeMeta[pathname] || routeMeta['/'];

    document.title = pageMeta.title;

    const updateMetaTag = (selector, attribute, value, content) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('meta[name="description"]', 'name', 'description', pageMeta.description);
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', pageMeta.title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', pageMeta.description);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', `https://marinasi-malang-pakabil.vercel.app${pathname === '/' ? '' : pathname}`);
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', pageMeta.title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', pageMeta.description);

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', pageMeta.canonical);
    if (!document.head.contains(canonicalLink)) {
      document.head.appendChild(canonicalLink);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppSEO />
        <ScrollToTop />
        <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/produk" element={<CatalogPage />} />
              <Route path="/produk/:slug" element={<ProductDetailPage />} />
              <Route path="/keranjang" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/galeri" element={<GalleryPage />} />
              <Route path="/image" element={<GalleryPage />} />
              <Route path="/tentang-kami" element={<AboutPage />} />
              <Route path="/artikel" element={<ArticlesPage />} />
              <Route path="/artikel/:slug" element={<ArticleDetailPage />} />
              <Route path="/kontak" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <Toast />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
