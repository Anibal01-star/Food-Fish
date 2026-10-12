import React, { useState } from 'react';
import { WHATSAPP_BUSINESS_NUMBER, isWhatsAppConfigured } from '../config/whatsapp.js';
import { AlertTriangle, CheckCircle2, Settings, ExternalLink } from 'lucide-react';

export const WhatsAppNotice = ({ compact = false }) => {
  const isConfigured = isWhatsAppConfigured();
  const [showGuide, setShowGuide] = useState(false);

  if (isConfigured) {
    if (compact) return null;
    return (
      <div className="notice-box info" style={{ marginBottom: '1.5rem' }}>
        <CheckCircle2 size={20} color="#1877A8" className="notice-icon" />
        <div className="notice-content">
          <div className="notice-title">WhatsApp Bisnis Resmi Terhubung</div>
          <div>Nomor tujuan pemesanan: <strong>+{WHATSAPP_BUSINESS_NUMBER}</strong></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`notice-box warning ${compact ? 'compact' : ''}`} style={{ marginBottom: '1.5rem' }}>
      <AlertTriangle size={20} color="#F28C52" className="notice-icon" />
      <div className="notice-content" style={{ flex: 1 }}>
        <div className="notice-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Konfigurasi WhatsApp Bisnis (Status: Placeholder)</span>
          <button 
            type="button"
            onClick={() => setShowGuide(!showGuide)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-ocean-blue)',
              cursor: 'pointer',
              fontSize: '0.82rem',
              fontWeight: 600,
              textDecoration: 'underline'
            }}
          >
            {showGuide ? 'Sembunyikan Panduan' : 'Lihat Cara Mengatur'}
          </button>
        </div>
        <p style={{ marginTop: '0.25rem', fontSize: '0.88rem' }}>
          Nomor WhatsApp resmi belum diatur (masih <code>{WHATSAPP_BUSINESS_NUMBER}</code>). 
          Pesanan tetap dapat diuji ke WhatsApp web/aplikasi tanpa nomor tujuan otomatis atau Anda dapat mengisi nomor di file konfigurasi.
        </p>

        {showGuide && (
          <div style={{
            marginTop: '0.85rem',
            padding: '0.85rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '6px',
            border: '1px solid #FFE082',
            fontSize: '0.85rem'
          }}>
            <p><strong>Langkah Mengubah Nomor WhatsApp Resmi:</strong></p>
            <ol style={{ marginLeft: '1.25rem', marginTop: '0.4rem', lineHeight: '1.6' }}>
              <li>Buka file <code>src/config/whatsapp.js</code></li>
              <li>Ubah baris <code>export const WHATSAPP_BUSINESS_NUMBER = "628xxxxxxxxxx";</code> dengan nomor resmi Anda.</li>
              <li>Simpan file, dan seluruh tombol WhatsApp akan langsung mengarah ke nomor bisnis Anda secara otomatis!</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};
