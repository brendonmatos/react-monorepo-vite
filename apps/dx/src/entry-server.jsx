import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { App } from 'core'
import { routes } from 'core'

export { routes }

export function render(url, context) {
  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>,
    {
      onAllReady() {
        console.log('onAllReady')
      }
    }
  )

  // transform the stream into a promise

  return new Promise((resolve, reject) => {
    const chunks = []
    pipe({
      write(chunk) {
        chunks.push(chunk)
      },
      close() {
        resolve(chunks.join(''))
      },
      abort(err) {
        reject(err)
      },
    })
  })
}