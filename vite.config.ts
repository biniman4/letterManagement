import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Add the base field with your repo name
export default defineConfig({
  base: '/letterManagement/',
  plugins: [react()],
})
