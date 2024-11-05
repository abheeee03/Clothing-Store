import React from 'react'

const ProductCard = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[350px] rounded-xl p-5 bg-gray-300 w-[400px]'>
        <div className="productImg bg-black"></div>
    <div className="ProductTitle text-xl">
            Product Name
        </div>
        <p className="ProductDesc text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium alias perferendis corrupti recusandae? Nemo mollitia aliquam sint eveniet ducimus!
        </p>
        <div className="Price text-xl">
            Rs.999/-
        </div>
    </div>
  )
}

export default ProductCard