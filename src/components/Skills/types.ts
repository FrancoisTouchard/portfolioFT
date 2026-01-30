export interface SkillProps {
  category: "HARD" | "SOFT";
  description: string;
  logo: { src: string, alt: string }
  slug: string;
  tags: string[];
  title: string;
}