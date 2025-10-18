import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative base so built assets work when served from a subpath
  // (e.g., https://<user>.github.io/<repo>/). This avoids absolute
  // "/assets/..." paths which break when Pages serves from a repo path.
  base: './',
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
    // Cast to any to work around TypeScript type mismatch for terserOptions
    terserOptions: ( {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    } as any ),
  },
  server: {
    hmr: {
      overlay: false
    }
  }
})
