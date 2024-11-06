import React, { useContext } from 'react'



const ProductCard = (props) => {
  
  
  return (
<>
        <div className='flex flex-col justify-center items-center h-[350px] rounded-xl p-5 bg-gray-300 w-[400px]'>
        <div className="productImg bg-black"></div>
    <div className="ProductTitle text-xl">
            {props.productTitle}
        </div>
        <p className="ProductDesc text-center">
            {props.productDesc}
        </p>
        <div className="Price text-xl">
          Rs.
        {props.productPrice}
        </div>
    </div>

  </>
  )
}

export default ProductCard