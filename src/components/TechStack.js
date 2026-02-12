import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const techCategories = [
    {
      category: 'AI',
      techs: ['OpenAI', 'Automation workflows']
    },
    {
      category: 'Blockchain',
      techs: ['Solidity', 'Web3JS', 'EthersJS', 'Moralis', 'Alchemy']
    },
    {
      category: 'Frontend',
      techs: ['React', 'Next.js', 'Vite']
    },
    {
      category: 'Backend',
      techs: ['Node.js', 'Express']
    },
    {
      category: 'Mobile',
      techs: ['React Native', 'Flutter']
    },
    {
      category: 'Databases',
      techs: ['MongoDB', 'MySQL']
    },
    {
      category: 'Cloud',
      techs: ['AWS', 'Vercel', 'Google Cloud']
    }
  ];

  return (
    <section className="techstack-section">
      <div className="techstack-container">
        <div className="techstack-header">
          <h2 className="section-title">TECH STACK</h2>
        </div>
        <div className="techstack-grid">
          {techCategories.map((category, idx) => (
            <div key={idx} className="tech-category">
              <h3 className="tech-category-name">{category.category}</h3>
              <div className="tech-items">
                {category.techs.map((tech, techIdx) => (
                  <span key={techIdx} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
