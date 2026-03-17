import React from 'react';
import { Link } from "react-router-dom";

import './SkillCard.css';
import { SkillsCardProps } from './types';

const SkillCard = ({ title, logo, slug }: SkillsCardProps) => {
  return (
    <Link className="skills-card" to={`/skills/${slug}`}>
      <img className='skills-card-logo' src={logo.src} alt={logo.alt} />
      <h3 className="skills-card-title">{title}</h3>
    </Link>
  );
};

export default SkillCard;
