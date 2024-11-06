import React from 'react'
import NavBar from '../Components/NavBar'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
    <NavBar/>
    <div className='LoginPage flex flex-col items-center justify-center h-screen gap-12'>
      <div className="text-[2vmax]">Welcome Back !</div>
      <div className="inputDiv flex flex-col items-center justify-center gap-8">
        <input placeholder='Enter User Name...' type="text" className="P-5 text-center border-solid border-2" />
        <input placeholder='Enter Password...' type="password" className="P-5 text-center border-solid border-2" />
        <button className='pl-5 pr-5  rounded border-emerald-300 border-solid border-2'>Login</button>
        <span><Link to="/Register">New Customer ? Click Here to Register</Link></span>
      </div>
    </div>
    </>
  )

}

export default Login