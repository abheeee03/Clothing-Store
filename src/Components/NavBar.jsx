import React from 'react'
import { CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiShop } from "react-icons/ci";



const NavBar = () => {
  return (
    <div className=' fixed w-[100%] flex items-center justify-between p-4 top-0 bg-white'>
      <h1 className='ml-4 text-xl'>Bazaar</h1>
      <div className="SearchBarDiv">
        <input type="text" placeholder='Search Products.....' className="text-center h-[30px] w-[300px]" />
        <button className='ml-6 searchBtn'>Search</button>
      </div>
      <div className="linksDiv flex gap-5 mr-8">
        <a href=""> <CiLogin />
        SignUp</a>
        <a href=""> <CgProfile />
        Login</a>
        <a href=""> <CiShop />Become Supplier</a>
      </div>
    </div>
  )
}

export default NavBar