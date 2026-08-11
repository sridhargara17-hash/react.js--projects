import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HiddenSearchBar from './HiddenSearchBar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <HiddenSearchBar />  
  </StrictMode>,
)
