import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>
              Tạo ra những trải nghiệm web tuyệt vời với React, TypeScript và CSS.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Liên kết nhanh</h4>
            <ul className="footer-links">
              <li><a href="#hero">Trang chủ</a></li>
              <li><a href="#about">Về tôi</a></li>
              <li><a href="#projects">Dự án</a></li>
              <li><a href="#contact">Liên hệ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Kết nối</h4>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                🐙
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                💼
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                🐦
              </a>
              <a href="mailto:contact@example.com" title="Email">
                📧
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Portfolio. Được tạo với ❤️ bằng React & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 