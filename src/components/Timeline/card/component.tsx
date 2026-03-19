import './TimelineCard.css';

import React from 'react';

import { TimelineCardProps } from './types';

const TimelineCard = ({
  title,
  company,
  description,
  logo,
  position,
  tags,
}: TimelineCardProps) => {
  return (
    <div
      className={`timeline-card ${position === 'left' ? 'timeline-card--left' : 'timeline-card--right'}`}>
      <div className="timeline-card-header">
        <div className="timeline-card-header-text">
          <h3 className="timeline-card-title">{title}</h3>
          <p className="timeline-card-company">{company}</p>
        </div>
        <img
          className="timeline-card-company-logo"
          src={logo.src}
          alt={logo.alt}
        />
      </div>
      <p className="timeline-card-description">{description}</p>
      <div className="timeline-card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="timeline-card-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TimelineCard;
