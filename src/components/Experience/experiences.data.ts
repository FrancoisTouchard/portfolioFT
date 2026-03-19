import logoEdifice from '../../assets/logos/logo_edifice.png';
import logoEpitech from '../../assets/logos/logo_epitech.png';
import logoIscod from '../../assets/logos/logo_iscod.jpg';
import logoPickme from '../../assets/logos/logo_pickme.png';
import {
  SKILLS_TAGS,
  WORKS_TAGS,
} from '../../utils/navigation/navigation-links';
import {
  EDIFICE_ARTICLE,
  EPITECH_ARTICLE,
  ISCOD_ARTICLE,
} from './experience.articles';
import { ExperienceDetailsProps } from './types';

export const EXPERIENCES: ExperienceDetailsProps[] = [
  {
    id: 1,
    article: EDIFICE_ARTICLE,
    articleTags: [
      WORKS_TAGS.carrousel,
      WORKS_TAGS.wiki,
      SKILLS_TAGS.javascript,
      SKILLS_TAGS.typescript,
      SKILLS_TAGS.reactNative,
      SKILLS_TAGS.uxui,
      SKILLS_TAGS.communication,
      SKILLS_TAGS.creativity,
      SKILLS_TAGS.commitment,
      SKILLS_TAGS.thinking,
    ],
    cardTags: ['React Native', 'JavaScript', 'TypeScript', 'CSS', 'Git'],
    company: 'Édifice (en alternance)',
    date: '02/09/2024 au 02/09/2026',
    description:
      "Développement de la version application mobile (Android & iOS) de l'espace de travail numérique édité par Édifice. Alternance réalisée dans le cadre de la préparation de mon master à l'ISCOD.",
    isSchool: false,
    logo: { src: logoEdifice, alt: 'Logo Édifice' },
    slug: 'edifice',
    title: 'Développeur Frontend Mobile',
  },
  {
    id: 2,
    article: ISCOD_ARTICLE,
    articleTags: [
      SKILLS_TAGS.javascript,
      SKILLS_TAGS.typescript,
      SKILLS_TAGS.uxui,
      SKILLS_TAGS.commitment,
      SKILLS_TAGS.organization,
    ],
    cardTags: ['JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Angular', 'CSS'],
    company: 'ISCOD',
    date: '02/09/2024 au 02/09/2026',
    description:
      "Préparation en 2 ans d'un Master visant à finaliser ma reconversion. J'ai suivi à l'ISCOD une formation généraliste de développeur full-stack web.",
    isSchool: true,
    logo: { src: logoIscod, alt: 'Logo ISCOD' },
    slug: 'iscod',
    title: `Master "Expert Ingénierie du Logiciel"`,
  },
  {
    id: 3,
    article: { entity: 'todo' },
    articleTags: [],
    cardTags: ['React Native', 'Node.js', 'PostgreSQL'],
    company: 'Pickme (en stage)',
    date: '08/03/2023 au 07/09/2023',
    description:
      'Pickme est une plateforme de livraison collaborative de particuliers qui réceptionnent les colis pour leurs voisins. Stage réalisé dans le cadre de la formation Coding Academy by Epitech.',
    isSchool: false,
    logo: { src: logoPickme, alt: 'Logo Pickme' },
    slug: 'pickme',
    title: 'Développeur Fullstack Mobile',
  },
  {
    id: 4,
    article: EPITECH_ARTICLE,
    articleTags: [
      SKILLS_TAGS.javascript,
      SKILLS_TAGS.react,
      SKILLS_TAGS.reactNative,
      SKILLS_TAGS.commitment,
      SKILLS_TAGS.organization,
    ],
    cardTags: [
      'React',
      'React Native',
      'JavaScript',
      'Vue.js',
      'PHP',
      'Git',
      'Mongo DB',
      'SQL',
    ],
    company: 'Coding Academy by Epitech',
    date: '03/10/2022 au 03/03/2023',
    description: `Obtention du titre RNCP niveau 5 "Intégrateur développeur web", puis de la certification Epitech "Concepteur Développeur web & mobile".`,
    isSchool: true,
    logo: { src: logoEpitech, alt: 'Logo Epitech' },
    slug: 'epitech',
    title: 'Formation Développeur Web',
  },
];
