export type RadarEntry = {
  label: string;
  score: number;
};

export const HARD_SKILLS_RADAR: RadarEntry[] = [
  { label: 'TypeScript', score: 3 },
  { label: 'JavaScript', score: 4 },
  { label: 'UX/UI', score: 3 },
  { label: 'React', score: 3 },
  { label: 'React Native', score: 4 },
];

export const SOFT_SKILLS_RADAR: RadarEntry[] = [
  { label: 'Esprit Critique', score: 3 },
  { label: 'Communication', score: 5 },
  { label: 'Créativité', score: 4 },
  { label: 'Implication', score: 5 },
  { label: 'Organisation', score: 3 },
];
