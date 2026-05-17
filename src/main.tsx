import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<link
  href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
  rel='stylesheet'
></link>
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
