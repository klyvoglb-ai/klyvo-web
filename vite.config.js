import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths for Hostinger
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser', // Premium optimization
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  server: {
    port: 5000,
    open: true
  }
});
