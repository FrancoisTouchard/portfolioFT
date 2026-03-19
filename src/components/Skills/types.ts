import React from 'react';

import { TagProps } from '../../utils/navigation/navigation-links';

export interface SkillProps {
  article: {
    definition: React.ReactNode;
    proofs: React.ReactNode;
    criticism: React.ReactNode;
    evolution: React.ReactNode;
  };
  category: 'HARD' | 'SOFT';
  description: string;
  logo: { src: string; alt: string };
  slug: string;
  tags: TagProps[];
  title: string;
}
