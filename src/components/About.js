import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">ABOUT</h2>
        </div>
        <div className="about-content">
          <p className="about-text">
            I'm a product-focused AI and Web3 engineer who builds scalable platforms end-to-end — from idea to launch and growth.
          </p>
          <p className="about-text">
            Over the last few years, I've led development across blockchain ecosystems, SaaS companies, gaming platforms, and automation products. My work spans smart contracts, AI integrations, full-stack platforms, and product architecture.
          </p>
          <p className="about-text about-text-bold">
            I focus on execution — shipping products that solve real problems, not just prototypes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
