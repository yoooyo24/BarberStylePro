import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static', // Pure static site for marketing
  // Only set site and base for production builds (GitHub Pages)
  site: process.env.NODE_ENV === 'production' ? 'https://YOUR_GITHUB_USERNAME.github.io' : undefined,
  base: process.env.NODE_ENV === 'production' ? '/BarberStylePro' : undefined,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react()
  ],
  vite: {
    ssr: {
      noExternal: ['@radix-ui/*']
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});