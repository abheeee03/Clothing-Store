import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { ProductContext } from '../Context/Context'

const Products = () => {

  
  const {productarr} = useContext(ProductContext)


  return (
    <>
  
    <div className="ProductsCont flex flex-wrap m-10 justify-center items-center gap-10">

    {
      productarr.map((elem, id)=>{
        return(<ProductCard key={id} productTitle={elem.Title} productPrice={elem.Price} productDesc={elem.desc}/>)
      })


    }
    
    
    </div>
    
    </>
  )
}

export default Products