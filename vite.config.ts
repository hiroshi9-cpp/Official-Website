import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['@emailjs/browser', 'react-scroll', 'react-simple-typewriter']
        }
      }
    },
    // terserOptions removed to avoid TypeScript typing mismatch in Vite config.
    // If needed, console removal can be added via a compatible plugin.
  },
  server: {
    hmr: {
      overlay: false
    }
  }
})
