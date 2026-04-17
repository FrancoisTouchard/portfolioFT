import React from 'react';

import { TagProps } from '../../utils/navigation/navigation-links';

export interface WorkProps {
  id: number;
  article: {
    intro: React.ReactNode;
    context: React.ReactNode;
    steps: React.ReactNode;
    actors: React.ReactNode;
    results: React.ReactNode;
    future: React.ReactNode;
    criticism: React.ReactNode;
    demoSrc?: string;
  };
  description: string;
  illustration: { src: string; alt: string };
  slug: string;
  tags: TagProps[];
  title: string;
}
