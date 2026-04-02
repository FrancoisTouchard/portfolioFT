import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Article from '../../../components/Article/Article';
import { SKILLS } from '../skills.data';

const SkillDetails = () => {
  const { skillSlug } = useParams();

  const skill = SKILLS.find(s => s.slug === skillSlug);

  if (!skill) {
    return <Navigate to="/skills" />;
  }

  const sections = [
    { title: 'Ma définition', content: skill.article.definition },
    { title: 'Mes éléments de preuve', content: skill.article.proofs },
    { title: 'Mon autocritique', content: skill.article.criticism },
    {
      title: 'Mon évolution dans cette compétence',
      content: skill.article.evolution,
    },
  ];

  const tags = skill.tags.map(tag => ({
    label: tag.label,
    to: `/works/${tag.path}`,
  }));

  return (
    <Article
      logo={skill.logo}
      sections={sections}
      tags={tags}
      tagsContainerTitle="Réalisations associées"
      title={skill.title}
    />
  );
};

export default SkillDetails;
