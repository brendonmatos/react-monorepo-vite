import { createServer } from 'vite'

export const createViteServer = async ({
  root = process.cwd(),
  isTest = false,
  hmrPort,
}) => {
  const viteConfig = await import('../vite.config.js')

  return createServer({
    ...viteConfig,
    root,
    logLevel: isTest ? 'error' : 'info',
    server: {
      middlewareMode: true,
      watch: {
        // During tests we edit the files too fast and sometimes chokidar
        // misses change events, so enforce polling for consistency
        usePolling: true,
        interval: 100,
      },
      hmr: {
        port: hmrPort,
      },
    },
    appType: 'custom',
  })
}