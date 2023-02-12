import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)


export const prerender = async ({ distDir }) => {
  const clientDistDir = toAbsolute(distDir + '/client')
  const serverDistDir = toAbsolute(distDir + '/server')
  const template = await fs.readFile(clientDistDir + '/index.html', 'utf-8')
  const { render, routes } = await import(serverDistDir + '/entry-server.js')
  for (const url of routes) {
    const context = {}
    const appHtml = await render(url, context)
    const html = template.replace(`<!--app-html-->`, appHtml)
    const fileName = ['', '/'].includes(url) ? '/index' : url
    const filePath = `${clientDistDir}${fileName}.html`
    await fs.writeFile(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
}