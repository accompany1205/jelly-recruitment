import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Bind IPv4 so http://localhost:5173 works in all browsers (Vite may otherwise listen only on [::1])
    host: '127.0.0.1',
    open: true,
  },
})
