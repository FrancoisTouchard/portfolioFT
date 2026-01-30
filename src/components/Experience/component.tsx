import { useParams, Navigate } from 'react-router-dom';

import React from "react";
import './ExperienceDetails.css';
import { EXPERIENCES } from './experiences.data';

const ExperienceDetails = () => {
  const { experienceSlug } = useParams();

  const experience = EXPERIENCES.find(e => e.slug === experienceSlug);

  if (!experience) {
    return <Navigate to="/" />;
  }

  return (
    <section className='experiences-details-section'>
      <h1>{experience.title}</h1>
      <img className='experiences-details-logo' src={experience.logo.src} alt={experience.logo.alt} />
      <p>{experience.description}</p>
    </section>
  );
}

export default ExperienceDetails;