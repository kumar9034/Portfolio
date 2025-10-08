import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className='sm:flex mt-10 '>
            <div className='sm:w-[60%] w-full h-auto mt-10   sm:px-15 px-8 py-5'>
                <span className=' sm:text-[17px] text-[14px] text-[#FF9C00] font-serifpro font-[500] '>
                    Hello - I'm
                </span>
                <h1 className='sm:text-[50px] text-[35px] font-serifpro -mt-1 font-[700]'>Rahul kumar</h1>
                <p className='sm:text-sm text-[13px]  font-serifpro italic sm:w-[80%] w-full'>I build professional, production-ready web applications — from accessible interfaces to robust backend APIs. I convert Figma prototypes to clean code, and I focus on performance, maintainability and strong UX.</p>
                <div className='flex gap-10 sm:mt-10 mt-5'>
                    <button onClick={()=>navigate("/project")} className='sm:px-4 px-2 sm:py-2 py-1 sm:text-sm text-[12px] bg-gradient-to-r from-[#FFD66E] to-[#FE9502] font-serifpro italic rounded-lg text-white font-600 cursor-pointer hover:shadow-xl hover:scale-95 transform-transition transform duration-300 '>Project view</button>
                    <button onClick={()=>navigate("/contact")} className='sm:px-4 px-2 py-1  sm:py-2 sm:text-sm text-[12px] bg-gradient-to-r from-[#FFE8C7] to-[#FFFBF4] font-serifpro italic rounded-lg shadow-lg border-[1px] border-[#FFE8C7] font-600 cursor-pointer hover:shadow-xl hover:scale-95 transform-transition transform duration-300 '>Hire me</button>
                </div>
                <div className='flex sm:gap-10 gap-5 sm:mt-10 mt-5'>
                    <div className=''>
                        <span className='sm:text-md text-sm font-serifpro font-[700] italic'>Location :</span> <br />
                        <span className='sm:text-sm text-[9px] font-serifpro italic'>Bawal, Rewari, Haryana (123501), india</span>
                    </div>
                    <div>
                        <span className='sm:text-md text-sm font-serifpro font-[700] italic'>Availability :</span> <br />
                        <span className='sm:text-sm text-[9px]  -leading-0  font-serifpro italic'>Open to Full-time Job Opportunities 
                            Available for Freelance Projects (Remote & On-site)</span>

                    </div>
                </div>
            </div>
            <div className='sm:w-[40%] w-full px-8   h-100 mt-10 flex justify-center items-center '>
                <div className='sm:w-100 sm:h-100 w-80 h-80  rounded-lg bg-gradient-to-t from-[#CB7700] to-[#FFD68D] flex justify-center items-center '>
                    <div className='sm:w-70 w-50 sm:h-70 h-50 rounded-full shadow-[-10px_10px_20px_rgba(0,0,0,0.30)]  bg-white'>
                        <img className='overflow-hidden  w-full h-full rounded-full object-cover' src="image.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
