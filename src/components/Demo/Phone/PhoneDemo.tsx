import './PhoneDemo.css';

import React from 'react';

import PhoneMockupSrc from '../../../assets/phoneMockup.svg';

type PhoneDemoProps = {
  src: string;
};

const PhoneDemo = ({ src }: PhoneDemoProps) => (
  <div className="phone-demo-wrapper">
    <div className="phone-demo-frame-container">
      <img className="phone-demo-mockup" src={PhoneMockupSrc} />
      <video
        className="phone-demo-video"
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  </div>
);

export default PhoneDemo;
