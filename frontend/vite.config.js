import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/christmas-url-abb/",
  plugins: [react()],
});

