import React from 'react';
import { Link } from "react-router-dom";

import './SkillCard.css';
import { SkillsCardProps } from './types';

const SkillCard = ({ title, logo, slug, tags }: SkillsCardProps) => {
  return (
    <Link className="skills-card" to={`/skills/${slug}`}>
      <img className='skills-card-logo' src={logo.src} alt={logo.alt} />
      <h3 className="skills-cardTitle">{title}</h3>

      <div className="skills-tags-container">
        {tags.map((tag, index) => (
          <span key={index} className="skills-tag">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default SkillCard;
