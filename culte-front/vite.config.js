import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  root: fileURLToPath(new URL('./', import.meta.url)),
  publicDir: fileURLToPath(new URL('./assets/images', import.meta.url)),
  build: {
    outDir: fileURLToPath(new URL('../dist', import.meta.url)),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        events: fileURLToPath(new URL('./pages/evenements.html', import.meta.url)),
        prayer: fileURLToPath(new URL('./pages/priere.html', import.meta.url))
      }
    }
  },
  server: {
    port: 3000,
    hot: true
  }
})