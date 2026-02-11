import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <div className="wave-emoji">👋</div>
            <h1 className="hero-heading">
              <span className="heading-light">Hello! I'm</span>{' '}
              <span className="heading-bold">Tahir Ahmad</span>
            </h1>
            <div className="hero-subtitle-wrapper">
              <div className="subtitle-line"></div>
              <span className="hero-subtitle">Product Engineer</span>
              <span className="subtitle-star">★</span>
            </div>
            <p className="hero-description">
              Hello! I'm Tahir Ahmad. I'm a Product Engineer, Builder and Growth Marketer.Here I help businesses to grow and scale their businesses with AI.
            </p>
            <ul className="hero-features">
              <li>
                <span className="checkmark">✓</span>
                Build MVP for your startup
              </li>
              <li>
                <span className="checkmark">✓</span>
               Top class designs
              </li>
              <li>
                <span className="checkmark">✓</span>
             Helps in generating revenue
              </li>
            </ul>
            <div className="hero-buttons">
              <button className="btn-primary">Let's Talk</button>
              <button className="btn-secondary">Download Cv <span className="download-arrow">↓</span></button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img 
              src="/images/hero-image.png" 
              alt="Tahir Ahmad"
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="image-placeholder" style={{display: 'none'}}>
              <div className="person-icon">👤</div>
            </div>
            <div className="hello-badge">Hello</div>
            
            {/* Creative illustration system */}
            <svg className="illustration-connectors" viewBox="0 0 500 800" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#764ba2" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Curved connecting lines */}
              <path d="M 50 150 Q 100 200, 150 250" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="connector-line line-1"/>
              <path d="M 450 200 Q 400 250, 350 300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="connector-line line-2"/>
              <path d="M 80 500 Q 120 550, 160 600" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="connector-line line-3"/>
              <path d="M 420 450 Q 380 500, 340 550" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="connector-line line-4"/>
            </svg>
            
            {/* Creative themed elements with connecting dots */}
            <div className="illustration-element ai-element">
              <div className="element-connector-dot"></div>
              <div className="creative-badge ai-badge">
                <span className="badge-icon">🤖</span>
                <span className="badge-text">AI</span>
              </div>
            </div>
            
            <div className="illustration-element product-element">
              <div className="element-connector-dot"></div>
              <div className="creative-badge product-badge">
                <span className="badge-icon">📦</span>
                <span className="badge-text">Product</span>
              </div>
            </div>
            
            <div className="illustration-element startup-element">
              <div className="element-connector-dot"></div>
              <div className="creative-badge startup-badge">
                <span className="badge-icon">🚀</span>
                <span className="badge-text">Startup</span>
              </div>
            </div>
            
            <div className="illustration-element money-element">
              <div className="element-connector-dot"></div>
              <div className="creative-badge money-badge">
                <span className="badge-icon">💰</span>
                <span className="badge-text">Revenue</span>
              </div>
            </div>
            
            <div className="illustration-element code-element">
              <div className="element-connector-dot"></div>
              <div className="creative-badge code-badge">
                <span className="badge-icon">💻</span>
                <span className="badge-text">Code</span>
              </div>
            </div>
            
            {/* Floating abstract shapes */}
            <div className="abstract-shape shape-1"></div>
            <div className="abstract-shape shape-2"></div>
            <div className="abstract-shape shape-3"></div>
            
            {/* Particle dots */}
            <div className="particle-dot particle-1"></div>
            <div className="particle-dot particle-2"></div>
            <div className="particle-dot particle-3"></div>
            <div className="particle-dot particle-4"></div>
            <div className="particle-dot particle-5"></div>
          </div>
        </div>
      </div>
      <div className="hero-bottom-banner">
        <div className="banner-nav-item">Product Building</div>
        <span className="banner-separator">★</span>
        <div className="banner-nav-item">Landing Pages</div>
        <span className="banner-separator">★</span>
        <div className="banner-nav-item">Blockchain & AI</div>
        <span className="banner-separator">★</span>
        <div className="banner-nav-item">Apps</div>
        <div className="banner-nav-item">Marketing & Growth</div>
       
      </div>
    </section>
  );
};

export default Hero;
