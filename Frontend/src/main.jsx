import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './Context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ProductProvider>
    <App />
    </ProductProvider>
  </BrowserRouter>,
)
