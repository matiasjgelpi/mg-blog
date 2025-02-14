// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import netlify from "@astrojs/netlify";
import keystatic from "@keystatic/astro";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");

console.log(env.SKIP_KEYSTATIC);

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    markdoc(),
    ...(env.SKIP_KEYSTATIC !== 'false' ? [] : [keystatic()]),
  ],
  adapter: netlify(),

  vite: {
    optimizeDeps: {
      include: ["react-compiler-runtime"],
    },
  },
});
