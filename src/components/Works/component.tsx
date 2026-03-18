import './Works.css';

import React from 'react';
import { Link } from 'react-router-dom';

import WorksCard from './synthetic/component';
import { WORKS } from './works.data';

const Works = () => {
  return (
    <div className="works-page-container">
      <h1 className="works-page-title">Mes réalisations</h1>
      <div className="works-cards-container">
        {WORKS.map(work => {
          return (
            <div key={work.id} className="works-card-item">
              <Link className="works-card-link" to={`/works/${work.slug}`}>
                <WorksCard
                  description={work.description}
                  illustration={work.illustration}
                  title={work.title}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
