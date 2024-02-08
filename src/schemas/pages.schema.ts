import { defineCollection, z } from 'astro:content'

export const pagesSchema = defineCollection({
  type: 'data',
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    }),
    sections: z.any(),
  }),
})
