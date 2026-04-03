import React from 'react';

import Article from '../../Article/Article';
import { ABOUT_ARTICLE } from './about.article';

const AboutArticle = () => {
  const sections = [
    {
      title: 'Présentation & projet professionnel',
      content: ABOUT_ARTICLE.presentation,
    },
    {
      title: 'Mes principales qualités humaines',
      content: ABOUT_ARTICLE.qualities,
    },
    { title: 'Mes valeurs', content: ABOUT_ARTICLE.values },
    {
      title: `Mes principaux centres d'intérêt`,
      content: ABOUT_ARTICLE.interests,
    },
  ];

  return <Article sections={sections} />;
};

export default AboutArticle;
