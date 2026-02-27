import { StrictMode } from 'react'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { createRoot } from 'react-dom/client'
import './index.css'
import RadonArc from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <RadonArc />
      <Analytics />
      <SpeedInsights />
    </>
  </StrictMode>,
)
