#!/usr/bin/env node
import { build } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import viteConfig from '../vite.config.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')

// Build client
await build({
  ...viteConfig,
  root: path.resolve(__dirname, '../src'),
  build: {
    emptyOutDir: true,
    outDir: path.join(distDir, 'client'),
  }
})

// Build server
await build({
  ...viteConfig,
  root: path.resolve(__dirname, '../src'),
  build: {
    emptyOutDir: true,
    outDir: path.join(distDir, 'server'),
    ssr: path.resolve(__dirname, '../src/entry-server.jsx'),
  }
})

const { prerender } = await import('../src/prerender.js')
await prerender({ distDir })


