import React from 'react'
import Suit from '../Products/Suit'
import Shirt from '../Products/Shirt'
import ProductDetails from './ProductDetails'
import {Routes,Route} from 'react-router-dom'
import Pant from '../Products/Pant'
import Cart from './Cart'


const AllRoutes = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Pant/>}/>
        <Route path='/suit' element={<Suit/>}/>
        <Route path='/shirt' element={<Shirt/>}/>
        <Route path="/product/:id" element={<ProductDetails />} /> 
        <Route path="/cart" element={<Cart/>} />

         {/* Rajbir */}
        <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/cart" element={<AddToCartPage />} />
      </Routes>

         
    </>
  )
}

export default AllRoutes