import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Fish, 
  ShieldCheck, 
  Heart, 
  MapPin, 
  Clock, 
  Sparkles, 
  Award, 
  Users, 
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../config/whatsapp.js';

export const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <span className="section-tag">Mengenal FoodFish</span>
          <h1 className="page-title">Cerita & Komitmen Kualitas Kami</h1>
          <p className="page-subtitle">
            Hadir di Malang Raya untuk memudahkan keluarga menikmati sajian ikan berbumbu rempah lezat, sehat, dan praktis tanpa repot.
          </p>
        </div>
      </div>

      {/* Story & Philosophy Section */}
      <section className="section section-white">
        <div className="section-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="section-tag">Konsep Bisnis</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '1.25rem', lineHeight: '1.25' }}>
                Menghadirkan Kemudahan Masak Ikan Segar di Meja Makan Keluarga
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Banyak orang menyukai kelezatan ikan segar, namun sering kali urung memasaknya karena proses pembersihan yang amis, repot mencabut duri, hingga sulitnya meracik bumbu rempah yang pas.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                <strong>FoodFish</strong> hadir menjawab kebutuhan tersebut. Kami memadukan ikan air tawar dan laut segar pilihan dengan formulasi bumbu rempah tradisional nusantara. Seluruh produk kami dibersihkan higienis, dibumbui hingga meresap sempurna, dan dikemas kedap udara (vacuum pack) sehingga siap langsung dimasak dalam waktu 10 menit.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-deep-navy)', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="var(--color-ocean-blue)" />
                  <span>Ikan Segar Pilihan</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-deep-navy)', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="var(--color-ocean-blue)" />
                  <span>Rempah Alami Tradisional</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-deep-navy)', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="var(--color-ocean-blue)" />
                  <span>Tanpa Pengawet Sintetis</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-deep-navy)', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="var(--color-ocean-blue)" />
                  <span>Kemasan Vacuum Higienis</span>
                </div>
              </div>
            </div>

            <div>
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border)'
              }}>
                <img
                  src="/images/dapur-persiapan.png"
                  alt="Dapur persiapan ikan marinasi rempah FoodFish"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="section section-cream">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Nilai & Standar</span>
            <h2 className="section-title">4 Pilar Standar Kualitas FoodFish</h2>
            <p className="section-desc">
              Setiap kemasan produk ikan marinasi kami melewati seleksi ketat demi kepuasan rasa santapan keluarga Anda.
            </p>
          </div>

          <div className="grid-4">
            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <Fish size={24} />
              </div>
              <h3 className="benefit-title">Kesegaran Terjamin</h3>
              <p className="benefit-desc">
                Hanya menggunakan ikan air tawar dan laut segar tanpa pengawet berbahaya, menjaga tekstur daging tetap kenyal dan gurih alami.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <Sparkles size={24} />
              </div>
              <h3 className="benefit-title">Racikan Rempah Otentik</h3>
              <p className="benefit-desc">
                Kombinasi kunyit segar, ketumbar sangrai, bawang lokal, dan serai wangi yang dihaluskan merata hingga bumbu meresap ke dalam daging.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <ShieldCheck size={24} />
              </div>
              <h3 className="benefit-title">Standar Kebersihan Tinggi</h3>
              <p className="benefit-desc">
                Proses pembersihan sisik, kotoran perut, dan insang dilakukan secara steril dengan air mengalir sebelum masuk tahap perendaman bumbu.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon-wrap">
                <Clock size={24} />
              </div>
              <h3 className="benefit-title">Hemat Waktu & Praktis</h3>
              <p className="benefit-desc">
                Cukup buka plastik kemasan dan letakkan di wajan atau panggangan. Masakan lezat tersaji dalam 10 menit tanpa perlu mencuci banyak perabot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Area in Malang Raya */}
      <section className="section section-white">
        <div className="section-container">
          <div style={{
            backgroundColor: 'var(--color-deep-navy)',
            borderRadius: 'var(--radius-xl)',
            padding: '3.5rem 3rem',
            color: '#FFFFFF',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-ocean-blue)',
                color: '#FFFFFF',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '0.3rem 0.8rem',
                borderRadius: '999px',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                Wilayah Layanan
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: '1.25' }}>
                Melayani Pengiriman Cepat Seluruh Malang Raya
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#D3E4F0', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                Kami siap mengantarkan stok lauk ikan marinasi beku higienis ke rumah Anda di wilayah:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-fresh-mint)' }}>Kota Malang</div>
                  <div style={{ fontSize: '0.8rem', color: '#B5C6D4', marginTop: '0.2rem' }}>Seluruh Kecamatan</div>
                </div>

                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-fresh-mint)' }}>Kab. Malang</div>
                  <div style={{ fontSize: '0.8rem', color: '#B5C6D4', marginTop: '0.2rem' }}>Radius Terjangkau</div>
                </div>

                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-fresh-mint)' }}>Kota Batu</div>
                  <div style={{ fontSize: '0.8rem', color: '#B5C6D4', marginTop: '0.2rem' }}>Area Perkotaan</div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                <MapPin size={42} color="var(--color-coral-orange)" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  Siap Memesan Hari Ini?
                </h4>
                <p style={{ color: '#B5C6D4', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                  Pesan langsung melalui website ini dan konfirmasikan pesanan Anda lewat WhatsApp seller.
                </p>
                <Link to="/produk" className="btn btn-coral" style={{ width: '100%' }}>
                  <span>Pilih Menu Sekarang</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulation Content Disclaimer */}
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto 4rem', padding: '0 1.5rem' }}>
        <div className="notice-box info">
          <AlertCircle size={20} color="#1877A8" className="notice-icon" />
          <div className="notice-content">
            <div className="notice-title">Keterangan Informasi Placeholder</div>
            <p style={{ margin: 0, fontSize: '0.88rem' }}>
              Informasi profil, riwayat usaha, dan area layanan di halaman ini merupakan materi contoh untuk demonstrasi fungsionalitas website FoodFish. Detail sertifikasi dan izin usaha resmi akan diperbarui sesuai data legalitas pemilik bisnis saat rilis komersial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
