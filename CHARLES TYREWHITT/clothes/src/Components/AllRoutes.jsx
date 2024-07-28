import React from 'react'
import Suit from '../Products/Suit'
import Shirt from '../Products/Shirt'
import ProductDetails from './ProductDetails'
import {Routes,Route} from 'react-router-dom'
import Pant from '../Products/Pant'
import Cart from './Cart'
import Login from '../Navbar/Login'
import CreateAccountPage from '../Navbar/CreateAccountPage'
import Home from '../Pages/Home'




const AllRoutes = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home src="https://player.vimeo.com/progressive_redirect/playback/960180527/rendition/720p/file.mp4?loc=external&signature=4b5dc3c13d30a8c8c6e209c169e07a24982c5f5d5bc7a74b83191f2103cc53f5"/>}/>
        <Route path='/pant' element={<Pant/>}/>
        <Route path='/suit' element={<Suit/>}/>
        <Route path='/shirt' element={<Shirt/>}/>
        <Route path='/product/:id' element={<ProductDetails />} /> 
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/create-account" element={<CreateAccountPage />} />
        
      </Routes>

         
    </>
  )
}

export default AllRoutes