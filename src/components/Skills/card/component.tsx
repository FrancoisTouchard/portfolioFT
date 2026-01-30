import React from 'react';

import './SkillCard.css';
import { SkillsCardProps } from './types';

const SkillCard = ({ title, logo, tags }: SkillsCardProps) => {
  return (
    <div className="skills-card">
      <img className='skills-card-logo' src={logo.src} alt={logo.alt} />
      <h3 className="skills-cardTitle">{title}</h3>

      <div className="skills-tags-container">
        {tags.map((tag, index) => (
          <span key={index} className="skills-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>

  );
};

export default SkillCard;
