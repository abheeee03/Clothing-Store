import React from 'react'
import { Link } from 'react-router-dom'

const CategoryTab = () => {
  return (
    <div className='w-full text-m flex items-center justify-evenly mt-[50px] h-[100px]'>
       <Link to="/Mens">Mens</Link>
       <Link to="/Womens">Womens</Link>
       <Link to="/Kids">Kids</Link>
    </div>
  )
}

export default CategoryTab