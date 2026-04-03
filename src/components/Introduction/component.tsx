import './Introduction.css';

import React from 'react';

import profilePic from '../../assets/photoFT.jpg';
import { IntroductionProps } from './types';

const Introduction = ({
  pictureSrc,
  squareBorderColor,
  secondDiamondContent,
}: IntroductionProps) => {
  return (
    <div className="intro-background-container">
      <img
        className="intro-background-picture"
        src={pictureSrc}
        alt="Image de vague"
      />
      <div className="squares-container">
        <div
          className="outer-square"
          style={
            {
              '--outer-square-border': squareBorderColor,
            } as React.CSSProperties
          }>
          <div className="inner-square">
            <img className="profilepic" src={profilePic} alt="Photo de moi" />
          </div>
        </div>
        <div
          className="outer-square"
          style={
            {
              '--outer-square-border': squareBorderColor,
            } as React.CSSProperties
          }>
          <div className="inner-square">
            {secondDiamondContent ?? (
              <span className="text-job">Développeur frontend</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
