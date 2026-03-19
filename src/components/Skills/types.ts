import React from 'react';

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
  tags: { label: string; path: string }[];
  title: string;
}
