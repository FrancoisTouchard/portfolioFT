export interface TimelineCardProps {
  cardTags: string[];
  company: string;
  description: string;
  logo: { src: string; alt: string };
  position: 'left' | 'right';
  title: string;
}
