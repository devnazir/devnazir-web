import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});