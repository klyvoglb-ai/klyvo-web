import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths for Hostinger
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser', // Premium optimization
    rollupOptions: {
      input: {
        main: './index.html',
        diagnostico: './diagnostico.html',
        contacto: './contacto.html'
      },
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  },
  server: {
    port: 5000,
    open: true
  }
});
