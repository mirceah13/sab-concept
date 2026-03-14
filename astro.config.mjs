import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sab-concept.netlify.app',
  integrations: [
    tailwind(),
  ],
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});
