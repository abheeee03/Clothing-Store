import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { ProductContext } from '../Context/Context'
import LoadingSpinner from './LoadingSpinner'

const Products = () => {

  
  const {getWomensCloth, fetching, ProductList} = useContext(ProductContext)


  return (
    <>
  
    <div className="ProductsCont flex flex-wrap m-10 justify-center items-center gap-10">

    {fetching&&<LoadingSpinner/>}
    {
      !fetching &&
      ProductList.products.map((elem)=><ProductCard thumbnail={elem.thumbnail} key={elem.id} productTitle={elem.title} productPrice={elem.price} productDesc={elem.description}/>)
    }
    
    
    </div>
    
    </>
  )
}

export default Products