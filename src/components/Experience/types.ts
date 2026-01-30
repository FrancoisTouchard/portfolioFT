export interface ExperienceDetailsProps {
  id: number;
  company: string;
  date: string;
  description: string;
  logo: { src: string, alt: string }
  slug: string;
  tags: string[];
  title: string;
}