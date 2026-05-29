export const ALL_TAGS = ['hpc', 'ai', 'cuda', 'cpp', 'york', 'life', 'cs'] as const;
export type Tag = (typeof ALL_TAGS)[number];

export const tagLabel: Record<Tag, string> = {
  hpc: 'hpc',
  ai: 'ai',
  cuda: 'cuda',
  cpp: 'c++',
  york: 'york',
  life: 'life',
  cs: 'c#',
};
