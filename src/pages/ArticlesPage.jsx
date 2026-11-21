import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES, getArticleCategories } from '../data/articles.js';
import { ArticleCard } from '../components/ArticleCard.jsx';
import { BookOpen, Calendar, Clock, User, X, ArrowLeft, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

export const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeArticle, setActiveArticle] = useState(null);

  React.useEffect(() => {
    document.title = "Panduan Memasak & Resep Ikan Marinasi | Marinasi Pak ABIL";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Kumpulan tips memasak dan resep ikan bumbu marinasi dari Marinasi Pak ABIL. Panduan menggoreng anti lengket, cara simpan di freezer, dan olahan praktis.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const categories = getArticleCategories();

  const filteredArticles = selectedCategory === 'Semua' 
    ? ARTICLES 
    : ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="articles-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <span className="section-tag">Dapur & Inspirasi Kuliner</span>
          <h1 className="page-title">Panduan Memasak & Resep Ikan Marinasi Malang</h1>
          <p className="page-subtitle">
            Kumpulan artikel panduan memasak ikan marinasi anti lengket, trik memanggang di teflon, rahasia bumbu kuning bebas bau lumpur, dan tips food prep praktis untuk keluarga.
          </p>
        </div>
      </div>

      <div className="section-container" style={{ padding: '3rem 1.5rem 5rem' }}>
        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-deep-navy)', margin: 0 }}>
            Koleksi Panduan & Tips Dapur Terkini
          </h2>
        </div>

        <div className="grid-3">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onReadMore={(art) => setActiveArticle(art)}
            />
          ))}
        </div>
      </div>

      {/* Article Quick Reader Modal */}
      {activeArticle && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(18, 48, 71, 0.75)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            maxWidth: '780px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'var(--shadow-hover)',
            overflow: 'hidden'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '1.25rem 1.75rem',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'var(--color-warm-cream)'
            }}>
              <span className="badge badge-category">{activeArticle.category}</span>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-deep-navy)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                aria-label="Tutup artikel"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={14} />
                  {activeArticle.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} />
                  {activeArticle.readTime}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <User size={14} />
                  {activeArticle.author}
                </span>
              </div>

              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '1.25rem', lineHeight: '1.3' }}>
                {activeArticle.title}
              </h2>

              <img
                src={activeArticle.image}
                alt={`${activeArticle.title} – Panduan Dapur Marinasi Pak ABIL Malang`}
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: '1.75rem',
                  border: '1px solid var(--color-border)'
                }}
              />

              <div style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: 'var(--color-text-secondary)',
                marginBottom: '1.5rem'
              }}>
                <p style={{ fontWeight: 600, color: 'var(--color-deep-navy)', marginBottom: '1rem' }}>
                  {activeArticle.excerpt}
                </p>

                {activeArticle.sections && activeArticle.sections.slice(0, 2).map((sec, i) => (
                  <div key={i} style={{ marginBottom: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginBottom: '0.5rem' }}>
                      {sec.heading}
                    </h3>
                    <p style={{ fontSize: '0.96rem', lineHeight: 1.7 }}>
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>

              {activeArticle.tags && (
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)' }}>
                  {activeArticle.tags.map((tag) => (
                    <span key={tag} style={{
                      backgroundColor: 'var(--color-warm-cream)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8rem',
                      color: 'var(--color-ocean-blue)',
                      fontWeight: 600
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '1.25rem 1.75rem',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#FAFAFA',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveArticle(null)}
              >
                Tutup Pratinjau
              </button>

              <Link
                to={`/artikel/${activeArticle.slug}`}
                className="btn btn-primary"
                onClick={() => setActiveArticle(null)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span>Buka Halaman Artikel Lengkap</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
