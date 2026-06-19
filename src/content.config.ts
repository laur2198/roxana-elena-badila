import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(170, 'description ≤ 160 caractere recomandat (pt. meta + SERP)'),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Roxana Elena Bădilă'),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      cover: z.string().optional(),
      draft: z.boolean().default(false),
      faq: z
        .array(
          z.object({
            q: z.string(),
            a: z.string(),
          })
        )
        .optional(),
    }),
});

export const collections = { blog };
