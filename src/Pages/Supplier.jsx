import React from 'react'
import NavBar from '../Components/NavBar'

const Supplier = () => {
  return (
    <>
    <NavBar/>
    <div className='LoginPage flex flex-col items-center justify-center h-screen gap-12'>
      <div className="text-[1.5vmax]">Become Partner of <span className='BrandName'> Red Pill </span> </div>
      <div className="inputDiv flex flex-col items-center justify-center gap-8">
        <input placeholder='Enter Name' type="text" className="P-5 text-center border-solid border-2" />
        <input placeholder='Enter Email' type="email" className="P-5 text-center border-solid border-2" />
        <textarea placeholder='Describe Your Brand' rows={6} className="text-center border-solid border-2"></textarea>
        <span className='text-sm'>
          Our Team Will Reach You, Till Then Chill
        </span>
        <button className='pl-5 pr-5  rounded border-emerald-300 border-solid border-2'>Submit</button>
      </div>
    </div>
    </>
  )
}

export default Supplier