import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-icon-wrapper">
            <div className="cta-icon">💬</div>
          </div>
          <div className="cta-text-content">
            <h2 className="cta-heading">
              Let's build something impactful
            </h2>
            <p className="cta-subheading">
              If you're building a startup, product, or platform and need a strong technical partner — I can help you move faster and ship smarter.
            </p>
            <div className="cta-buttons">
              <button className="cta-primary-button">
                Work with me
                <span className="button-arrow">→</span>
              </button>
              <button className="cta-secondary-button">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
