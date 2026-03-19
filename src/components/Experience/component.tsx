import './ExperienceDetails.css';

import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { EXPERIENCES } from './experiences.data';

const ExperienceDetails = () => {
  const { experienceSlug } = useParams();

  const experience = EXPERIENCES.find(e => e.slug === experienceSlug);

  if (!experience) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <section className="experiences-details-section">
        <img
          className="experiences-details-logo"
          src={experience.logo.src}
          alt={experience.logo.alt}
        />
      </section>
      <section className="experiences-article-section">
        <h2 className="experiences-article-subtitle">
          {experience.isSchool
            ? "L'établissement, le diplôme et la formation"
            : "L'entreprise"}
        </h2>
        {experience.article.entity}
        {!experience.isSchool && (
          <>
            <h2 className="experiences-article-subtitle">Mon rôle</h2>
            {experience.article.role}
          </>
        )}
      </section>
    </>
  );
};

export default ExperienceDetails;
