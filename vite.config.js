import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add the base path from an environment variable.
  // It defaults to '/' if the variable is not set.
  base: process.env.VITE_BASE_URL || '/personal-cloud',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})