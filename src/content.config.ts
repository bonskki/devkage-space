import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { ALL_TAGS } from './lib/tags';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.enum(ALL_TAGS)).min(1),
    draft: z.boolean().optional().default(false),
    // Optional 1200x630 social-share card under /public/og. Falls back to the
    // site default card when omitted.
    ogImage: z.string().optional(),
  }),
});

export const collections = { posts };
