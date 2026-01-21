import React from 'react';

import './TimelineCard.css';
import { TimelineCardProps } from './types';

const TimelineCard = ({ title, company, description, logo, position, tags }: TimelineCardProps) => {
  return (
    <div className={position === 'left' ? 'cardLeft' : 'cardRight'}>
      <div className="cardHeader">
        <div className="cardHeaderText">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardCompany">{company}</p>
        </div>
        <img className='companyLogo' src={logo.src} alt={logo.alt} />
      </div>

      <p className="cardDescription">{description}</p>

      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>

  );
};

export default TimelineCard;
