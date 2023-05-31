import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Monitor } from './components/Monitor/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Monitor />
  </React.StrictMode>,
)
