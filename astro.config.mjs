// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

// Static site generated at build time. Content (photos & reviews) is pulled
// from Sanity during the build, so a new deploy reflects the latest published
// content. See README for the Studio URL and the optional auto-rebuild webhook.
export default defineConfig({
  site: 'https://www.kindredeventcollective.com',
  build: {
    // Output about.html, services.html, etc. — preserves the original URLs.
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
