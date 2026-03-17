export interface WorkProps {
  id: number;
  article: { intro: React.ReactNode, context: React.ReactNode, steps: React.ReactNode, actors: React.ReactNode, results: React.ReactNode, future: React.ReactNode, criticism: React.ReactNode };
  description: string;
  illustration: { src: string, alt: string }
  slug: string;
  tags: string[];
  title: string;
}