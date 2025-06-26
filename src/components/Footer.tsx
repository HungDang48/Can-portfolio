import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Lê Văn Can</h3>
            <p>
              Họa sĩ 2D chuyên nghiệp, tạo ra những tác phẩm nghệ thuật độc đáo và đầy cảm xúc.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Liên kết nhanh</h4>
            <ul className="footer-links">
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/about">Về tôi</Link></li>
              <li><Link to="/gallery">Tác phẩm</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Kết nối</h4>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                📘
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                📷
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                💼
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" title="Behance">
                🎨
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Lê Văn Can - Artist Portfolio. Được tạo với ❤️ bằng React & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 