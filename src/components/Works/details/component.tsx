import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Article from '../../../components/Article/Article';
import { WORKS } from '../works.data';

const WorkDetails = () => {
  const { workSlug } = useParams();

  const work = WORKS.find(w => w.slug === workSlug);

  if (!work) {
    return <Navigate to="/works" />;
  }

  const sections = [
    { title: 'Introduction', content: work.article.intro },
    { title: 'Contexte et objectifs', content: work.article.context },
    { title: 'Les Étapes', content: work.article.steps },
    { title: 'Les Acteurs', content: work.article.actors },
    { title: 'Les Résultats', content: work.article.results },
    { title: "L'Avenir du projet", content: work.article.future },
    { title: 'Mon regard critique', content: work.article.criticism },
  ];

  const tags = work.tags.map(tag => ({
    label: tag.label,
    to: `/skills/${tag.path}`,
  }));

  return (
    <Article
      demoSrc={work.article.demoSrc}
      sections={sections}
      tags={tags}
      tagsContainerTitle="Compétences associées"
      title={work.title}
    />
  );
};

export default WorkDetails;
