import React from 'react';
import './Skills.css';
import SkillCard from './card/component';
import reactLogo from '../../assets/react.svg';
import nodeLogo from '../../assets/nodejs.png';
import postgresLogo from '../../assets/postgres.png';
import javaLogo from '../../assets/java.png';
import { SkillsCardProps } from './card/types';

const hardSkills: SkillsCardProps[] = [
  {
    title: "React Native",
    logo: { src: reactLogo, alt: 'Logo React Native' },
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
  {
    title: "React",
    logo: { src: reactLogo, alt: 'Logo React' },
    tags: ["React", "Xx", "Yoooo"]
  },
  {
    title: "Node.js",
    logo: { src: nodeLogo, alt: 'Logo Node.js' },
    tags: ["Node.js", "Xx", "Yoooo", "lalala"]
  },
  {
    title: "Java",
    logo: { src: javaLogo, alt: 'Logo Java' },
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
  {
    title: "PostgreSQL",
    logo: { src: postgresLogo, alt: 'Logo PostgreSQL' },
    tags: ["Communication", "Xx", "Yoooo", "lalala"]
  },
];

const softSkills: SkillsCardProps[] = [
  {
    title: "Communication",
    logo: { src: reactLogo, alt: 'Logo React' },
    tags: ["Communication", "Xx", "Yoooo", "lalala"]
  },
  {
    title: "Curiosité",
    logo: { src: reactLogo, alt: 'Logo React' },
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
  {
    title: "Créativité",
    logo: { src: reactLogo, alt: 'Logo React' },
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
  {
    title: "Autonomie",
    logo: { src: reactLogo, alt: 'Logo React' },
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
  {
    title: "Rigueur",
    logo: { src: reactLogo, alt: 'Logo React' },
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
];


const Skills = () => {

  return (
    <div className='skills-page-container'>
      <h1 className="skills-page-title">Mes compétences</h1>
      <h2 className="skills-subtitle">Techniques</h2>
      <div className="skills-cards-container">
        {hardSkills.map((skill) => {
          return (
            <SkillCard
              title={skill.title}
              logo={skill.logo}
              tags={skill.tags}
            />
          );
        })}
      </div>
      <h2 className="skills-subtitle">Humaines</h2>
      <div className="skills-cards-container">
        {softSkills.map((skill) => {
          return (
            <SkillCard
              title={skill.title}
              logo={skill.logo}
              tags={skill.tags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;