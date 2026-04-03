import './ContactDiamondIcons.css';

import React from 'react';

import githubIcon from '../../../assets/icons/github-icon.svg';
import linkedinIcon from '../../../assets/icons/linkedin-icon.svg';
import mailIcon from '../../../assets/icons/mail-icon.svg';
import { SOCIAL_LINKS } from '../../../config/social-links';
import { MiniDiamondProps } from './types';

const MiniDiamond = ({
  href,
  label,
  position,
  children,
  external = false,
  download,
}: MiniDiamondProps) => (
  <a
    href={href}
    className={`mini-diamond mini-diamond--${position}`}
    aria-label={label}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    {...(download !== undefined ? { download } : {})}>
    <div className="mini-diamond-inner">{children}</div>
  </a>
);

const ContactDiamondIcons = () => (
  <div className="contact-diamonds">
    <MiniDiamond
      href={SOCIAL_LINKS.github.url}
      label={SOCIAL_LINKS.github.label}
      position="top"
      external>
      <img
        src={githubIcon}
        alt={SOCIAL_LINKS.github.label}
        className="contact-icon"
      />
    </MiniDiamond>
    <MiniDiamond
      href={SOCIAL_LINKS.email.url}
      label={SOCIAL_LINKS.email.label}
      position="left">
      <img
        src={mailIcon}
        alt={SOCIAL_LINKS.email.label}
        className="contact-icon"
      />
    </MiniDiamond>
    <MiniDiamond
      href={SOCIAL_LINKS.linkedin.url}
      label={SOCIAL_LINKS.linkedin.label}
      position="right"
      external>
      <img
        src={linkedinIcon}
        alt={SOCIAL_LINKS.linkedin.label}
        className="contact-icon"
      />
    </MiniDiamond>
    <MiniDiamond
      href={SOCIAL_LINKS.cv.url}
      label={SOCIAL_LINKS.cv.label}
      position="bottom"
      download="CV_FrancoisTouchard.pdf">
      <span className="contact-diamonds-label">CV</span>
    </MiniDiamond>
  </div>
);

export default ContactDiamondIcons;
