import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy : {
      '/api': {
        target: 'htttp://localhost:3000',
        secure:false
      }
    }
  },
  plugins: [react()],
})
