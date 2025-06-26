import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openSocialLink = (url: string) => {
    window.open(url, '_blank');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Left side - Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Center - Logo */}
          <div className="logo">
            <Link to="/">
              <h2>Lê Văn Can</h2>
            </Link>
          </div>
          
          {/* Right side - Controls and Social */}
          <div className="header-controls">
            <div className="social-icons">
              <button 
                className="social-icon"
                onClick={() => openSocialLink("https://facebook.com")}
                aria-label="Facebook"
              >
                <img src="/icons/Facebook.png" alt="Facebook" />
              </button>
              <button 
                className="social-icon"
                onClick={() => openSocialLink("https://instagram.com")}
                aria-label="Instagram"
              >
                <img src="/icons/Instagram.png" alt="Instagram" />
              </button>
              <button 
                className="social-icon"
                onClick={() => openSocialLink("https://linkedin.com")}
                aria-label="LinkedIn"
              >
                <img src="/icons/Linkedin.png" alt="LinkedIn" />
              </button>
            </div>
            
            <button 
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button 
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 