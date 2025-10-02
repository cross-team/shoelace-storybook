import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public',
  server: {
    fs: {
      allow: ['..'],
    },
  },
  optimizeDeps: {
    include: ['@shoelace-style/shoelace'],
  },
});
