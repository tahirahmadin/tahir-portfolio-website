import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-decorations">
        <div className="diagonal-line top-left"></div>
        <div className="diagonal-line top-right"></div>
        <div className="gradient-blob"></div>
      </div>
      <div className="header-content">
        <div className="header-left">
          <img 
            src="/images/experience/swipeup.jpg" 
            alt="Tahir Ahmad" 
            className="logo-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'inline';
            }}
          />
          <span className="logo" style={{display: 'none'}}>Tahir Ahmad</span>
        </div>
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div 
          className={`menu-backdrop ${isMenuOpen ? 'open' : ''}`}
          onClick={closeMenu}
        ></div>
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#projects" className="nav-link" onClick={closeMenu}>
            <div className="nav-link-content">
              <span className="nav-main">My Projects <span className="arrow">→</span></span>
              <span className="nav-subheading">See all of nice project I have done.</span>
            </div>
          </a>
          <a href="#about" className="nav-link" onClick={closeMenu}>
            <div className="nav-link-content">
              <span className="nav-main">About Me <span className="arrow">→</span></span>
              <span className="nav-subheading">Learn about my self what i do.</span>
            </div>
          </a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            <div className="nav-link-content">
              <span className="nav-main">Contact me <span className="arrow">→</span></span>
              <span className="nav-subheading">tahirahmad.in@gmail.com</span>
            </div>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
