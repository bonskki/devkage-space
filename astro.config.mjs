// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://devkage.space',
  adapter: cloudflare(),
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
