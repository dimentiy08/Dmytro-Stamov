import React from 'react'
import ReactDOM from 'react-dom/client'
import Input from './Input.jsx'
import './index.css'
import Title from './Title.jsx'
import CodeAria from './Code-text-aria.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title />
    <Input />
    <CodeAria />
  </React.StrictMode>,
)
