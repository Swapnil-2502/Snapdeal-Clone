import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

//Importing CSS files
import '../public/clone-styles/style1.css'
import '../public/clone-styles/style2.css'
// import '../public/clone-styles/style3.css'
// import '../public/clone-styles/style4.css'
// import '../public/clone-styles/style5.css'
import '../public/clone-styles/style7.css'
import '../public/clone-styles/style9.css'
import '../public/clone-styles/style10.css'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { CartProvider } from './contexts/CartContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
