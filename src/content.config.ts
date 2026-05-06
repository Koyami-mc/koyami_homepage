// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const albumSchema = z.object({
  title: z.string(),
  about: z.string(),
  count: z.string(),
  image: z.string(),
  date: z.string(),
  price: z.string(),
  description: z.string(),
  description2: z.string().optional(),
  boothLink: z.string().url().optional(),
  bandcampLink: z.string().url().optional(),
  youtubeEmbed: z.string().url().optional(),
});

const selfReleases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/self-releases' }),
  schema: albumSchema,
});

const others = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/others' }),
  schema: albumSchema,
});

const participationWorks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/participation-works' }),
  schema: z.object({
    title: z.string(),
    about: z.string(),
    image: z.string(),
    date: z.string(),
    url: z.string(),    // 外部リンク（YouTube等）
  }),
});

export const collections = {
  'self-releases': selfReleases,
  'others': others,
  'participation-works': participationWorks,  // ← 追加
};