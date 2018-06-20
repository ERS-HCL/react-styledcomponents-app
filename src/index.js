import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { injectGlobal } from 'styled-components'
import registerServiceWorker from './registerServiceWorker'

// Add global styles directly
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font: normal 1em/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
