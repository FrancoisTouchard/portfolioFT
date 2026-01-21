export interface TimelineCardProps {
  title: string;
  company: string;
  description: string;
  logo: { src: string, alt: string }
  tags: string[];
  position: 'left' | 'right';
}