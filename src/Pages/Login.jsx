import React from 'react'

const Login = () => {
  return (
    <div className='LoginPage'>
      <div className="BrandName">RED PILL</div>
      <div className="inputDiv">
        <input placeholder='Enter User Name...' type="text" className="" />
        <input placeholder='Enter Password...' type="password" className="" />
        <button>Login</button>
        <span>New Customer ? <a href=""> Click Here to Register</a></span>
      </div>
    </div>
  )
}

export default Login