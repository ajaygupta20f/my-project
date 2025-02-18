import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'react-vendor';
            if (id.includes('@mui')) return 'mui-vendor';
            if (id.includes('firebase')) return 'firebase-vendor';
            return 'vendor'; // Default group for other libraries
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000 KB (optional)
  },
});
