import './Skills.css';

import React from 'react';

import { SKILLS } from '../skills.data';
import SkillCard from './card/component';
import SkillsRadarCharts from './charts/component';

const Skills = () => {
  const hard_skills = SKILLS.filter(s => s.category === 'HARD');
  const soft_skills = SKILLS.filter(s => s.category === 'SOFT');

  return (
    <div className="skills-page-container">
      <h1 className="skills-page-title">Mes compétences</h1>
      <h2 className="skills-subtitle">Techniques</h2>
      <div className="skills-cards-container">
        {hard_skills.map(skill => {
          return (
            <SkillCard
              key={skill.title}
              title={skill.title}
              logo={skill.logo}
              slug={skill.slug}
            />
          );
        })}
      </div>
      <h2 className="skills-subtitle">Humaines</h2>
      <div className="skills-cards-container">
        {soft_skills.map(skill => {
          return (
            <SkillCard
              key={skill.title}
              title={skill.title}
              logo={skill.logo}
              slug={skill.slug}
            />
          );
        })}
      </div>
      <h2 className="skills-subtitle ">Degrés de maîtrise</h2>
      <SkillsRadarCharts />
    </div>
  );
};

export default Skills;
