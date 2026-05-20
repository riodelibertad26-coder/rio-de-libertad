import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://riodelibertad26-coder.github.io',
  base: '/rio-de-libertad',
  output: 'static',
  integrations: [sitemap()],
});
