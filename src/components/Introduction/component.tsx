import './Introduction.css';

import React from 'react';

import bgPic from '../../assets/backgrounds/bg-wave-reversed.jpg';
import profilePic from '../../assets/photoFT.jpg';

export default function Introduction() {
  return (
    <div className="intro-background-container">
      <img
        className="intro-background-picture"
        src={bgPic}
        alt="Image de vague"
      />
      <div className="squares-container">
        <div className="square">
          <div className="inner-square">
            <img className="profilepic" src={profilePic} alt="Photo de moi" />
          </div>
        </div>
        <div className="square">
          <div className="inner-square">
            <span className="text-job">Développeur frontend</span>
          </div>
        </div>
      </div>
    </div>
  );
}
