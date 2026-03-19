import React from 'react';

import { TagProps } from '../../utils/navigation/navigation-links';

export interface ExperienceDetailsProps {
  id: number;
  article: { entity: React.ReactNode; role?: React.ReactNode };
  articleTags: TagProps[];
  articleTitle: string;
  cardTags: string[];
  cardTitle: string;
  company: string;
  date: string;
  description: string;
  isSchool: boolean;
  logo: { src: string; alt: string };
  slug: string;
}
