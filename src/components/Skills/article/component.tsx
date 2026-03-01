import React from "react";
import './SkillArticle.css';
import { SkillProps } from "../types";


const SkillArticle = ({ article }: Pick<SkillProps, 'article'>) => {

  if (!article) {
    return "";
  }

  return (
    <section className='skills-article-section'>
      <h2 className="skills-article-subtitle">Ma définition</h2>
      {article.definition}
      <h2 className="skills-article-subtitle">Mon expérience</h2>
      {article.experience}
      <h2 className="skills-article-subtitle" id="skills-associated-work">Réalisations associées</h2>

    </section>
  );
}

export default SkillArticle;