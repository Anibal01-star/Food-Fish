import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

export const ArticleCard = ({ article, onReadMore }) => {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = "/images/tips-menggoreng-ikan.png";

  return (
    <article className="product-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Link to={`/artikel/${article.slug}`} className="product-image-container" style={{ paddingTop: '60%', display: 'block' }}>
        <img
          src={imageError ? fallbackImage : article.image}
          alt={`${article.title} – Panduan Ikan Marinasi Siap Masak Pak ABIL Malang`}
          className="product-image"
          loading="lazy"
          onError={() => setImageError(true)}
        />
        <div className="product-badge-list">
          <span className="badge badge-category">{article.category}</span>
        </div>
      </Link>

      <div className="product-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Calendar size={13} />
            {article.date}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Clock size={13} />
            {article.readTime}
          </span>
        </div>

        <h3 className="product-title" style={{ fontSize: '1.12rem', marginBottom: '0.65rem' }}>
          <Link 
            to={`/artikel/${article.slug}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {article.title}
          </Link>
        </h3>

        <p className="product-excerpt" style={{ WebkitLineClamp: 3, marginBottom: '1.25rem' }}>
          {article.excerpt}
        </p>

        <div style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            to={`/artikel/${article.slug}`}
            style={{
              color: 'var(--color-ocean-blue)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              textDecoration: 'none'
            }}
          >
            <span>Baca Artikel Lengkap</span>
            <ArrowRight size={16} />
          </Link>

          {onReadMore && (
            <button
              type="button"
              onClick={() => onReadMore(article)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-text-muted)',
                fontSize: '0.78rem',
                cursor: 'pointer',
                padding: '2px 6px',
                borderRadius: '4px'
              }}
              title="Pratinjau Cepat"
            >
              Pratinjau
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
