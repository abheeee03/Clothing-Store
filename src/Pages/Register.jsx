import React from 'react'
import NavBar from '../Components/NavBar'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <NavBar/>
    <div className='LoginPage flex flex-col items-center justify-center h-screen gap-12'>
      <div className="text-[1.5vmax]">Create Account & And Take <span className='BrandName'> Red Pill </span> </div>
      <div className="inputDiv flex flex-col items-center justify-center gap-8">
        <input placeholder='Enter Name...' type="text" className="P-5 text-center border-solid border-2" />
        <input placeholder='Enter Email...' type="email" className="P-5 text-center border-solid border-2" />
        <input placeholder='Enter Password...' type="password" className="P-5 text-center border-solid border-2" />
        <button className='pl-5 pr-5  rounded border-emerald-300 border-solid border-2'>Create Account</button>
        <span><Link to="/Login">Already Customer ? Click Here to Login</Link></span>
      </div>
    </div>
    </>
  )
}

export default Register