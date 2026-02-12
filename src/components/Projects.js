import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'SwipeUpNews',
      description: 'SwipeUpNews allows you to consume news content through fast, swipe-based interactions.',
      tag: 'Mobile App',
      icon: '📱',
      visualText: 'Fast news consumption platform.',
      highlight: 'news',
      stats: '10K+ downloads',
      url: 'https://www.facebook.com/swipeupnews/',
      headerImage: '/images/projects/swipeup-header.jpg',
      logoImage: '/images/projects/swipeup-logo.jpeg'
    },
    {
      id: 2,
      name: 'SleepSwap',
      description: 'Trade with technical indicators while you sleep.',
      tag: 'Web3',
      icon: '🌙',
      visualText: 'Web3 NFT-driven platform.',
      highlight: 'NFT',
      stats: '5K+ users',
      url: 'https://devpost.com/software/smart-strategy-trading-app-fix-dex',
      headerImage: '/images/projects/sleepswap-header.png',
      logoImage: 'https://cdn3d.iconscout.com/3d/premium/thumb/spiral-shape-3d-icon-png-download-7374499.png'
    },
    {
      id: 3,
      name: 'FirstCrypto',
      description: 'FirstCrypto simplifies blockchain education and crypto onboarding for beginners.',
      tag: 'Education',
      icon: '₿',
      visualText: 'Crypto onboarding simplified.',
      highlight: 'crypto',
      stats: '15K+ learners',
      url: 'https://firstcrypto.com',
      headerImage: 'https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/becdb269b9ea4e708c7d96329563e478/projects/20d2f90eecc7412a85ad1b3a9a19fb41/3855aa65-226c-4c53-a356-494124dda9ec.png',
      logoImage: null
    },
    {
      id: 4,
      name: 'AMUNotes',
      description: 'AMUNotes enables academic resource sharing and collaboration for students.',
      tag: 'SaaS',
      icon: '📚',
      visualText: 'Student learning platform.',
      highlight: 'learning',
      stats: '8K+ students',
      url: 'https://amunotes.com',
      headerImage: null,
      logoImage: null
    },
    {
      id: 5,
      name: 'LastCampus',
      description: 'LastCampus enables educational social networking and resource sharing for students.',
      tag: 'Education',
      icon: '🎓',
      visualText: 'Educational social network.',
      highlight: 'social',
      stats: '20K+ students',
      url: 'https://lastcampus.com',
      headerImage: null,
      logoImage: null
    }
  ];

  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (projectId, imageType) => {
    setImageErrors(prev => ({
      ...prev,
      [`${projectId}-${imageType}`]: true
    }));
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="star-icon-header">★</div>
          <h2 className="section-title">PROJECTS</h2>
          <p className="section-description">
            A selection of products I've built and shipped.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => {
            const hasHeaderImage = project.headerImage && !imageErrors[`${project.id}-header`];
            const hasLogoImage = project.logoImage && !imageErrors[`${project.id}-logo`];
            
            return (
              <div key={project.id} className="project-card">
                <div className="card-header">
                  {hasHeaderImage ? (
                    <img 
                      src={project.headerImage}
                      alt={project.name}
                      className="card-header-image"
                      onError={() => handleImageError(project.id, 'header')}
                    />
                  ) : (
                    <>
                      <div className="card-visual-elements">
                        <div className="visual-cube large"></div>
                        <div className="visual-cube small"></div>
                      </div>
                      <div className="card-visual-text">
                        {project.visualText.split(' ').map((word, idx) => (
                          word.toLowerCase() === project.highlight.toLowerCase() ? (
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
                <div className="card-content">
                  {hasLogoImage ? (
                    <img 
                      src={project.logoImage}
                      alt={`${project.name} Logo`}
                      className="card-icon-image"
                      onError={() => handleImageError(project.id, 'logo')}
                    />
                  ) : (
                    <div className="card-icon">{project.icon}</div>
                  )}
                  <div className="card-info">
                    <div className="card-title-row">
                      <h3 className="card-title">{project.name}</h3>
                      <span className="card-tag">{project.tag}</span>
                    </div>
                    <p className="card-description">{project.description}</p>
                  </div>
                </div>
                <div className="card-footer">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="card-button">
                    View Project
                  </a>
                  <div className="card-stats">
                    <span className="stats-icon">☁</span>
                    <span className="stats-text">{project.stats}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
