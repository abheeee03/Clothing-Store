import React, { useContext, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import { ProductContext } from '../Context/Context'
import Products from '../Components/Products'
import LoadingSpinner from '../Components/LoadingSpinner'

const WomensClothing = () => {


  
  return (
    <>
    <NavBar/>  
    {fetching && <LoadingSpinner/>}
    {/* {!fetching && <Products/>} */}
    
    </>
  )
}

export default WomensClothing