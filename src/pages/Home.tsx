import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="home page-transition">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                {t('home.greeting')}
                <span className="highlight"> {t('home.name')}</span>
              </h1>
              <p className="hero-subtitle">
                {t('home.subtitle')}
              </p>
              <div className="hero-buttons">
                <Link to="/gallery" className="btn btn-primary">
                  {t('home.see_works')}
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  {t('home.about_me')}
                </Link>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="hero-avatar">
                <div className="avatar-placeholder">
                  <span>🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="featured-works">
        <div className="container">
          <h2 className="section-title">{t('home.featured')}</h2>
          <div className="works-grid">
            <div className="work-item">
              <div className="work-image">
                <div className="work-placeholder">🎭</div>
              </div>
              <h3>{t('gallery.portrait')}</h3>
              <p>Những bức chân dung thể hiện cảm xúc sâu sắc và tính cách độc đáo</p>
            </div>
            <div className="work-item">
              <div className="work-image">
                <div className="work-placeholder">🌿</div>
              </div>
              <h3>{t('gallery.landscape')}</h3>
              <p>Khám phá vẻ đẹp của thiên nhiên qua góc nhìn nghệ thuật</p>
            </div>
            <div className="work-item">
              <div className="work-image">
                <div className="work-placeholder">🏰</div>
              </div>
              <h3>{t('gallery.concept')}</h3>
              <p>Những công trình kiến trúc từ trí tưởng tượng phong phú</p>
            </div>
          </div>
        </div>
      </section>

      <section className="artist-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>100+</h3>
              <p>{t('home.stats.works')}</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>{t('home.stats.years')}</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>{t('home.stats.clients')}</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>{t('home.stats.exhibitions')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 