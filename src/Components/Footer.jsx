import React from 'react'

const Footer = () => {
  return (
    <>
      <hr />
    <div className='flex flex-col items-center m-10 justify-center'>
        A Product Created With Love By Abhee
        <span className='mt-10 text-lg'>Connect Me On</span>
        <div className="bottomLinks flex gap-10 m-10">
            <a href="">Github</a>
            <a href="">LinkedIn</a>
            <a href="">Twitter</a>
        </div>
    </div>
    </>
  )
}

export default Footer