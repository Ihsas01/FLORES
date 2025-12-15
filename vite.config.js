import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages expects assets under the repo name path
  base: '/FLORES/',
  plugins: [react()],
})

