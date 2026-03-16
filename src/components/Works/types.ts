export interface WorksDetailsProps {
  id: number;
  description: string;
  illustration: { src: string, alt: string }
  slug: string;
  tags: string[];
  title: string;
}