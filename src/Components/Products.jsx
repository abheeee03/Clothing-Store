import React, { useEffect } from 'react'
import ProductCard from './ProductCard'

const Products = () => {

  
  let productsObj
  useEffect(()=>{
    const controller = new AbortController();
    const signal =  controller.signal;


    fetch('https://dummyjson.com/products?limit=15', {signal})
    .then(res => res.json())
    .then((obj) => {
      productsObj = obj
    });

  return (
    controller.abort()
  )

  },[])
  



  return (
    <>
    <div className="ProductsCont flex flex-wrap m-10 justify-center items-center gap-10">
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    </div>
    </>
  )
}

export default Products