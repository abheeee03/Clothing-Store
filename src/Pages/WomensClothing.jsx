import React, { useContext } from 'react'
import NavBar from '../Components/NavBar'
import { ProductContext } from '../Context/Context'
import Products from '../Components/Products'
import LoadingSpinner from '../Components/LoadingSpinner'

const WomensClothing = () => {

  const {fetching} = useContext(ProductContext)
  
  return (
    <>
    <NavBar/>  
    <div className="clothingCont h-screen flex flex-col items-center justify-center">
    {fetching && <LoadingSpinner/>}
    {!fetching && <Products/>}
    </div>
    </>
  )
}

export default WomensClothing