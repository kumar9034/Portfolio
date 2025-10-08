import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Pagesecond = () => {
  return (
    <div>
      <Header/>
      <div className='w-full h-auto sm:px-22 px-5 py-10 mt-10'>
        <div>
            <h1 className='sm:text-2xl text-lg italic font-serifpro font-[600]'>About me</h1>
            <p className='sm:text-lg text-sm mt-5 font-serifpro italic   '>
                I’m a BCA student (Semester 4) and a full‑stack developer. My work focuses on building maintainable codebases, accessible UI and efficient server-side APIs. I enjoy solving problems, writing clean algorithms and learning new technologies like Node.js, Express and MongoDB.
            </p>
        </div>
        <div className='flex sm:gap-20 gap-5 mt-10 sm:ml-20 ml-5'>
            <div className='rounded-lg w-100 h-40 bg-[#EDEDED] px-5 py-10'>
                <h1 className='sm:text-md text-sm font-serifpro font-[700]'>Experience</h1>
                <p className='sm:text-sm text-[10px] font-serifpro italic  '>Developed a Social Media website using React and  node.js as part of semester project.</p>
            </div>
            <div className='rounded-lg w-100 h-40 bg-[#EDEDED] px-5 py-10'>
                <h1 className='sm:text-md text-sm font-serifpro font-[700]'>Education</h1>
                <p className='sm:text-sm text-[10px] font-serifpro italic  '>Bachelor of Computer Applications (BCA) - ongoing</p>
            </div>
        </div>
        <div>
                <h1 className='sm:text-lg text-sm font-serifpro font-[600] mt-10'>Skill</h1>
            <div className='flex flex-wrap mt-5  gap-5'>
                <div className='px-2 py-2 sm:text-[12px] text-[8px] rounded-md bg-[#EDEDED] font-serifpro  flex justify-center items-center'>HTML</div>
                <div className='px-2 py-2 sm:text-[12px] text-[8px] rounded-md bg-[#EDEDED] font-serifpro  flex justify-center items-center'>CSS/tailwind</div>
                <div className='px-2 py-2 sm:text-[12px] text-[8px] rounded-md bg-[#EDEDED] font-serifpro  flex justify-center items-center'>Javascript</div>
                <div className='px-2 py-2 sm:text-[12px] text-[8px] rounded-md bg-[#EDEDED] font-serifpro  flex justify-center items-center'>React</div>
                <div className='px-2 py-2 sm:text-[12px] text-[8px] rounded-md bg-[#EDEDED] font-serifpro  flex justify-center items-center'>Node</div>
                <div className='px-2 py-2 sm:text-[12px] text-[8px] rounded-md bg-[#EDEDED] font-serifpro  flex justify-center items-center'>Express</div>
                <div className='px-2 py-2 sm:text-[12px] text-[8px] rounded-md bg-[#EDEDED] font-serifpro  flex justify-center items-center'>MongoDB</div>
                <div className='px-2 py-2 sm:text-[12px] text-[8px] rounded-md bg-[#EDEDED] font-serifpro  flex justify-center items-center'>Figma</div>
                <div className='px-2 py-2 sm:text-[12px] text-[8px] rounded-md bg-[#EDEDED] font-serifpro  flex justify-center items-center'>Github</div>
                
                </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Pagesecond
