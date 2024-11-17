import { defineConfig } from 'astro/config';


import mdx from '@astrojs/mdx';


import netlify from '@astrojs/netlify/functions';


// <https://astro.build/config>
export default defineConfig({
  // 追加ここから

  content: {
    collections: {
      'self-releases': {
        // 自由に設定可能なオプション
      },
      'others': {
        // 自由に設定可能なオプション
      },
    },
  },

  // 追加ここまで
  server: {
    host: true,
    open: true
  },

  integrations: [mdx()],
  output: 'server',
  adapter: netlify(),
});