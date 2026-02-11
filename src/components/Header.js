import React from 'react';
import './Header.css';

const Header = () => {
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
        <nav className="header-nav">
          <a href="#projects" className="nav-link">
            <div className="nav-link-content">
              <span className="nav-main">My Projects <span className="arrow">→</span></span>
              <span className="nav-subheading">See all of nice project I have done.</span>
            </div>
          </a>
          <a href="#about" className="nav-link">
            <div className="nav-link-content">
              <span className="nav-main">About Me <span className="arrow">→</span></span>
              <span className="nav-subheading">Learn about my self what i do.</span>
            </div>
          </a>
          <a href="#contact" className="nav-link">
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
