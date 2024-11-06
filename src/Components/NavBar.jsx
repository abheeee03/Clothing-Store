import React from 'react'
import { CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiShop } from "react-icons/ci";

import Register from '../Pages/Register';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <>
    <div className=' fixed w-[100%] flex items-center justify-between p-4 top-0 z-100 bg-white'>
    <Link to="/"><h1 className='BrandName ml-4 text-xl'>Red Pill</h1></Link>
      <div className="SearchBarDiv">
        <input type="text" placeholder='Search Products.....' className="text-center h-[30px] w-[300px]" />
        <button className='ml-6 searchBtn'>Search</button>
      </div>
      <div className="linksDiv flex gap-5 mr-8">
        <Link to='/Login'> <CiLogin />
        SignUp</Link>
        <Link to="/Register"> <CgProfile />
        Login</Link>
        <Link to="/BecomeSupplier"> <CiShop />Become Supplier</Link>
      </div>
    </div>
    <hr />
    </>
  )
}

export default NavBar