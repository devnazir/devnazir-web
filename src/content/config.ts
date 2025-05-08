import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  
  schema: z.object({
    year: z.string(),
    company: z.string(),
    link: z.string().nullable().optional(),
    title: z.string(),
    imgSrc: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  projects,
}; 