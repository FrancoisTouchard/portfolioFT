import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Article from '../../components/Article/Article';
import { EXPERIENCES } from './experiences.data';

const ExperienceDetails = () => {
  const { experienceSlug } = useParams();

  const experience = EXPERIENCES.find(e => e.slug === experienceSlug);

  if (!experience) {
    return <Navigate to="/" />;
  }

  const sections = [
    {
      title: experience.isSchool
        ? "L'établissement, le diplôme et la formation"
        : "L'entreprise",
      content: experience.article.entity,
    },
    ...(experience.isSchool || !experience.article.role
      ? []
      : [{ title: 'Mon rôle', content: experience.article.role }]),
  ];

  const tags = experience.articleTags.map(tag => ({
    label: tag.label,
    to: `/${tag.type}/${tag.path}`,
  }));

  return (
    <Article
      logo={experience.logo}
      sections={sections}
      tags={tags}
      tagsContainerTitle="Compétences et réalisations associées"
      title={experience.articleTitle}
    />
  );
};

export default ExperienceDetails;
