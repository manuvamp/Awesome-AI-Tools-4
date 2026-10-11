import { defineConfig } from 'astro/config';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// SITE_URL / SITE_BASE are set by the deploy workflow for GitHub Pages.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://rvelamen.github.io',
  base: process.env.SITE_BASE ?? '/',
  output: 'static',
});
