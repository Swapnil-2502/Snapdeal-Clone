import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { ProductPage } from './pages/ProductPage'
import { AddToCartPage } from './pages/AddToCartPage'
import { MyAccount } from './pages/MyAccount'
import { Orders } from './components/Account/Orders'
import { SavedAddresses } from './components/Account/SavedAddresses'
import { CartSection } from './components/Cart/CartSection'
import { Payment } from './components/Payment/Payment'
import { usePayment } from './contexts/PaymentContext'
import { OrderPage } from './pages/OrderPage'
import { AdminLayout } from './admin/AdminLayout'
import { ProtectedAdminRoute } from './admin/auth/ProtectedAdminRoute'
import { AdminProductDetail } from './admin/pages/AdminProductDetail'
import { ListProductsPage } from './pages/ListProductsPage'
import { AdminProduct } from './admin/pages/AdminProduct'
import { AdminOrder } from './admin/pages/AdminOrder'
import { AdminOrderDetails } from './admin/pages/AdminOrderDetail'

function App() {
  const {isOpen} = usePayment()
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin')
  return (
    <>
      {!isAdminRoute && 
      <div id='sdHeader' className='comp-header reset-padding'>
        <Header />
      </div>
      }
      {isOpen && <Payment />}
      <CartSection/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }/>
        <Route path='/admin/product' element={
          <ProtectedAdminRoute>
            <AdminProduct />
          </ProtectedAdminRoute>
        }/>
        <Route path='/admin/productdetail/:productId' element={
          <ProtectedAdminRoute>
            <AdminProductDetail />
          </ProtectedAdminRoute>
          } />
        <Route path='/admin/order' element={
          <ProtectedAdminRoute>
            <AdminOrder />
          </ProtectedAdminRoute>
        }/>
        <Route path='/admin/orderdetail/:orderId' element={
          <ProtectedAdminRoute>
            <AdminOrderDetails />
          </ProtectedAdminRoute>
        }/>
        <Route path='/product/:productTitle/:productId' element={<ProductPage />} />
        <Route path='/products/:type' element={<ListProductsPage />} />
        <Route path='/products/search' element={<ListProductsPage />} />
        <Route path='/cart/addTocart/:productId' element={<AddToCartPage />} />
        <Route path='/myaccount/' element={<MyAccount />}>
            <Route path="myorders" element={<Orders />} />
            <Route path="savedAddresses" element={<SavedAddresses />} />
        </Route>
        <Route path="/orderSummary/order/:orderId" element={<OrderPage />} />

      </Routes>
    </>
  )
}

export default App
