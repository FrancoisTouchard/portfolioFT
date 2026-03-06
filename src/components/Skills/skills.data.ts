import reactLogo from '../../assets/react.svg';
import typescriptLogo from '../../assets/typescript.svg';
import javascriptLogo from '../../assets/javascript.png';
import uxIcon from '../../assets/icons/uxui.svg'
import communicationIcon from '../../assets/icons/communication.svg'
import creativityIcon from '../../assets/icons/creativity.svg'
import organizationIcon from '../../assets/icons/organization.svg'
import thinkingIcon from '../../assets/icons/critical-thinking.svg'
import autonomyIcon from '../../assets/icons/autonomy.svg'

import { SkillProps } from './types';
import { COMMITMENT_ARTICLE, COMMUNICATION_ARTICLE, CREATIVITY_ARTICLE, CRITICAL_THINKING_ARTICLE, JAVASCRIPT_ARTICLE, TYPESCRIPT_ARTICLE } from './skills.articles';

export const SKILLS: SkillProps[] = [
  {
    article: JAVASCRIPT_ARTICLE,
    category: "HARD",
    description: "desc",
    title: "JavaScript",
    logo: { src: javascriptLogo, alt: 'Logo JavaScript' },
    slug: "javascript",
    tags: ["JavaScript", "Xx", "Yoooo"]
  },
  {
    article: TYPESCRIPT_ARTICLE,
    category: "HARD",
    description: "desc",
    title: "TypeScript",
    logo: { src: typescriptLogo, alt: 'Logo TypeScript' },
    slug: "typescript",
    tags: ["TypeScript", "Xx", "Yoooo", "lalala"]
  },
  {
    article: { definition: "todo", proofs: 'todo', criticism: 'todo', evolution: 'todo' },
    category: "HARD",
    description: "desc",
    title: "React Native",
    logo: { src: reactLogo, alt: 'Logo React Native' },
    slug: "react-native",
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
  {
    article: { definition: "todo", proofs: 'todo', criticism: 'todo', evolution: 'todo' },
    category: "HARD",
    description: "desc",
    title: "React",
    logo: { src: reactLogo, alt: 'Logo React' },
    slug: "react",
    tags: ["React", "Xx", "Yoooo"]
  },
  {
    article: { definition: "todo", proofs: 'todo', criticism: 'todo', evolution: 'todo' },
    category: "HARD",
    description: "desc",
    title: "UX/UI",
    logo: { src: uxIcon, alt: 'Logo UX/UI' },
    slug: "uxui",
    tags: ["UX", "UI", "Yoooo", "lalala"]
  },
  {
    article: COMMUNICATION_ARTICLE,
    category: "SOFT",
    description: "desc",
    title: "Communication",
    logo: { src: communicationIcon, alt: 'Icône Communication' },
    slug: "communication",
    tags: ["Communication", "Xx", "Yoooo", "lalala"]
  },
  {
    article: CREATIVITY_ARTICLE,
    category: "SOFT",
    description: "desc",
    title: "Créativité",
    logo: { src: creativityIcon, alt: 'Icône Créativité' },
    slug: "creativity",
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
  {
    article: CRITICAL_THINKING_ARTICLE,
    category: "SOFT",
    description: "desc",
    title: "Esprit Critique",
    logo: { src: thinkingIcon, alt: 'Icône Esprit Critique' },
    slug: "critical-thinking",
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
  {
    article: COMMITMENT_ARTICLE,
    category: "SOFT",
    description: "desc",
    title: "Implication",
    logo: { src: autonomyIcon, alt: 'Icône Autonomie' },
    slug: "commitment",
    tags: ["Commitment"]
  },
  {
    article: { definition: "todo", proofs: 'todo', criticism: 'todo', evolution: 'todo' },
    category: "SOFT",
    description: "desc",
    title: "Organisation",
    logo: { src: organizationIcon, alt: 'Icône Organisation' },
    slug: "organization",
    tags: ["React Native", "Xx", "Yoooo", "lalala"]
  },
];
