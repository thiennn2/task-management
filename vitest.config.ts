/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    watch: false,
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
    },
    exclude: ['**/node_modules/**', '**/dist/**'],
  },
  server: {
    fs: {
      strict: false,
    },
  },
})
