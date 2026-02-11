import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'MVP Development for Startups',
      description: 'Start building intelligent products with AI-powered platforms and automation systems.',
      bgColor: '#FFE082',
      textColor: '#000000',
      height: 'medium',
      gridColumn: 'span 2',
      icon: '🚀'
    },
    {
      id: 2,
      title: 'Blockchain & Web3 Products',
      description: 'Start building decentralized solutions with smart contracts, DeFi platforms, and NFT ecosystems.',
      bgColor: '#C8E6C9',
      textColor: '#000000',
      height: 'short',
      gridColumn: 'span 1',
      icon: '⛓️'
    },
    {
      id: 3,
      title: 'Landing Pages for Businesses',
      description: 'Start building your product from idea to launch-ready with scalable architecture.',
      bgColor: '#BBDEFB',
      textColor: '#000000',
      hasImage: true,
      height: 'medium',
      gridColumn: 'span 1',
      icon: '🌐'
    },
    {
      id: 4,
      title: 'Technical Consulting',
      description: 'Start building better products with expert architecture and engineering leadership.',
      bgColor: '#E1BEE7',
      textColor: '#000000',
      height: 'short',
      gridColumn: 'span 1',
      icon: '💼'
    },
    {
      id: 5,
      title: 'Marketing & Growth',
      description: 'Start building modern applications with complete frontend, backend, and cloud infrastructure.',
      bgColor: '#BBDEFB',
      textColor: '#000000',
      height: 'medium',
      gridColumn: 'span 1',
      icon: '📈'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <div className="star-icon-header">★</div>
          <h2 className="section-title">SERVICES</h2>
          <p className="section-description">
            How I can help you build and scale your product.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card service-card-${service.height}`}
              style={{
                backgroundColor: service.bgColor,
                color: service.textColor,
                gridColumn: service.gridColumn
              }}
            >
              <div className="service-cloud-pattern"></div>
              {service.hasImage && (
                <div className="service-image">
                  <div className="service-person-icon">👤</div>
                </div>
              )}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-icon-bottom">
                <span className="service-icon">{service.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
