import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Title from './components/Tittle.jsx'
import Emoji from './components/Emojis.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Title />
   <Emoji />
  </StrictMode>,
)
