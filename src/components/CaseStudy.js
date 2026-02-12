import React from 'react';
import './CaseStudy.css';

const CaseStudy = () => {
  const caseStudies = [
    {
      id: 1,
      tag: 'WEB DESIGN',
      title: 'Web Design for fintech payment solutions.',
      link: 'See Details ↗',
      images: ['💻', '💻']
    },
    {
      id: 2,
      tag: '',
      title: 'How to run a successful business with your partner (and stay together)',
      link: '',
      images: ['👥']
    },
    {
      id: 3,
      tag: '',
      title: 'Digital Agency website startups business.',
      link: '',
      images: []
    }
  ];

  return (
    <section className="casestudy-section" id="projects">
      <div className="casestudy-container">
        <div className="casestudy-header">
          <h2 className="section-title">CASE STUDY</h2>
          <p className="section-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="casestudy-grid">
          {caseStudies.map((study) => (
            <div key={study.id} className="casestudy-item">
              {study.tag && (
                <span className="casestudy-tag">{study.tag}</span>
              )}
              <h3 className="casestudy-title">{study.title}</h3>
              {study.link && (
                <a href="#details" className="casestudy-link">{study.link}</a>
              )}
              {study.images.length > 0 && (
                <div className="casestudy-images">
                  {study.images.map((img, idx) => (
                    <div key={idx} className="casestudy-image-placeholder">
                      {img}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
