import React from 'react';

import { TagProps } from '../../utils/navigation/navigation-links';

export interface ExperienceDetailsProps {
  id: number;
  article: { entity: React.ReactNode; role?: React.ReactNode };
  articleTags: TagProps[];
  cardTags: string[];
  company: string;
  date: string;
  description: string;
  isSchool: boolean;
  logo: { src: string; alt: string };
  slug: string;
  title: string;
}
