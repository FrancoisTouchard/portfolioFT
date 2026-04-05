import './About.css';

import React from 'react';

import aboutBgPicture from '../../assets/backgrounds/bg-orange-desert.jpg';
import AboutArticle from '../../components/About/AboutArticle/component';
import Introduction from '../../components/Introduction/component';
import PageView from '../../components/PageView/component';

const ABOUT_SQUARE_BORDER =
  ' linear-gradient(180deg, #f09020 0%, #b84a08 100%)';

const About = () => {
  return (
    <PageView>
      <div className="about-hero">
        <Introduction
          pictureSrc={aboutBgPicture}
          squareBorderColor={ABOUT_SQUARE_BORDER}
          secondDiamondContent={
            <span className="text-job">À propos de moi</span>
          }
        />
        <div className="about-article-container">
          <AboutArticle />
        </div>
      </div>
    </PageView>
  );
};

export default About;
