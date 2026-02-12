import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    
    {
      id: 1,
      name: 'Barkat App',
      description: 'A Matrimony platform for educated muslims. Find your soulmate with ease from colleges, profession and location.',
      tag: 'Mobile App',
      icon: '🤖',
      visualText: 'AI-powered content creation platform.',
      highlight: 'AI',
      stats: '10K+ users',
      url: 'https://barkatapp.com',
      headerImage: 'https://play-lh.googleusercontent.com/WsgMd4mGkmWU5fW7BTJuoBGEB257eGLDaJDM46YRuEi5MurF-NMsud14_cVoMi8ru8So7U5bNITG6v6ptVb_xQ=w1052-h592-rw',
      logoImage: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a2/40/d1/a240d18c-48e6-b15c-0670-ecef69035350/Placeholder.mill/400x400bb-75.webp'
    },
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
      logoImage: 'https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fbecdb269b9ea4e708c7d96329563e478%2Fprojects%2F20d2f90eecc7412a85ad1b3a9a19fb41%2Fe250227c-8d11-44d0-8259-1fcd190542bd.jpeg&w=1440&q=75'
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
      url: 'https://www.facebook.com/amunotes/',
      headerImage: 'https://scontent.fdel1-8.fna.fbcdn.net/v/t39.30808-6/480438051_1072930138182388_7045927521649231929_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ofqmo-NOH2UQ7kNvwEmerWx&_nc_oc=AdkN6Za0pwDgDfMObetGzHNSvDfpF-W3UM9uf0yAH_a-0VBpJxMowve9bHH2yjTWIb3dPxj1KqVmtTBaVIxJToNy&_nc_zt=23&_nc_ht=scontent.fdel1-8.fna&_nc_gid=KF4_GuwgOvJYgulKz_MkDw&oh=00_AfvyhWiHz6DtS-fh8iMNFJLRM6Xft3r8vUiXkwI3KbQWEA&oe=69934FB0',
      logoImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cVseWSfvcIqa37nuc4hn9FbI2vpyNmJ4VQ&s'
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
      url: 'https://www.facebook.com/thelastcampus/photos',
      headerImage: "https://scontent.fdel1-5.fna.fbcdn.net/v/t1.6435-9/54346134_846265069050853_3964890529497350144_n.png?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=azF_Q3bqR_4Q7kNvwE14LMg&_nc_oc=AdnwqLAMqErRiYM5EX6TNYRncmg7P57v-q1XdJ1IaRW023flIIEGLxoQg-b4aI_-Ghz7FObGvrJaRD6Ngqv_fvv6&_nc_zt=23&_nc_ht=scontent.fdel1-5.fna&_nc_gid=zjjZZdJE7u5CnsdIYsAc5A&oh=00_AfuFTY9Q3_MH7iCcfItXJC8qSYogMCFlekr2Z3_agQ0CdA&oe=69B4DB1C",
      logoImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7152p4YqE8I4I0z5QcOExQYLapFBpQMBBAw&s'
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
              <a 
                key={project.id} 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-card"
              >
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
                <div className="card-logo-overlap">
                  {hasLogoImage ? (
                    <img 
                      src={project.logoImage}
                      alt={`${project.name} Logo`}
                      className="card-logo-image"
                      onError={() => handleImageError(project.id, 'logo')}
                    />
                  ) : (
                    <div className="card-icon-placeholder">
                      {project.icon}
                    </div>
                  )}
                </div>
                <div className="card-content">
                  <div className="card-info">
                    <div className="card-title-row">
                      <h3 className="card-title">{project.name}</h3>
                      <span className="card-tag">{project.tag}</span>
                    </div>
                    <p className="card-description">{project.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
