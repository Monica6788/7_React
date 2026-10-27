import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle /> {/* css 적용해도 되긴 하다~ */}
    {/* BrowserRouter: 최상위 컴포넌트를 감싸며 라우팅 기능을 활성화한다. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
