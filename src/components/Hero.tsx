import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Xin chào! Tôi là
              <span className="highlight"> Developer</span>
            </h1>
            <p className="hero-subtitle">
              Tôi tạo ra những ứng dụng web hiện đại và đẹp mắt với React, TypeScript và CSS
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Xem Dự Án
              </a>
              <a href="#contact" className="btn btn-secondary">
                Liên Hệ
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Dự Án Hoàn Thành</p>
          </div>
          <div className="stat-item">
            <h3>3+</h3>
            <p>Năm Kinh Nghiệm</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Khách Hàng Hài Lòng</p>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Cuộn xuống</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 