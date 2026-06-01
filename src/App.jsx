import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Shop from './pages/Product'
function App() {
 

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/product' element={<Product />} />
  </Routes>
     </>
  )
}

export default App
