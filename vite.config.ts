import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
