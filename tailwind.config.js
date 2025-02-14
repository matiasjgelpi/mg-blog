/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        robotoMono: ["Roboto Mono", "monospace"],
        monserrat: ["Monserrat Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
