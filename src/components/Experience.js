import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Sayy AI',
      subtitle: 'Tech Lead',
      description: 'Sayy AI allows you to build scalable AI-powered platforms for creators and businesses.',
      tag: 'AI Platform',
      icon: '🤖',
      visualText: 'AI-powered SaaS platform.',
      highlight: 'AI',
      stats: '50K+ users',
      url: 'https://sayyai.com'
    },
    {
      id: 2,
      title: 'Gobbl',
      subtitle: 'Blockchain Lead',
      description: 'Gobbl enables Web3 gaming ecosystems with scalable blockchain infrastructure.',
      tag: 'Web3',
      icon: '⛓️',
      visualText: 'Web3 gaming platform.',
      highlight: 'Web3',
      stats: '30K+ players',
      url: 'https://gobbl.com'
    },
    {
      id: 3,
      title: 'OneRare',
      subtitle: 'Blockchain Lead',
      description: 'OneRare provides NFT gaming ecosystems and Web3 infrastructure for digital ownership.',
      tag: 'Web3',
      icon: '🎮',
      visualText: 'NFT gaming ecosystem.',
      highlight: 'NFT',
      stats: '25K+ users',
      url: 'https://onerare.io'
    },
    {
      id: 4,
      title: 'PolkaBridge',
      subtitle: 'Blockchain Lead',
      description: 'PolkaBridge provides DeFi infrastructure and multi-chain solutions for Web3.',
      tag: 'DeFi',
      icon: '🔗',
      visualText: 'Multi-chain DeFi platform.',
      highlight: 'DeFi',
      stats: '100K+ users',
      url: 'https://polkabridge.org'
    },
    {
      id: 5,
      title: 'PolkaWar',
      subtitle: 'Blockchain Lead',
      description: 'PolkaWar delivers NFT gaming and blockchain infrastructure for Web3 ecosystems.',
      tag: 'Gaming',
      icon: '⚔️',
      visualText: 'NFT gaming platform.',
      highlight: 'gaming',
      stats: '40K+ players',
      url: 'https://polkawar.com'
    },
    {
      id: 6,
      title: 'Rizer',
      subtitle: 'Frontend Lead',
      description: 'Rizer helps coaching institutes manage and scale their operations efficiently.',
      tag: 'SaaS',
      icon: '📊',
      visualText: 'Coaching platform SaaS.',
      highlight: 'SaaS',
      stats: '5K+ institutes',
      url: 'https://rizer.com'
    },
    {
      id: 7,
      title: 'DISQ',
      subtitle: 'Product Engineer',
      description: 'DISQ delivers financial growth solutions for street vendors and small businesses.',
      tag: 'FinTech',
      icon: '💳',
      visualText: 'Financial growth platform.',
      highlight: 'financial',
      stats: '10K+ vendors',
      url: 'https://disq.com'
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="experience-header">
          <div className="star-icon-header">★</div>
          <h2 className="section-title">EXPERIENCE</h2>
          <p className="section-description">
            Companies and teams I've worked with to build impactful products.
          </p>
        </div>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="card-header">
                <div className="card-visual-elements">
                  <div className="visual-cube large"></div>
                  <div className="visual-cube small"></div>
                </div>
                <div className="card-visual-text">
                  {exp.visualText.split(' ').map((word, idx) => (
                    word.toLowerCase() === exp.highlight.toLowerCase() ? (
                      <span key={idx} className="highlighted-text">{word} </span>
                    ) : (
                      <span key={idx}>{word} </span>
                    )
                  ))}
                </div>
                <button className="card-menu-btn">⋯</button>
              </div>
              <div className="card-content">
                <div className="card-icon">{exp.icon}</div>
                <div className="card-info">
                  <div className="card-title-row">
                    <h3 className="card-title">{exp.title}</h3>
                    <span className="card-tag">{exp.tag}</span>
                  </div>
                  <p className="card-description">{exp.description}</p>
                </div>
              </div>
              <div className="card-footer">
                <a href={exp.url} target="_blank" rel="noopener noreferrer" className="card-button">
                  View Company
                </a>
                <div className="card-stats">
                  <span className="stats-icon">☁</span>
                  <span className="stats-text">{exp.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
