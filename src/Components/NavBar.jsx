import React from 'react'
import { CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiShop } from "react-icons/ci";

import Register from '../Pages/Register';

const NavBar = () => {
  return (
    <>
    <div className=' fixed w-[100%] flex items-center justify-between p-4 top-0 z-100 bg-white'>
      <h1 className='BrandName ml-4 text-xl'>Red Pill</h1>
      <div className="SearchBarDiv">
        <input type="text" placeholder='Search Products.....' className="text-center h-[30px] w-[300px]" />
        <button className='ml-6 searchBtn'>Search</button>
      </div>
      <div className="linksDiv flex gap-5 mr-8">
        <a href={<Register/>}> <CiLogin />
        SignUp</a>
        <a href=""> <CgProfile />
        Login</a>
        <a href=""> <CiShop />Become Supplier</a>
      </div>
    </div>
    <hr />
    </>
  )
}

export default NavBar