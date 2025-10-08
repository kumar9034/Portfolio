import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='w-full h-auto bg-[#0A0318]'>
    
    <div className=' sm:flex  sm:pl-20 pl-5 pr-10 pt-10 '>
      <div className='flex flex-col'>
        <div className="flex items-center gap-3">
          <div className="sm:w-[47px] w-[35px] sm:h-[46px] h-[35px] bg-gradient-to-r from-[#FFD66E] to-[#FE9502] rounded-full sm:text-sm text-[10px] text-white flex items-center justify-center font-semibold">
            RK
          </div>
          <div className="flex flex-col">
            <span className="font-serifpro italic sm:text-[17px] text-[15px] text-white">
              Rahul Kumar
            </span>
            <span className="font-serifpro italic sm:text-[8px] text-[8px] -mt-1 text-white">
              Full-Stack Developer
            </span>
          </div>
        </div>
        <p className='text-white text-[10px] w-50 mt-2'>I build production-ready web apps with clean UI and reliable backends. Available for freelance and internships.</p>
      </div>
      <div className='flex flex-col sm:ml-25 gap-1 mt-5 '>
        <p className='text-white text-sm font-serifpro font-[500]'>Quick links</p>
        <a className='font-serifpro text-white text-[11px] font-[400] italic ' href="#">Home</a>
        <a className='font-serifpro text-white text-[11px] font-[400] italic' href="#">Project</a>
        <a className='font-serifpro text-white text-[11px] font-[400] italic' href="#">About me</a>
        <a className='font-serifpro text-white text-[11px] font-[400] italic' href="#">Contact</a>
      </div>
      <div className='flex flex-col gap-1 sm:ml-25 mt-5'>
        <h1 className='text-sm font-serifpro font-[500] text-white'>Contact</h1>
        <p className='text-white font-serifpro font-[400] flex text-[13px] '>email : <a className='text-[#FFD66E] ml-2 text-[12px]' href="">Kumarrajput040202003@gmail.com</a>
        </p>
        <p className='text-white font-serifpro font-[400] flex text-[13px] '>Address : <a className=' ml-2 text-[12px]' href="">Bawal, Rewari, Haryana, (123501), india</a>
        </p>
        <div className='flex gap-3 ml-5 mt-3'>
          <a href="">
            <RiInstagramFill color='white' size={25} />
          </a>
          <FaGithub size={25} color='white' />
          <IoLogoLinkedin size={25} color='white' />
        </div>
      </div>
        <div className='sm:ml-25 mt-5 '>
          <p className='text-white font-serifpro font-[500] text-sm'>Newsletter</p>
          <p className='text-white font-serifpro font-[400] text-[10px] w-40 mt-2'>Get occasional updates about new projects and availability. No spam.</p>
          <div className='flex gap-4'>
          <div className='w-30 h-10 bg-[#3B3A39] rounded-lg mt-5'>
            <input className='w-full h-full text-white text-[12px]  px-3  ' type="text" placeholder='youexample@.com' />
          </div>
          <div className='w-30 h-10 bg-[#FE9502] rounded-lg mt-5'>
            <p className='w-full h-full text-white text-[13px]  px-7 font-serifpro italic py-3' >Subscribe</p>
          </div>

          </div>
          <p className='text-[10px] font-serifpro italic text-white w-60 mt-4 '>By subscribing you agree to receive occasional updates. You can unsubscribe at any time.</p>
        </div>
    </div>
        <div className='border-t-1 w-full h-12 border-[#686767] sm:mt-25 mt-15 flex items-center justify-between sm:px-10 px-5'>
          <div>
            <h1 className='text-white sm:text-[10px] text-[8px] font-serifpro italic  '>© 2025 Rahul Kumar. All rights reserved</h1>
          </div>
          <div className='flex gap-5 items-center'>
            <p className='text-white sm:text-[10px] text-[8px] font-serifpro italic '>privacy</p>
            <p className='text-white sm:text-[10px] text-[8px] font-serifpro italic '>terms</p>
          <div className='text-white sm:text-[10px] text-[8px] font-serifpro px-4  py-2 bg-[#FE9502] rounded-lg'>
            Back to Top
          </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
