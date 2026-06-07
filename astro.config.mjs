// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

// Static site generated at build time. Content (photos & reviews) is pulled
// from Sanity during the build, so a new deploy reflects the latest published
// content. See README for the Studio URL and the optional auto-rebuild webhook.
export default defineConfig({
  site: 'https://www.kindredeventcollective.com',
  // Clean, extensionless URLs (/about). Astro emits about.html; Vercel's
  // cleanUrls serves it at /about and redirects /about.html → /about.
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sanity({
      projectId: 'ixmyxkfg',
      dataset: 'production',
      apiVersion: '2026-02-01',
      // false = always fetch the freshest published content at build time.
      useCdn: false,
    }),
  ],
});
