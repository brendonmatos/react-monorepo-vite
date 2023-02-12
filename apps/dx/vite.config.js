/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  plugins: [
    react(),
    AutoImport({
      imports: [
        'react',
        {
          'react': [
            ["default", "React"],
            ["Suspense", "Suspense"],
          ]
        },
        'react-router-dom',
        {
          '@testing-library/react': [
            'render',
            'screen',
            'waitFor',
            'renderHook',
            'act',
          ]
        }
      ],
      dts: true,
      include: [/\.jsx?$/, /\.tsx?$/],
    }),

  ],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  build: {
    minify: false
  }
})
