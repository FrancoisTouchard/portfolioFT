import logoEdifice from '../../assets/logos/logo_edifice.png';
import logoIscod from '../../assets/logos/logo_iscod.jpg';
import logoPickme from '../../assets/logos/logo_pickme.png';
import logoEpitech from '../../assets/logos/logo_epitech.png';
import { ExperienceDetailsProps } from './types';

export const EXPERIENCES: ExperienceDetailsProps[] = [
  {
    id: 1,
    title: "Développeur Frontend Mobile",
    company: "Édifice (en alternance)",
    date: "02/09/2024 au 02/09/2026",
    description: "Développement de la version application mobile (Android & iOS) de l'espace de travail numérique édité par Édifice. Alternance réalisée dans le cadre de la préparation de mon master à l'ISCOD.",
    logo: { src: logoEdifice, alt: 'Logo Édifice' },
    slug: "edifice",
    tags: ["React Native", "JavaScript", "TypeScript", "CSS", "Git"]
  },
  {
    id: 2,
    title: `Master "Expert Ingénierie du Logiciel"`,
    company: "ISCOD",
    date: "02/09/2024 au 02/09/2026",
    description: "Préparation en 2 ans d'un Master visant à finaliser ma reconversion. J'ai suivi à l'ISCOD une formation généraliste de développeur full-stack web.",
    logo: { src: logoIscod, alt: 'Logo ISCOD' },
    slug: "iscod",
    tags: ["JavaScript", "TypeScript", "Java", "Kotlin", "Angular", "CSS"]
  },
  {
    id: 3,
    title: "Développeur Fullstack Mobile",
    company: "Pickme (en stage)",
    date: "xx/xx/202x",
    description: "Pickme est une plateforme de livraison collaborative de particuliers qui réceptionnent les colis pour leurs voisins. Stage réalisé dans le cadre de la formation Coding Academy by Epitech.",
    logo: { src: logoPickme, alt: 'Logo Pickme' },
    slug: "pickme",
    tags: ["React Native", "Node.js", "PostgreSQL"]
  },
  {
    id: 4,
    title: "Formation Développeur Web",
    company: "Coding Academy by Epitech",
    date: "xx/xx/202x",
    description: "Formation bootcamp de 6 mois sur les technologies web modernes et les bonnes pratiques de développement.",
    logo: { src: logoEpitech, alt: 'Logo Epitech' },
    slug: "epitech",
    tags: ["React", "React Native", "JavaScript", "Vue.js", "PHP", "HTML", "CSS", "Git", "Mongo DB", "SQL"]
  }
];