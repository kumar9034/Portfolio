import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectContext } from './ContextAPI'

const Project = () => {
   const [data, setData] = useState([])
    const navigate = useNavigate()
    const {setProject_id} = useContext(ProjectContext)

    const project =async ()=>{
      const API = import.meta.env.VITE_API_URL
      const res = await axios.get(`${API}/newproject/allprojects`)
      console.log(res)
      setData(res.data.projects)
    }
    

    useEffect(()=>{
      project()
      
    },[])

    const handlebutton= (id, name)=>{
      navigate(`/${name}/${id}`)
      setProject_id(id)
    }
  return (
    <div className='w-full h-auto sm:px-15 px-8 py-10'>
        <div className='flex justify-between '>
       <h1 className='text-lg font-serifpro italic font-[700] mt-5'>Featured work</h1>
       <p onClick={()=>navigate("/project")} className='text-sm font-serifpro font-[600] mt-6 cursor-pointer'>see more</p>
        </div>
        <div className='mt-10  flex overflow-hidden overflow-scroll no-scrollbar lg:justify-center gap-10 line-clamp-1'>
            {data.length > 0 ? (
              data.map((project) => (
                <div
                onClick={()=>handlebutton(project._id, project.name)}
                  key={project._id}
                  className="sm:w-[30%] w-[95%] h-auto bg-gradient-to-tr from-[#CB7700] to-[#FFD68D]  text-white border-[1px] border-[#DCD6D6] px-5 py-7 rounded-2xl  cursor-pointer hover:shadow-[-10px_10px_20px_rgba(0,0,0,0.10)] transition-transform transform duration-300"
                >
                  <div className="w-full h-[25vh] rounded-2xl overflow-hidden rounded-md">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-contain r hover:scale-109 transition-transform duration-300"
                    />
                  </div>
                  <h1 className="text-md font-serifpro font-bold mt-5">
                    {project.name}
                  </h1>
                  <p className="text-[10px] font-serifpro italic line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tool.split(",").map((tool, idx) => (
                      <div
                        key={idx}
                        className="px-2 py-1 bg-[#F5F2F2] text-black shadow-lg text-[8px] font-serifpro italic rounded"
                      >
                        {tool.trim()}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No projects found</p>
            )}
        </div>
    </div>
  )
}

export default Project
