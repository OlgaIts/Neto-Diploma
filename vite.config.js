import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@entities': '/src/entities',
      '@features': '/src/features',
      '@svg': '/src/shared/assets/svg',
      '@img': '/src/shared/assets/img',
      '@pages': '/src/pages',
      '@shared': '/src/shared',
      '@types': '/src/types',
      '@widgets': '/src/widgets',
    },
  },
});
