export type TagProps = {
  path: string;
  label: string;
  type: 'skills' | 'works';
};

export const SKILLS_TAGS: Record<string, TagProps> = {
  javascript: { path: 'javascript', label: 'JavaScript', type: 'skills' },
  typescript: { path: 'typescript', label: 'TypeScript', type: 'skills' },
  reactNative: { path: 'react-native', label: 'React Native', type: 'skills' },
  react: { path: 'react', label: 'React', type: 'skills' },
  uxui: { path: 'uxui', label: 'UX/UI', type: 'skills' },
  communication: {
    path: 'communication',
    label: 'Communication',
    type: 'skills',
  },
  creativity: { path: 'creativity', label: 'Créativité', type: 'skills' },
  thinking: {
    path: 'critical-thinking',
    label: 'Esprit Critique',
    type: 'skills',
  },
  commitment: { path: 'commitment', label: 'Implication', type: 'skills' },
  organization: { path: 'organization', label: 'Organisation', type: 'skills' },
};

export const WORKS_TAGS: Record<string, TagProps> = {
  carrousel: {
    path: 'multimedia-carrousel',
    label: 'Carrousel Multimédia',
    type: 'works',
  },
  wiki: { path: 'wiki', label: 'Cours & Wiki', type: 'works' },
  indigo: {
    path: 'indigo-project',
    label: 'The Indigo Project',
    type: 'works',
  },
  myGifLibrary: {
    path: 'mygiflibrary',
    label: 'My Gif Library',
    type: 'works',
  },
  chatbot: { path: 'chatbot', label: 'Pickme & HelloMyBot', type: 'works' },
};

export const SKILLS_NAV_LINKS = Object.values(SKILLS_TAGS);
export const WORKS_NAV_LINKS = Object.values(WORKS_TAGS);
