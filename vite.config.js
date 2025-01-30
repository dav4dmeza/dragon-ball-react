import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
})
