import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product';
import Login from './pages/Login'
function App() {
 

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/product' element={<Product />} />
    <Route path='/login' element={<Login />} />
  </Routes>
     </>
  )
}

export default App
