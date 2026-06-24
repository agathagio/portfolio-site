import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/cases',
    // Default generateId collapses to the filename basename, so en/x.md and
    // pt/x.md would collide. Keep the folder in the id to stay unique.
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    slug: z.string(),
    lang: z.enum(['en', 'pt']),
    order: z.number(),
    domain: z.enum(['DATA', 'CONTENT', 'OPS']),
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    related: z.array(z.string()),
  }),
});

export const collections = { cases };
