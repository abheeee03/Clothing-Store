import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithubsponsors } from "react-icons/si";


const Footer = () => {
  return (
    <>
      <hr />
    <div className='flex flex-col items-center m-10 justify-center'>
        A Product Created With <SiGithubsponsors /> By Abhee
        <span className='mt-10 text-lg'>Connect Me On</span>
        <div className="bottomLinks text-[30px] flex gap-12 m-10">
            <a href="https://github.com/abheeee03"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/AbhayNimbalkar"><FaLinkedin /></a>
            <a href="https://x.com/_AbhayNimbalkar"><FaXTwitter /></a>
        </div>
    </div>
    </>
  )
}

export default Footer