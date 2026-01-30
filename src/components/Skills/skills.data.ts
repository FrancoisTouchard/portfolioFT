import reactLogo from '../../assets/react.svg';
import nodeLogo from '../../assets/nodejs.png';
import postgresLogo from '../../assets/postgres.png';
import typescriptLogo from '../../assets/typescript.svg';
import javascriptLogo from '../../assets/javascript.png';
import nestjsLogo from '../../assets/nestjs.svg';
import graphqlLogo from '../../assets/graphql.png';


import { SkillProps } from './types';

export const SKILLS: SkillProps[] = [
  {
    category: "HARD",
    description: "desc",
    title: "React Native",
    logo: { src: reactLogo, alt: 'Logo React Native' },
    slug: "react-native",
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
  {
    category: "HARD",
    description: "desc",
    title: "TypeScript",
    logo: { src: typescriptLogo, alt: 'Logo TypeScript' },
    slug: "typescript",
    tags: ["TypeScript", "Xx", "Yoooo", "lalala"]
  },
  {
    category: "HARD",
    description: "desc",
    title: "React",
    logo: { src: reactLogo, alt: 'Logo React' },
    slug: "react",
    tags: ["React", "Xx", "Yoooo"]
  },
  {
    category: "HARD",
    description: "desc",
    title: "JavaScript",
    logo: { src: javascriptLogo, alt: 'Logo JavaScript' },
    slug: "react",
    tags: ["JavaScript", "Xx", "Yoooo"]
  },
  {
    category: "HARD",
    description: "desc",
    title: "Node.js",
    logo: { src: nodeLogo, alt: 'Logo Node.js' },
    slug: "nodejs",
    tags: ["Node.js", "Xx", "Yoooo", "lalala"]
  },
  {
    category: "HARD",
    description: "desc",
    title: "Nest.js",
    logo: { src: nestjsLogo, alt: 'Logo Nest.js' },
    slug: "nestjs",
    tags: ["Nest.js", "Xx", "Yoooo", "lalala"]
  },
  {
    category: "HARD",
    description: "desc",
    title: "PostgreSQL",
    logo: { src: postgresLogo, alt: 'Logo PostgreSQL' },
    slug: "postgresql",
    tags: ["Communication", "Xx", "Yoooo", "lalala"]
  },
  {
    category: "HARD",
    description: "desc",
    title: "GraphQL",
    logo: { src: graphqlLogo, alt: 'Logo GraphQL' },
    slug: "graphql",
    tags: ["Communication", "Xx", "Yoooo", "lalala"]
  },
  {
    category: "SOFT",
    description: "desc",
    title: "Communication",
    logo: { src: reactLogo, alt: 'Logo React' },
    slug: "communication",
    tags: ["Communication", "Xx", "Yoooo", "lalala"]
  },
  {
    category: "SOFT",
    description: "desc",
    title: "Curiosité",
    logo: { src: reactLogo, alt: 'Logo React' },
    slug: "curiosity",
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
  {
    category: "SOFT",
    description: "desc",
    title: "Créativité",
    logo: { src: reactLogo, alt: 'Logo React' },
    slug: "creativity",
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
  {
    category: "SOFT",
    description: "desc",
    title: "Autonomie",
    logo: { src: reactLogo, alt: 'Logo React' },
    slug: "independence",
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
  {
    category: "SOFT",
    description: "desc",
    title: "Rigueur",
    logo: { src: reactLogo, alt: 'Logo React' },
    slug: "rigor",
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
];
