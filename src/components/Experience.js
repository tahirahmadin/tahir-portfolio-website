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
      logoIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16TDruLT2ogDn6xJrEmaJLPN8ZvO9CAyqGg&s',
      visualText: 'AI-powered SaaS platform.',
      highlight: 'AI',
      stats: '50K+ users',
      url: 'https://sayyai.com',
      headerImage: 'https://sayyaibucket.s3.ap-south-1.amazonaws.com/frontend/Product-meta-preview.png'
    },
    {
      id: 2,
      title: 'Gobbl',
      subtitle: 'Blockchain Lead',
      description: 'Gobbl enables Web3 gaming ecosystems with scalable blockchain infrastructure.',
      tag: 'Telegram Mini App',
      icon: '⛓️',
      visualText: 'Web3 gaming platform.',
      highlight: 'Web3',
      stats: '30K+ players',
      url: 'https://gobbl.com',
      headerImage: 'https://i.ytimg.com/vi/yTVf3LkL-kw/maxresdefault.jpg',
      logoIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBqEdDQ5v7QfHVj7kWijrldfAe0ShmyEPMg&s',

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
      url: 'https://onerare.io',
      logoIcon: 'https://media.licdn.com/dms/image/v2/D4D0BAQHY3o_yxhFaPA/company-logo_200_200/B4DZkGoykMIgAI-/0/1756752980855/gobbl_logo?e=2147483647&v=beta&t=SqmMPqoVAbADadAgZyHEVtfyR7RyzlzzWVofQtkcqR4',
      headerImage: 'https://1499377728-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MkXfxALyD8sO44Y1OrY%2Fuploads%2FQvX3Uc0Ek5QPRRZIUMK2%2FUntitled%20design%20(3).gif?alt=media&token=eb3bd406-f66b-4738-9428-3dd8d8ed97fe',
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
      stats: '150M+ Market Cap',
      url: 'https://polkabridge.org',
      logoIcon: 'https://miro.medium.com/v2/resize:fit:2400/1*WafcY5M8FNmO68JkzJft9w.png',
      headerImage: 'https://miro.medium.com/v2/resize:fit:1400/0*f1FuHv1LfM7fnRrj',
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
      url: 'https://polkawar.com',
      logoIcon: 'https://img.bgstatic.com/multiLang/coinPriceLogo/1x1/polkawar.jpg',
      headerImage: 'https://coinkritik.com/wp-content/uploads/2021/08/polkawar1.jpg',
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
                {exp.headerImage ? (
                  <img 
                    src={exp.headerImage} 
                    alt={exp.title}
                    className="card-header-image"
                  />
                ) : (
                  <>
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
                  </>
                )}
                <button className="card-menu-btn">⋯</button>
              </div>
              <div className="card-logo-overlap">
                {exp.logoIcon ? (
                  <img 
                    src={exp.logoIcon} 
                    alt={exp.title}
                    className="card-logo-image"
                  />
                ) : (
                  <div className="card-icon-placeholder">
                    {exp.icon}
                  </div>
                )}
              </div>
              <div className="card-content">
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
