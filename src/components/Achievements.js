import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      name: 'Winner EthIndia Hackathon - 2024',
      title: 'Flow3 - Developed an automated workflow building for Web3',
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQHvuGFkI0KxSg/company-logo_200_200/company-logo_200_200/0/1630567157751/ethindia_logo?e=2147483647&v=beta&t=JaqWwyZsQNJ2SNwGlQP4T0-Rja8tzEPdFsLjH7PrpdA',
      fallbackLogo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/ethereum.svg',
      url: 'https://ethindia.org'
    },
    {
      id: 2,
      name: 'Won at EthIstanbul Hackathon - 2023',
      title: 'Won Prizes at EthIstanbul Hackathon - 2023',
      logo: 'https://ethglobal.storage/events/istanbul/logo/default',
      fallbackLogo: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/ethereum.svg',
      url: 'https://ethglobal.co'
    },
    {
      id: 3,
      name: '1st Prize from 1Inch',
      title: '1st Prize from 1Inch — EthIndia Hackathon - 2023',
      logo: '/images/achievements/1inch.png',
      fallbackLogo: 'https://cryptologos.cc/logos/1inch-1inch-logo.png',
      url: 'https://1inch.io'
    },
    {
      id: 4,
      name: 'Chainlink Hackathon - 2023',
      title: 'Top 10 Finalist at Chainlink Spring Hackathon - 2023',
      logo: '/images/achievements/chainlink.png',
      fallbackLogo: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
      url: 'https://chain.link'
    },
    {
      id: 5,
      name: 'Runner Up at IMT Ghaziabad - 2021',
      title: 'Presented EDOCTO and won 30,000 INR for the project',
      logo: 'https://yt3.googleusercontent.com/ytc/AIdro_mh6trGyVeuR7JfigFwQHe6xnEho1tt9U0OTYxPmlUVqg=s900-c-k-c0x00ffffff-no-rj',
      url: 'https://imt.edu'
    }
  ];

  return (
    <section className="achievements-section">
      <div className="achievements-container">
        <div className="achievements-header">
          <h2 className="section-title">ACHIEVEMENTS</h2>
        </div>
        <div className="achievements-list">
          {achievements.map((achievement) => (
            <a 
              key={achievement.id} 
              href={achievement.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="achievement-item"
            >
              <div className="achievement-logo-wrapper">
                <img 
                  src={achievement.logo} 
                  alt={achievement.name}
                  className="achievement-logo"
                  onError={(e) => {
                    // Try fallback logo if available
                    if (achievement.fallbackLogo && e.target.src !== achievement.fallbackLogo) {
                      e.target.src = achievement.fallbackLogo;
                    } else {
                      // Show placeholder if both fail
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="achievement-logo-placeholder" style={{display: 'none'}}>
                  <span className="achievement-placeholder-text">{achievement.name.charAt(0)}</span>
                </div>
              </div>
              <div className="achievement-content">
                <h3 className="achievement-name">{achievement.name}</h3>
                <p className="achievement-title">{achievement.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
