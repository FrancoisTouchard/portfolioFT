export interface SkillProps {
  article: { definition: React.ReactNode, experience: React.ReactNode };
  category: "HARD" | "SOFT";
  description: string;
  logo: { src: string, alt: string }
  slug: string;
  tags: string[];
  title: string;
}