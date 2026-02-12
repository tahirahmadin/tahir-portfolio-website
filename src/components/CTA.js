import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text-content">
            <h2 className="cta-heading">
              Let's build something impactful
            </h2>
            <p className="cta-subheading">
              If you're building a startup, product, or platform and need a strong technical partner — I can help you move faster and ship smarter.
            </p>
          </div>
          <div className="cta-buttons">
            <a 
              href="https://www.linkedin.com/in/tahirahmadin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-primary-button"
            >
              Work with me
              <span className="button-arrow">→</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/tahirahmadin/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-secondary-button"
            >
              Book a call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
