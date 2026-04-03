import cvFile from '../assets/pdf/CV_FrancoisTouchard.pdf';

type SocialLink = {
  label: string;
  url: string;
};

export const SOCIAL_LINKS = {
  cv: {
    label: 'Télécharger le CV',
    url: cvFile,
  },
  email: {
    label: 'Email',
    url: 'mailto:francois.touchard.wos@gmail.com',
  },
  github: {
    label: 'GitHub',
    url: 'https://github.com/FrancoisTouchard',
  },
  linkedin: {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/fran%C3%A7ois-touchard-72950946',
  },
} satisfies Record<string, SocialLink>;
