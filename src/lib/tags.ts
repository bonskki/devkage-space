export const ALL_TAGS = ['swe', 'sqlite'] as const;
export type Tag = (typeof ALL_TAGS)[number];

export const tagLabel: Record<Tag, string> = {
  swe: 'software-eng',
  sqlite: 'sqlite',
};
