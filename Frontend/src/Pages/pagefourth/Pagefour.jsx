import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Pagefour = () => {
  return (
    <div>
      <Header/>
      <div className='w-full h-auto sm:px-20 px-5 py-10'>
        <h1 className='text-xl font-serifpro font-[800]'>Contact</h1>
        <p className='text-sm font-serifpro '>Send a message or download my CV.</p>

        <div className='mt-10 sm:flex  sm:gap-15 sm:ml-20  '>
            <div className='sm:w-100 w-80 h-auto border-[0.8px] border-[#DBD6D6] rounded-lg shadow-lg sm:px-10 px-5 py-10'>
                <div className='flex flex-col gap-3'>
                    <h1> Name</h1>
                    <div className='w-50 ml-5 h-8 border-[0.8px] border-[#DBD6D6] rounded-md'>
                        <input className='px-4 w-full h-full outline-none  ' type="text" placeholder='name' />
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-3'>
                    <h1>Email</h1>
                    <div className='w-50 ml-5 h-8 border-[0.8px] border-[#DBD6D6] rounded-md'>
                        <input className='px-4 w-full h-full outline-none ' type="text" placeholder='your email' />
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-3'>
                    <h1>Message</h1>
                    <div className='w-50 ml-5 h-20 border-[0.8px] border-[#DBD6D6] rounded-md'>
                        <textarea className='px-4 w-full h-full outline-none  ' type="text" placeholder='Message......' />
                    </div>
                </div>
                <button
                className='px-4 py-2 mt-10 text-white font-serifpro bg-[#FE9502] rounded-md cursor-pointer'>Send message</button>
            </div>
            <div className='sm:w-100 w-80 h-100 mt-10  shadow-lg rounded-lg border-[0.8px] border-[#DBD6D6] sm:px-10 px-3 py-10 '>
                <h1 className='text-md font-serifpro font-[800] '>Get in touch</h1>
                <span className='text-sm font-serifpro font-[800] mt-4 flex '>Email :<p className='text-[12px] ml-2 font-serifpro italic font-[400] '>kumarrajput040202003@gmail.com</p></span>
                <span className='text-sm font-serifpro font-[800] flex '>Address :<p className='text-[12px] ml-2 font-serifpro italic font-[400] '>Bawal, Rewari, Haryana, (123501), india</p></span>
                <a href="CV.pdf">
                <button className='px-4 py-2 text-[12px] font-serifpro cursor-pointer font-[700] text-[#AEADAD] border-1 border-[#AEADAD] rounded-lg shadow-lg mt-5'>Download CV</button>
                </a>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Pagefour
