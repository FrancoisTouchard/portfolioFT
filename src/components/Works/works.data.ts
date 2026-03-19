import carrousel from '../../assets/works/carrousel.jpg';
import coursEtWiki from '../../assets/works/coursEtWiki.jpg';
import helloMyBot from '../../assets/works/helloMyBot.png';
import indigoProject from '../../assets/works/indigoProject.jpg';
import myGifLibrary from '../../assets/works/myGifLibrary.png';
import { SKILLS_TAGS } from '../../utils/navigation/navigation-links';
import { WorkProps } from './types';
import { CARROUSEL_ARTICLE } from './works.article';

export const WORKS: WorkProps[] = [
  {
    id: 1,
    article: CARROUSEL_ARTICLE,
    description:
      'Implémentation d’un composant permettant la consultation d’images, vidéos, audio et fichiers dans un unique carrousel avec les fonctionnalités de swipe, zoom et de pagination.',
    illustration: {
      src: carrousel,
      alt: 'Illustration du Carrousel Multimédia',
    },
    slug: 'multimedia-carrousel',
    tags: [
      SKILLS_TAGS.javascript,
      SKILLS_TAGS.typescript,
      SKILLS_TAGS.reactNative,
      SKILLS_TAGS.uxui,
      SKILLS_TAGS.communication,
      SKILLS_TAGS.creativity,
      SKILLS_TAGS.commitment,
      SKILLS_TAGS.thinking,
    ],
    title: 'Carrousel Multimédia',
  },
  {
    id: 2,
    article: CARROUSEL_ARTICLE,
    description:
      'Création d’un module applicatif offrant la possibilité aux enseignants de poster leurs cours au format wiki afin que les élèves puissent y accéder facilement et depuis n’importe où.',
    illustration: {
      src: coursEtWiki,
      alt: 'Illustration du module Cours & Wiki',
    },
    slug: 'wiki',
    tags: [
      SKILLS_TAGS.javascript,
      SKILLS_TAGS.typescript,
      SKILLS_TAGS.reactNative,
      SKILLS_TAGS.communication,
      SKILLS_TAGS.thinking,
    ],
    title: 'Module Cours & Wiki',
  },
  {
    id: 3,
    article: CARROUSEL_ARTICLE,
    description:
      'Intégration du chatbot HelloMyBot dans l’application mobile Pickme. Cette solution consistait à guider les utilisateurs vers un chatbot afin de leur fournir des réponses aux questions courantes.',
    illustration: { src: helloMyBot, alt: 'Illustration du chatbot' },
    slug: 'chatbot',
    tags: [
      SKILLS_TAGS.javascript,
      SKILLS_TAGS.typescript,
      SKILLS_TAGS.react,
      SKILLS_TAGS.reactNative,
      SKILLS_TAGS.communication,
    ],
    title: 'Pickme & HelloMyBot',
  },
  {
    id: 4,
    article: CARROUSEL_ARTICLE,
    description:
      'Projet personnel visant à améliorer ma maîtrise des interactions tactiles et des animations en React Native. Il s’agit d’une reproduction d’un niveau du jeu Pokémon, codé en TypeScript et JavaScript.',
    illustration: { src: indigoProject, alt: 'Illustration Indigo Project' },
    slug: 'indigo-project',
    tags: [
      SKILLS_TAGS.javascript,
      SKILLS_TAGS.typescript,
      SKILLS_TAGS.reactNative,
      SKILLS_TAGS.uxui,
      SKILLS_TAGS.creativity,
      SKILLS_TAGS.commitment,
      SKILLS_TAGS.organization,
      SKILLS_TAGS.thinking,
    ],
    title: 'The Indigo Project',
  },
  {
    id: 5,
    article: CARROUSEL_ARTICLE,
    description:
      'SPA React permettant à l’utilisateur de rechercher des gifs via l’API de Giphy et de les organiser par catégorie afin de pouvoir accéder rapidement à ses gifs favoris.',
    illustration: {
      src: myGifLibrary,
      alt: "Illustration de l'application MyGifLibrary",
    },
    slug: 'mygiflibrary',
    tags: [
      SKILLS_TAGS.javascript,
      SKILLS_TAGS.react,
      SKILLS_TAGS.creativity,
      SKILLS_TAGS.commitment,
      SKILLS_TAGS.thinking,
    ],
    title: 'My Gif Library',
  },
];
