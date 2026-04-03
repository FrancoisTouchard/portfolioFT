import './Contact.css';

import React from 'react';

import contactBgPicture from '../../assets/backgrounds/bg-orange-red.jpg';
import Introduction from '../../components/Introduction/component';
import PageView from '../../components/PageView/component';
import ContactDiamondIcons from './DiamondIcons/ContactDiamondIcons';
import ContactSecondDiamond from './SecondDiamond/ContactSecondDiamond';

const CONTACT_SQUARE_BORDER =
  'linear-gradient(180deg, #dc2626 0%, #f97316 100%)';

const Contact = () => {
  return (
    <PageView>
      <Introduction
        pictureSrc={contactBgPicture}
        squareBorderColor={CONTACT_SQUARE_BORDER}
        secondDiamondContent={<ContactSecondDiamond />}
      />
      <div className="contact-standalone-wrapper">
        <div
          className="outer-square"
          style={
            {
              '--outer-square-border': CONTACT_SQUARE_BORDER,
            } as React.CSSProperties
          }>
          <div className="inner-square">
            <ContactDiamondIcons />
          </div>
        </div>
      </div>
      <p className="contact-email">FRANCOIS.TOUCHARD.WOS@GMAIL.COM</p>
    </PageView>
  );
};

export default Contact;
