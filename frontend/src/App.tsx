import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { ProductPage } from './pages/ProductPage'
import { AddToCartPage } from './pages/AddToCartPage'

import { MyAccount } from './pages/MyAccount'
import { Orders } from './components/Account/Orders'
import { SavedAddresses } from './components/Account/SavedAddresses'
import { CartSection } from './components/Cart/CartSection'

function App() {
  return (
    <>
      <div id='sdHeader' className='comp-header reset-padding'>
        <Header />
      </div>
      <CartSection/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productTitle/:productId' element={<ProductPage />} />
        <Route path='/cart/addTocart/:productId' element={<AddToCartPage />} />
        <Route path='/myaccount/' element={<MyAccount />}>
            <Route path="myorders" element={<Orders />} />
            <Route path="savedAddresses" element={<SavedAddresses />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
