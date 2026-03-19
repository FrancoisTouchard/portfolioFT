import React from 'react';

export interface ExperienceDetailsProps {
  id: number;
  article: { entity: React.ReactNode; role?: React.ReactNode };
  cardTags: string[];
  company: string;
  date: string;
  description: string;
  isSchool: boolean;
  logo: { src: string; alt: string };
  slug: string;
  title: string;
}
