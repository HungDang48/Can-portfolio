import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openSocialLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Left side - Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </nav>

          {/* Center - Logo */}
          <div className="logo">
            <h2>Lê Văn Can</h2>
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