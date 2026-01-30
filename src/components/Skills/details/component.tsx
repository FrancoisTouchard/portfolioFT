import { useParams, Navigate } from 'react-router-dom';

import React from "react";
import { SKILLS } from '../skills.data';
import './SkillDetails.css';


const SkillDetails = () => {
  const { skillSlug } = useParams();

  const skill = SKILLS.find(s => s.slug === skillSlug);

  if (!skill) {
    return <Navigate to="/skills" />;
  }

  return (
    <section className='skills-details-section'>
      <h1>{skill.title}</h1>
      <img className='skills-details-logo' src={skill.logo.src} alt={skill.logo.alt} />
      <p>{skill.description}</p>
    </section>
  );
}

export default SkillDetails;