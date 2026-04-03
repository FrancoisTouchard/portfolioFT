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
  logo?: { src: string; alt: string };
  media?: ReactNode;
  sections: ArticleSection[];
  tags?: ArticleTag[];
  tagsContainerTitle?: string;
  title?: string;
};
