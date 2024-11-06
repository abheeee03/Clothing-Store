import React, { useContext } from 'react'



const ProductCard = (props) => {
  
  
  return (
<>
        <div className='productCard flex flex-col justify-center items-center rounded-xl p-5 bg-gray-300 '>
        <div className="productImg">
          <img src={props.thumbnail} alt="" />
        </div>
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