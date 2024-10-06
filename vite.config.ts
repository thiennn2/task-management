/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import { configDefaults } from "vitest/config";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      exclude: [
        ...(configDefaults.coverage.exclude ?? []),
        "*.config.js"
      ],
      all: true,
    },
  },
  plugins: [react()],
  build: {
    target: "esnext",
  },
})
