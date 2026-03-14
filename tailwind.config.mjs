/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#e07530',
          dark:   '#1a1a1a',
          blue:   '#3d5a8e',
          'blue-dark': '#2d4470',
          gray:   '#f5f5f5',
          light:  '#fafafa',
        },
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    typography,
  ],
};
