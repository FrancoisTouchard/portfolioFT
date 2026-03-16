import React from 'react';

import './WorksCard.css';
import { WorksCardProps } from './types';
import LaptopMockup from "../../../assets/laptopMockup.svg"
import PhoneMockup from "../../../assets/phoneMockup.svg"

const WorksCard = ({ description, title, illustration }: WorksCardProps) => {
  return (
    <div className="works-card">

      <div className="works-card-text">
        <h3 className="works-card-title">{title}</h3>
        <p className="works-card-description">{description}</p>
      </div>

      <div className={`works-card-image-container ${title === 'My Gif Library' ? 'laptop' : ''}`}>
        <img className='works-card-mockup' src={title === "My Gif Library" ? LaptopMockup : PhoneMockup} />
        {title === "My Gif Library" && <div className="mockup-filler" />}
        <img className={title === 'My Gif Library' ? 'works-card-image-laptop' : 'works-card-image'} src={illustration.src} alt={illustration.alt} />
      </div>

    </div>

  );
};

export default WorksCard;

