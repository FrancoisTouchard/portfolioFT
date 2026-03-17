import { useParams, Navigate } from 'react-router-dom';

import React from "react";
import './WorksDetails.css';
import { WORKS } from '../works.data';


const WorkDetails = () => {
  const { workSlug } = useParams();

  const work = WORKS.find(w => w.slug === workSlug);

  if (!work) {
    return <Navigate to="/works" />;
  }

  return (
    <>
      <section className='works-details-header'>
        <h1 className='works-details-title' >{work.title}</h1>
        {/* Ajouter le visuel ici */}
      </section>
      <section className='works-details-article-section'>
        <h2 className="works-details-article-subtitle">Introduction</h2>
        {work.article.intro}
        <h2 className="works-details-article-subtitle">Le Contexte</h2>
        {work.article.context}
        <h2 className="works-details-article-subtitle">Les Étapes</h2>
        {work.article.steps}
        <h2 className="works-details-article-subtitle">Les Acteurs</h2>
        {work.article.actors}
        <h2 className="works-details-article-subtitle">Les Résultats</h2>
        {work.article.results}
        <h2 className="works-details-article-subtitle">L'Avenir du projet</h2>
        {work.article.future}
        <h2 className="works-details-article-subtitle">Mon regard critique</h2>
        {work.article.criticism}
      </section>
    </>
  );
}

export default WorkDetails;