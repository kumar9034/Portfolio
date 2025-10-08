import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useContext } from 'react'
import { ProjectContext } from '../../components/ContextAPI'
import axios from 'axios'
import { FaArrowRight } from "react-icons/fa6";

const Pagefive = () => {
const {project_id} = useContext(ProjectContext)
const [detail, setdetail] = useState([])
const fatchproject = async ()=>{
      const API = import.meta.env.VITE_API_URL
      const id= localStorage.getItem("project_id")
      const res= await axios.get(`${API}/newproject/detailproject/${id }`, 
      {headers: {"Content-Type": "application/json"}})
      console.log(res)
      setdetail(res.data)
    }

    useEffect(()=>{
      fatchproject()
    },[])
    const handlebutton =()=>{
      detail.link
    }
  return (
    <div>
      <Header/>
      <div className='w-full h-auto sm:px-10 px-4 py-10 '>
            <h1 className='text-xl font-serifpro font-bold mt-10 '>{detail.name}</h1>
            <div className='sm:w-[90%] w-full h-auto  sm:ml-25  bg-gradient-to-tr from-[#CB7700] to-[#FFD68D]  mt-10 rounded-lg sm:px-10 px-5 py-5 border-[0.8px] shadow-lg border-[#CAC7C7]'>
                <div className='w-[90%] sm:h-[60vh] h-[20vh] sm:ml-15 ml-4 overflow-hidden rounded-lg '>
                    <img className='h-full w-full object-contain rounded-lg hover:scale-109 transition-transform duration-300' src={detail.image} alt="" />
                </div>
                <p className='sm:text-[16px] text-[10px] text-white sm:ml-14 mt-5  font-serifpro italic  '>{detail.description}</p>

                <div className='flex flex-wrap w-full gap-5 sm:ml-10 mt-5'>
                  {detail.tool?.split(",").map((tool, idx) => (
                    <div key={idx} className='px-4 py-2 bg-[#F5F2F2] shadow-lg text-[10px] font-serifpro italic'><h1>{tool.trim()}</h1></div>
                 ))}
                </div>
                <div className=''>
                  <a href={detail.link}>
                  <h1
                  className='fontserifpro hover:scale-96 cursor-pointer text-white transition-transform transform duration-300  font-[700] italic text-[15px] sm:ml-15 ml-8 mt-10 flex gap-3'>view website <FaArrowRight size={18} className='mt-1' /> </h1>
                  </a>
                </div>
            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Pagefive
