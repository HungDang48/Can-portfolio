import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home page-transition">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Xin chào! Tôi là
                <span className="highlight"> Lê Văn Can</span>
              </h1>
              <p className="hero-subtitle">
                Họa sĩ 2D chuyên nghiệp, tạo ra những tác phẩm nghệ thuật độc đáo và đầy cảm xúc
              </p>
              <div className="hero-buttons">
                <Link to="/gallery" className="btn btn-primary">
                  Xem Tác Phẩm
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Về Tôi
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
          <h2 className="section-title">Tác Phẩm Nổi Bật</h2>
          <div className="works-grid">
            <div className="work-item">
              <div className="work-image">
                <div className="work-placeholder">🎭</div>
              </div>
              <h3>Chân Dung Nghệ Thuật</h3>
              <p>Những bức chân dung thể hiện cảm xúc sâu sắc và tính cách độc đáo</p>
            </div>
            <div className="work-item">
              <div className="work-image">
                <div className="work-placeholder">🌿</div>
              </div>
              <h3>Phong Cảnh Thiên Nhiên</h3>
              <p>Khám phá vẻ đẹp của thiên nhiên qua góc nhìn nghệ thuật</p>
            </div>
            <div className="work-item">
              <div className="work-image">
                <div className="work-placeholder">🏰</div>
              </div>
              <h3>Kiến Trúc Tưởng Tượng</h3>
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
              <p>Tác Phẩm Hoàn Thành</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Năm Kinh Nghiệm</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Khách Hàng Hài Lòng</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Triển Lãm Tham Gia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 