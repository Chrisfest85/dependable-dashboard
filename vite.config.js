import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@features': resolve(__dirname, './src/features'),
      '@services': resolve(__dirname, './src/services'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@styles': resolve(__dirname, './src/styles'),
      '@config': resolve(__dirname, './src/config'),
    },
  },
})
