import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//  Mode Context
import { ModeProvider } from './Context/ModeContext'

ReactDOM.render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
