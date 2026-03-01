import { useParams, Navigate } from 'react-router-dom';

import React from "react";
import { SKILLS } from '../skills.data';
import './SkillDetails.css';
import SkillArticle from '../article/component';


const SkillDetails = () => {
  const { skillSlug } = useParams();

  const skill = SKILLS.find(s => s.slug === skillSlug);

  if (!skill) {
    return <Navigate to="/skills" />;
  }

  return (
    <>
      <section className='skills-details-section'>
        <img className='skills-details-logo' src={skill.logo.src} alt={skill.logo.alt} />
        <h1 className='skills-details-title' >{skill.title}</h1>
      </section>
      <SkillArticle article={skill.article} />
    </>
  );
}

export default SkillDetails;