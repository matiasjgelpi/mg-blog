// 1. Importa las utilidades de `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define tu colección(es)
const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    image: z.string(),
    date: z.date(),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  posts: postCollection,
};
