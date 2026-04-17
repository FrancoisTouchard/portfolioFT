import { ReactNode } from 'react';

type ArticleSection = {
  content: ReactNode;
  title: string;
};

type ArticleTag = {
  label: string;
  to: string;
};

export type ArticleProps = {
  demoSrc?: string;
  logo?: { src: string; alt: string };
  sections: ArticleSection[];
  tags?: ArticleTag[];
  tagsContainerTitle?: string;
  title?: string;
};
