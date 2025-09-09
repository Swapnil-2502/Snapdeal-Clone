import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { ProductPage } from './pages/ProductPage'
import { AddToCartPage } from './pages/AddToCartPage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productTitle/:productId' element={<ProductPage />} />
        <Route path='/cart/addTocart/:productId' element={<AddToCartPage />} />
      </Routes>
    </>
  )
}

export default App
