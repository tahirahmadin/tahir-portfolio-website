import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      name: 'EthIndia',
      title: 'Finalist — Flow3 Project',
      year: '2024',
      logo: '/images/achievements/ethindia.png'
    },
    {
      id: 2,
      name: 'EthIstanbul',
      title: 'Winner — Hackathon',
      year: '2023',
      logo: '/images/achievements/ethistanbul.png'
    },
    {
      id: 3,
      name: '1inch',
      title: 'Award — EthIndia Hackathon',
      year: '2023',
      logo: '/images/achievements/1inch.png'
    },
    {
      id: 4,
      name: 'Chainlink',
      title: 'Hackathon Winner',
      year: '2022 & 2023',
      logo: '/images/achievements/chainlink.png'
    },
    {
      id: 5,
      name: 'IMT Ghaziabad',
      title: 'Business Plan Competition',
      year: '',
      logo: '/images/achievements/imt.png'
    }
  ];

  return (
    <section className="achievements-section">
      <div className="achievements-container">
        <div className="achievements-header">
          <div className="star-icon-header">★</div>
          <h2 className="section-title">ACHIEVEMENTS</h2>
        </div>
        <div className="achievements-list">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-item">
              <div className="achievement-logo-wrapper">
                <img 
                  src={achievement.logo} 
                  alt={achievement.name}
                  className="achievement-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="achievement-logo-placeholder" style={{display: 'none'}}>
                  <span className="achievement-placeholder-text">{achievement.name.charAt(0)}</span>
                </div>
              </div>
              <div className="achievement-content">
                <h3 className="achievement-name">{achievement.name}</h3>
                <span className="achievement-separator">•</span>
                <p className="achievement-title">{achievement.title}</p>
                {achievement.year && (
                  <>
                    <span className="achievement-separator">•</span>
                    <span className="achievement-year">{achievement.year}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
