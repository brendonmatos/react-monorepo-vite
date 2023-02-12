import ReactDOM from 'react-dom/client'
import { App } from 'core'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrateRoot(document.getElementById('root'),
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
