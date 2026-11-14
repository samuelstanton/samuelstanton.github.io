import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per essay in src/content/essays/.
const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['essay', 'tutorial']).default('essay'),
    summary: z.string(),
    // Optional opening excerpt shown on the home page when this is the latest essay.
    lede: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Short pieces of site copy, such as the author bio.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
});

// All publications and patents live in one file.
const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    kind: z.enum(['paper', 'patent']),
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    url: z.string().default(''),
    code: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { essays, pages, publications };
