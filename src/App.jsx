import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product';
import Login from './pages/Login'
import Checkout from './pages/Checkout';
import Cart from './pages/Cart'
import Register from './pages/Register'
function App() {
 

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/product' element={<Product />} />
    <Route path='/login' element={<Login />} />
    <Route path='/Register' element={<Register />} />
    <Route path='/checkout' element={<Checkout />} />
    <Route path='/Cart' element={<Cart />} />
  </Routes>
     </>
  )
}

export default App
