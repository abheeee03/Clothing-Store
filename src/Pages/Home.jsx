import React from 'react'
import NavBar from '../Components/NavBar'
import CategoryTab from '../Components/CategoryTab'
import ProductSwiper from '../Components/ProductSwiper'
import Products from '../Components/Products'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <NavBar/>
      <CategoryTab/>
        <ProductSwiper/>
        <h1 className='text-center mb-12 text-lg'>Some Products You Might Like</h1>
        <Products/> 
        <Footer/>
    </>
  )
}

export default Home