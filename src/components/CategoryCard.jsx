import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Flame, Shield, PackageCheck, Utensils } from 'lucide-react';

export const CategoryCard = ({ category }) => {
  const getIcon = (id) => {
    switch (id) {
      case 'bumbu-kuning':
        return <Sparkles size={24} />;
      case 'bakar-marinasi':
        return <Flame size={24} />;
      case 'fillet-siap-masak':
        return <Shield size={24} />;
      case 'paket-keluarga':
        return <PackageCheck size={24} />;
      default:
        return <Utensils size={24} />;
    }
  };

  const targetUrl = category.id === 'all' 
    ? '/produk' 
    : `/produk?kategori=${category.id}`;

  return (
    <Link to={targetUrl} className="category-card">
      <div className="category-icon">
        {getIcon(category.id)}
      </div>
      <h3 className="category-name">{category.name}</h3>
      <p className="category-desc">{category.description}</p>
    </Link>
  );
};
