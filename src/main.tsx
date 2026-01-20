import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClickToComponent } from 'click-to-react-component'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ClickToComponent editor="vscode" />
      <App />
    </HelmetProvider>
  </StrictMode>,
)
