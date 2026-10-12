import React, { useState } from 'react';
import { ARTICLES } from '../data/articles.js';
import { ArticleCard } from '../components/ArticleCard.jsx';
import { BookOpen, Calendar, Clock, User, X, ArrowLeft, Sparkles } from 'lucide-react';

export const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ['Semua', 'Tips Memasak', 'Food Preparation', 'Resep & Inspirasi'];

  const filteredArticles = selectedCategory === 'Semua' 
    ? ARTICLES 
    : ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="articles-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <span className="section-tag">Dapur & Inspirasi</span>
          <h1 className="page-title">Artikel & Panduan Memasak</h1>
          <p className="page-subtitle">
            Tips praktis mengolah ikan marinasi agar tidak lengket di wajan, panduan food prep penyimpanan freezer, dan kreasi resep pendamping lezat.
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

      {/* Article Reader Modal */}
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
            maxWidth: '750px',
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
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
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

              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                {activeArticle.title}
              </h2>

              <img
                src={activeArticle.image}
                alt={activeArticle.title}
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
                fontSize: '1rem',
                lineHeight: '1.8',
                color: 'var(--color-text-secondary)',
                whiteSpace: 'pre-line'
              }}>
                {activeArticle.content}
              </div>

              {activeArticle.tags && (
                <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
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
              padding: '1rem 1.75rem',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              justifyContent: 'flex-end',
              backgroundColor: '#FAFAFA'
            }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveArticle(null)}
              >
                Tutup Bacaan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
