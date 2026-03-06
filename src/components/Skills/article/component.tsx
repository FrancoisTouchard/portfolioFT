import React from "react";
import './SkillArticle.css';
import { SkillProps } from "../types";


const SkillArticle = ({ article }: Pick<SkillProps, 'article'>) => {

  if (!article) {
    return null;
  }

  return (
    <section className='skills-article-section'>
      <h2 className="skills-article-subtitle">Ma définition</h2>
      {article.definition}
      <h2 className="skills-article-subtitle">Mes éléments de preuve</h2>
      {article.proofs}
      <h2 className="skills-article-subtitle">Mon autocritique</h2>
      {article.criticism}
      <h2 className="skills-article-subtitle">Mon évolution dans cette compétence</h2>
      {article.evolution}
      <h2 className="skills-article-subtitle" id="skills-associated-work">Réalisations associées</h2>
    </section>
  );
}

export default SkillArticle;