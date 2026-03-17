import { useParams, Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";

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
    <>
      <section className='skills-details-section'>
        <img className='skills-details-logo' src={skill.logo.src} alt={skill.logo.alt} />
        <h1 className='skills-details-title' >{skill.title}</h1>
      </section>
      <section className='skills-article-section'>
        <h2 className="skills-article-subtitle">Ma définition</h2>
        {skill.article.definition}
        <h2 className="skills-article-subtitle">Mes éléments de preuve</h2>
        {skill.article.proofs}
        <h2 className="skills-article-subtitle">Mon autocritique</h2>
        {skill.article.criticism}
        <h2 className="skills-article-subtitle">Mon évolution dans cette compétence</h2>
        {skill.article.evolution}
        <h2 className="skills-article-subtitle" id="skills-associated-work">Réalisations associées</h2>
        <div className="skills-tags-container">
          {skill.tags.map((tag, index) => (
            <Link key={index} to={`/works/${tag.linkName}`}>
              <span className="skill-tag">
                {tag.displayName}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default SkillDetails;