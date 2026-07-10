import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: confirmar domínio final (lyraos.org) antes do lançamento.
export default defineConfig({
  site: 'https://lyraos.org',
  integrations: [sitemap()],
});
