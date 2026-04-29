import React from 'react'  // 👈 이 줄이 반드시 있어야 'React is not defined' 에러가 사라집니다!
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// 혹시 CSS 파일이 있다면 여기서 불러오세요 (예: import './index.css')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)