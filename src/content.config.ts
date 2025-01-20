import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Define la colección de posts
const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      date: z.date(),
      excerpt: z.string().optional(),
    }),
});

// Exporta las colecciones
export const collections = {
  posts,
};
