import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  Lightbulb, 
  HelpCircle, 
  ShoppingBag, 
  MessageCircle, 
  Copy, 
  Check, 
  BookOpen, 
  AlertTriangle,
  Sparkles,
  Tag
} from 'lucide-react';
import { getArticleBySlug, getRelatedArticles } from '../data/articles.js';
import { getProductBySlug } from '../data/products.js';
import { formatRupiah } from '../utils/formatters.js';
import { createWhatsAppUrl } from '../config/whatsapp.js';
import { ArticleCard } from '../components/ArticleCard.jsx';

export const ArticleDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const article = getArticleBySlug(slug);

  // Set document title & meta tags for SEO
  useEffect(() => {
    if (article) {
      const title = `${article.title} | Marinasi Pak ABIL Malang`;
      const description = article.metaDescription || article.excerpt;
      const articleUrl = `https://foodfish-malang.vercel.app/artikel/${article.slug}`;

      document.title = title;
      window.scrollTo(0, 0);

      const updateMetaTag = (selector, attribute, value, content) => {
        let tag = document.querySelector(selector);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute(attribute, value);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      };

      updateMetaTag('meta[name="description"]', 'name', 'description', description);
      updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
      updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
      updateMetaTag('meta[property="og:url"]', 'property', 'og:url', articleUrl);
      updateMetaTag('meta[property="og:image"]', 'property', 'og:image', `https://foodfish-malang.vercel.app${article.image}`);
      updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
      updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
      updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', `https://foodfish-malang.vercel.app${article.image}`);

      const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', articleUrl);
      if (!document.head.contains(canonicalLink)) {
        document.head.appendChild(canonicalLink);
      }
    }
  }, [article, slug]);

  if (!article) {
    return (
      <div className="section" style={{ textAlign: 'center', padding: '6rem 1.5rem' }}>
        <div className="empty-state" style={{ maxWidth: '520px', margin: '0 auto' }}>
          <AlertTriangle size={54} color="#F28C28" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', color: 'var(--color-deep-navy)' }}>
            Artikel Tidak Ditemukan
          </h2>
          <p style={{ margin: '0 auto 1.5rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            Maaf, artikel yang Anda cari tidak tersedia atau tautan telah diperbarui. Silakan jelajahi artikel informatif lainnya seputar ikan marinasi dan resep dapur.
          </p>
          <Link to="/artikel" className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>Kembali ke Halaman Artikel</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article.slug, article.category, 3);
  const relatedProduct = article.relatedProductSlug ? getProductBySlug(article.relatedProductSlug) : null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://foodfish-malang.vercel.app/artikel/${article.slug}`;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareWaUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `*${article.title}*\n\nBaca artikel selengkapnya di Marinasi Pak ABIL:\n${currentUrl}`
  )}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": `https://foodfish-malang.vercel.app${article.image}`,
    "author": {
      "@type": "Organization",
      "name": "Marinasi Pak ABIL"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marinasi Pak ABIL",
      "logo": {
        "@type": "ImageObject",
        "url": "https://foodfish-malang.vercel.app/favicon.svg"
      }
    },
    "description": article.metaDescription || article.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    }
  };

  return (
    <div className="article-detail-page" style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Breadcrumb Header */}
      <div style={{ backgroundColor: 'var(--color-warm-cream)', borderBottom: '1px solid var(--color-border)', padding: '1.25rem 1.5rem' }}>
        <div className="section-container">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ margin: 0 }}>
            <Link to="/">Beranda</Link>
            <ChevronRight size={14} />
            <Link to="/artikel">Artikel</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-ocean-blue)', fontWeight: 600 }}>{article.category}</span>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--color-deep-navy)', fontWeight: 600, maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="section-container" style={{ padding: '2.5rem 1.5rem 4rem' }}>
        {/* Main Article Container Layout */}
        <div className="article-detail-layout">
          {/* Main Article Body Column */}
          <article className="article-main-card">
            {/* Top Back & Category Row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <Link 
                to="/artikel" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.4rem', 
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}
              >
                <ArrowLeft size={16} />
                <span>Semua Panduan & Artikel</span>
              </Link>

              <span className="badge badge-category" style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}>
                {article.category}
              </span>
            </div>

            {/* Article Heading */}
            <h1 style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              lineHeight: 1.3,
              color: 'var(--color-deep-navy)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em'
            }}>
              {article.title}
            </h1>

            {/* Article Meta Row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.25rem',
              fontSize: '0.88rem',
              color: 'var(--color-text-muted)',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--color-border-subtle)',
              marginBottom: '2rem'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={15} color="var(--color-ocean-blue)" />
                {article.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={15} color="var(--color-ocean-blue)" />
                {article.readTime}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <User size={15} color="var(--color-ocean-blue)" />
                {article.author}
              </span>
            </div>

            {/* Featured Image */}
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              marginBottom: '2rem',
              backgroundColor: 'var(--color-warm-cream)',
              border: '1px solid var(--color-border)'
            }}>
              <img
                src={imageError ? '/images/tips-menggoreng-ikan.png' : article.image}
                alt={article.title}
                onError={() => setImageError(true)}
                style={{
                  width: '100%',
                  maxHeight: '440px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{ padding: '0.65rem 1rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontStyle: 'italic', backgroundColor: '#FDF7F2' }}>
                Dokumentasi sajian ikan marinasi & tips dapur Marinasi Pak ABIL Malang
              </div>
            </div>

            {/* Lead Excerpt */}
            <div style={{
              fontSize: '1.18rem',
              lineHeight: 1.75,
              color: 'var(--color-deep-navy)',
              fontWeight: 500,
              padding: '1.25rem 1.5rem',
              backgroundColor: 'var(--color-warm-cream)',
              borderRadius: 'var(--radius-lg)',
              borderLeft: '4px solid var(--color-primary)',
              marginBottom: '2.5rem'
            }}>
              {article.excerpt}
            </div>

            {/* Key Takeaways Box */}
            {article.keyTakeaways && article.keyTakeaways.length > 0 && (
              <div style={{
                backgroundColor: 'var(--color-primary-light)',
                border: '1.5px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem 1.75rem',
                marginBottom: '2.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                  <Sparkles size={20} />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--color-deep-navy)' }}>
                    Poin Kunci Panduan Ini
                  </h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {article.keyTakeaways.map((point, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.98rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      <CheckCircle2 size={18} color="var(--color-fresh-mint-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Structured Sections */}
            <div className="article-content-body" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {article.sections && article.sections.map((section, idx) => (
                <section key={idx} style={{ borderBottom: idx < article.sections.length - 1 ? '1px dashed var(--color-border)' : 'none', paddingBottom: idx < article.sections.length - 1 ? '2rem' : 0 }}>
                  <h2 style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: 'var(--color-deep-navy)',
                    marginBottom: '1rem',
                    lineHeight: 1.35
                  }}>
                    {section.heading}
                  </h2>
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.85,
                    color: 'var(--color-text-secondary)',
                    marginBottom: section.tip ? '1.25rem' : 0,
                    whiteSpace: 'pre-line'
                  }}>
                    {section.content}
                  </p>

                  {section.tip && (
                    <div style={{
                      backgroundColor: '#FFFBEB',
                      border: '1.5px solid #FDE68A',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}>
                      <Lightbulb size={20} color="#C65D16" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.88rem', color: '#92400E', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Tips Dapur Marinasi Pak ABIL:
                        </strong>
                        <p style={{ margin: 0, fontSize: '0.92rem', color: '#78350F', lineHeight: 1.5 }}>
                          {section.tip}
                        </p>
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* FAQs Section */}
            {article.faqs && article.faqs.length > 0 && (
              <div style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '2px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <HelpCircle size={22} color="var(--color-ocean-blue)" />
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-deep-navy)', margin: 0 }}>
                    Pertanyaan yang Sering Diajukan (FAQ)
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {article.faqs.map((faq, index) => (
                    <div 
                      key={index}
                      style={{
                        backgroundColor: 'var(--color-warm-cream)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '1.25rem 1.5rem'
                      }}
                    >
                      <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginBottom: '0.5rem' }}>
                        Q: {faq.question}
                      </h4>
                      <p style={{ fontSize: '0.94rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                        A: {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags Section */}
            {article.tags && (
              <div style={{
                marginTop: '3rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.6rem'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
                  <Tag size={15} /> Topik Terkait:
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: 'var(--color-warm-cream)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--color-ocean-blue)'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share Bottom Bar */}
            <div style={{
              marginTop: '2.5rem',
              padding: '1.5rem',
              backgroundColor: '#F8FAFC',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <strong style={{ display: 'block', fontSize: '0.98rem', color: 'var(--color-deep-navy)' }}>
                  Suka dengan artikel panduan ini?
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  Bagikan ke keluarga atau rekan memasak Anda:
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  {copied ? <Check size={16} color="var(--color-fresh-mint-dark)" /> : <Copy size={16} />}
                  <span>{copied ? "Tautan Tersalin!" : "Salin Link"}</span>
                </button>

                <a
                  href={shareWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <MessageCircle size={16} />
                  <span>Kirim WhatsApp</span>
                </a>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar Column */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'sticky', top: '100px' }}>
            {/* Related Product Card Spotlight */}
            {relatedProduct && (
              <div style={{
                backgroundColor: 'var(--color-white)',
                border: '1.5px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <ShoppingBag size={18} />
                  <strong style={{ fontSize: '0.92rem', letterSpacing: '0.02em' }}>
                    Menu Rekomendasi Artikel
                  </strong>
                </div>

                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                    <span className="badge badge-category" style={{ fontSize: '0.75rem' }}>
                      {relatedProduct.categoryName}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '0.35rem' }}>
                    {relatedProduct.name}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
                    {relatedProduct.shortDescription}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-deep-navy)' }}>
                      {formatRupiah(relatedProduct.price)}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>/ pack</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link
                      to={`/produk/${relatedProduct.slug}`}
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem', padding: '0.65rem 1rem' }}
                    >
                      Lihat Detail Produk
                    </Link>
                    <a
                      href={createWhatsAppUrl(`Halo Marinasi Pak ABIL, saya membaca artikel "${article.title}" dan tertarik ingin memesan ${relatedProduct.name}. Apakah stok tersedia?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem', padding: '0.65rem 1rem' }}
                    >
                      <MessageCircle size={16} />
                      <span>Pesan Cepat via WA</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Author Profile Card */}
            <div style={{
              backgroundColor: 'var(--color-white)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.5rem',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  fontWeight: 800
                }}>
                  ABIL
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-deep-navy)', margin: 0 }}>
                    {article.author}
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                    Dapur Kuliner Marinasi Pak ABIL
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Berkomitmen menghadirkan hidangan ikan marinasi nusantara yang higienis, lezat, dan bebas ribet untuk keluarga di Malang Raya.
              </p>
            </div>

            {/* WhatsApp CTA Card */}
            <div style={{
              backgroundColor: '#F0FDF4',
              borderRadius: 'var(--radius-xl)',
              padding: '1.5rem',
              border: '1.5px solid #BBF7D0',
              textAlign: 'center'
            }}>
              <MessageCircle size={36} color="#16A34A" style={{ margin: '0 auto 0.75rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#166534', marginBottom: '0.5rem' }}>
                Butuh Bantuan Memasak?
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#15803D', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Punya pertanyaan seputar cara menggoreng atau rekomendasi menu ikan marinasi? Tim chef Marinasi Pak ABIL siap melayani via chat WhatsApp.
              </p>
              <a
                href={createWhatsAppUrl(`Halo Tim Marinasi Pak ABIL, saya ingin berkonsultasi mengenai menu olahan ikan marinasi siap masak.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Konsultasi Gratis via WA
              </a>
            </div>
          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '2px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="section-tag">Eksplorasi Lainnya</span>
                <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginTop: '0.35rem' }}>
                  Panduan Memasak & Artikel Terkait
                </h2>
              </div>
              <Link to="/artikel" className="btn btn-secondary">
                Lihat Semua Artikel
              </Link>
            </div>

            <div className="grid-3">
              {relatedArticles.map((relArt) => (
                <ArticleCard key={relArt.id} article={relArt} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
