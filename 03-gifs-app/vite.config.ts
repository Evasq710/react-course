// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'  // para poder agregar objeto "test"
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true
  },
})
