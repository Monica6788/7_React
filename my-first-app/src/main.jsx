import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App이라는 컴포넌트가 추가되어 있음 */}
    <App />
  </StrictMode>,
)
