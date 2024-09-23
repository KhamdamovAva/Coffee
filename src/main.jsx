import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './components/Context/CartContext.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter basename='/Coffee/'>
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
)
