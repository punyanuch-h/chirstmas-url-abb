import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/christmas-url-abb/",
  plugins: [react()],
  server: {
    proxy: {
      '/shorten': {
        target: 'http://localhost:8787',
        changeOrigin: true,
      },
    },
  },
});

