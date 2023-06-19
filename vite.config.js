import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import historyApiFallback from 'vite-plugin-history-api-fallback';

export default defineConfig({
  plugins: [
    react(),
    historyApiFallback({
      fallbackPath: '/',
    }),
  ],
});
