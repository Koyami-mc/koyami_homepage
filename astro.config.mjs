import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';  // ← /functions を削除

export default defineConfig({
  server: {
    host: true,
    open: true
  },
  integrations: [mdx()],
  output: 'server',
  adapter: netlify(),
});