import React from 'react'
import Carosell from './Carosell'
import Suit from '../Products/Suit'
import Shirt from '../Products/Shirt'
import ProductDetails from './ProductDetails'
import {Routes,Route} from 'react-router-dom'
import Pant from '../Products/Pant'


const AllRoutes = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Carosell/>}/>
        <Route path='/pant' element={<Pant/>}/>
        <Route path='/suit' element={<Suit/>}/>
        <Route path='/shirt' element={<Shirt/>}/>
        <Route path="/product/:id" element={<ProductDetails />} /> 
      </Routes>
         
    </>
  )
}

export default AllRoutes