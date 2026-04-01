import autonomyIcon from '../../assets/icons/autonomy.svg';
import communicationIcon from '../../assets/icons/communication.svg';
import creativityIcon from '../../assets/icons/creativity.svg';
import thinkingIcon from '../../assets/icons/critical-thinking.svg';
import organizationIcon from '../../assets/icons/organization.svg';
import uxIcon from '../../assets/icons/uxui.svg';
import javascriptLogo from '../../assets/javascript.png';
import reactLogo from '../../assets/react.svg';
import typescriptLogo from '../../assets/typescript.svg';
import { WORKS_TAGS } from '../../utils/navigation/navigation-links';
import {
  COMMITMENT_ARTICLE,
  COMMUNICATION_ARTICLE,
  CREATIVITY_ARTICLE,
  CRITICAL_THINKING_ARTICLE,
  JAVASCRIPT_ARTICLE,
  ORGANIZATION_ARTICLE,
  REACT_ARTICLE,
  REACT_NATIVE_ARTICLE,
  TYPESCRIPT_ARTICLE,
  UXUI_ARTICLE,
} from './skills.articles';
import { SkillProps } from './types';

export const SKILLS: SkillProps[] = [
  {
    article: JAVASCRIPT_ARTICLE,
    category: 'HARD',
    description: 'desc',
    title: 'JavaScript',
    logo: { src: javascriptLogo, alt: 'Logo JavaScript' },
    slug: 'javascript',
    tags: [
      WORKS_TAGS.carrousel,
      WORKS_TAGS.wiki,
      WORKS_TAGS.indigo,
      WORKS_TAGS.myGifLibrary,
      WORKS_TAGS.chatbot,
    ],
  },
  {
    article: TYPESCRIPT_ARTICLE,
    category: 'HARD',
    description: 'desc',
    title: 'TypeScript',
    logo: { src: typescriptLogo, alt: 'Logo TypeScript' },
    slug: 'typescript',
    tags: [
      WORKS_TAGS.carrousel,
      WORKS_TAGS.wiki,
      WORKS_TAGS.indigo,
      WORKS_TAGS.chatbot,
    ],
  },
  {
    article: REACT_NATIVE_ARTICLE,
    category: 'HARD',
    description: 'desc',
    title: 'React Native',
    logo: { src: reactLogo, alt: 'Logo React Native' },
    slug: 'react-native',
    tags: [
      WORKS_TAGS.carrousel,
      WORKS_TAGS.wiki,
      WORKS_TAGS.indigo,
      WORKS_TAGS.chatbot,
    ],
  },
  {
    article: REACT_ARTICLE,
    category: 'HARD',
    description: 'desc',
    title: 'React',
    logo: { src: reactLogo, alt: 'Logo React' },
    slug: 'react',
    tags: [WORKS_TAGS.myGifLibrary, WORKS_TAGS.chatbot],
  },
  {
    article: UXUI_ARTICLE,
    category: 'HARD',
    description: 'desc',
    title: 'UX/UI',
    logo: { src: uxIcon, alt: 'Icône UX/UI' },
    slug: 'uxui',
    tags: [WORKS_TAGS.carrousel, WORKS_TAGS.wiki],
  },
  {
    article: COMMUNICATION_ARTICLE,
    category: 'SOFT',
    description: 'desc',
    title: 'Communication',
    logo: { src: communicationIcon, alt: 'Icône Communication' },
    slug: 'communication',
    tags: [WORKS_TAGS.carrousel, WORKS_TAGS.wiki, WORKS_TAGS.myGifLibrary],
  },
  {
    article: CREATIVITY_ARTICLE,
    category: 'SOFT',
    description: 'desc',
    title: 'Créativité',
    logo: { src: creativityIcon, alt: 'Icône Créativité' },
    slug: 'creativity',
    tags: [WORKS_TAGS.carrousel, WORKS_TAGS.wiki, WORKS_TAGS.indigo],
  },
  {
    article: CRITICAL_THINKING_ARTICLE,
    category: 'SOFT',
    description: 'desc',
    title: 'Esprit Critique',
    logo: { src: thinkingIcon, alt: 'Icône Esprit Critique' },
    slug: 'critical-thinking',
    tags: [WORKS_TAGS.carrousel, WORKS_TAGS.indigo, WORKS_TAGS.myGifLibrary],
  },
  {
    article: COMMITMENT_ARTICLE,
    category: 'SOFT',
    description: 'desc',
    title: 'Implication',
    logo: { src: autonomyIcon, alt: 'Icône Autonomie' },
    slug: 'commitment',
    tags: [WORKS_TAGS.carrousel, WORKS_TAGS.indigo],
  },
  {
    article: ORGANIZATION_ARTICLE,
    category: 'SOFT',
    description: 'desc',
    title: 'Organisation',
    logo: { src: organizationIcon, alt: 'Icône Organisation' },
    slug: 'organization',
    tags: [WORKS_TAGS.carrousel, WORKS_TAGS.indigo],
  },
];
