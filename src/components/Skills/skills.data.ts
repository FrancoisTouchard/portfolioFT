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

const WORK_TAGS = {
  carrousel: { displayName: "Carrousel Multimédia", linkName: "multimedia-carrousel" },
  wiki: { displayName: "Cours & Wiki", linkName: "wiki" },
  indigo: { displayName: "Indigo Project", linkName: "indigo-project" },
  myGifLibrary: { displayName: "My Gif Library", linkName: "mygiflibrary" },
  chatbot: { displayName: "Pickme & HelloMyBot", linkName: "chatbot" },
}

export const SKILLS: SkillProps[] = [
  {
    article: JAVASCRIPT_ARTICLE,
    category: "HARD",
    description: "desc",
    title: "JavaScript",
    logo: { src: javascriptLogo, alt: 'Logo JavaScript' },
    slug: "javascript",
    tags: [WORK_TAGS.carrousel, WORK_TAGS.wiki, WORK_TAGS.indigo, WORK_TAGS.myGifLibrary, WORK_TAGS.chatbot]
  },
  {
    article: TYPESCRIPT_ARTICLE,
    category: "HARD",
    description: "desc",
    title: "TypeScript",
    logo: { src: typescriptLogo, alt: 'Logo TypeScript' },
    slug: "typescript",
    tags: [WORK_TAGS.carrousel, WORK_TAGS.wiki, WORK_TAGS.indigo, WORK_TAGS.chatbot]
  },
  {
    article: { definition: "todo", proofs: 'todo', criticism: 'todo', evolution: 'todo' },
    category: "HARD",
    description: "desc",
    title: "React Native",
    logo: { src: reactLogo, alt: 'Logo React Native' },
    slug: "react-native",
    tags: [WORK_TAGS.carrousel, WORK_TAGS.wiki, WORK_TAGS.indigo, WORK_TAGS.chatbot]
  },
  {
    article: { definition: "todo", proofs: 'todo', criticism: 'todo', evolution: 'todo' },
    category: "HARD",
    description: "desc",
    title: "React",
    logo: { src: reactLogo, alt: 'Logo React' },
    slug: "react",
    tags: [WORK_TAGS.carrousel, WORK_TAGS.wiki, WORK_TAGS.indigo, WORK_TAGS.myGifLibrary, WORK_TAGS.chatbot]
  },
  {
    article: { definition: "todo", proofs: 'todo', criticism: 'todo', evolution: 'todo' },
    category: "HARD",
    description: "desc",
    title: "UX/UI",
    logo: { src: uxIcon, alt: 'Logo UX/UI' },
    slug: "uxui",
    tags: [WORK_TAGS.carrousel, WORK_TAGS.wiki]
  },
  {
    article: COMMUNICATION_ARTICLE,
    category: "SOFT",
    description: "desc",
    title: "Communication",
    logo: { src: communicationIcon, alt: 'Icône Communication' },
    slug: "communication",
    tags: [WORK_TAGS.carrousel, WORK_TAGS.wiki, WORK_TAGS.indigo, WORK_TAGS.myGifLibrary, WORK_TAGS.chatbot]
  },
  {
    article: CREATIVITY_ARTICLE,
    category: "SOFT",
    description: "desc",
    title: "Créativité",
    logo: { src: creativityIcon, alt: 'Icône Créativité' },
    slug: "creativity",
    tags: [WORK_TAGS.carrousel, WORK_TAGS.wiki, WORK_TAGS.indigo, WORK_TAGS.myGifLibrary]
  },
  {
    article: CRITICAL_THINKING_ARTICLE,
    category: "SOFT",
    description: "desc",
    title: "Esprit Critique",
    logo: { src: thinkingIcon, alt: 'Icône Esprit Critique' },
    slug: "critical-thinking",
    tags: [WORK_TAGS.carrousel, WORK_TAGS.wiki, WORK_TAGS.indigo, WORK_TAGS.myGifLibrary]
  },
  {
    article: COMMITMENT_ARTICLE,
    category: "SOFT",
    description: "desc",
    title: "Implication",
    logo: { src: autonomyIcon, alt: 'Icône Autonomie' },
    slug: "commitment",
    tags: [WORK_TAGS.carrousel, WORK_TAGS.wiki, WORK_TAGS.indigo, WORK_TAGS.myGifLibrary]
  },
  {
    article: { definition: "todo", proofs: 'todo', criticism: 'todo', evolution: 'todo' },
    category: "SOFT",
    description: "desc",
    title: "Organisation",
    logo: { src: organizationIcon, alt: 'Icône Organisation' },
    slug: "organization",
    tags: [WORK_TAGS.carrousel, WORK_TAGS.wiki, WORK_TAGS.indigo, WORK_TAGS.myGifLibrary]
  },
];
