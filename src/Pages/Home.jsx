import React from 'react'
import NavBar from '../Components/NavBar'
import CategoryTab from '../Components/CategoryTab'
import ProductSwiper from '../Components/ProductSwiper'

const Home = () => {
  return (
    <>
      {/* <NavBar/> */}
      {/* <CategoryTab/> */}
      <div className="HomeMain bg-cyan-100 h-screen w-full">
        <ProductSwiper/>
      </div>
    </>
  )
}

export default Home