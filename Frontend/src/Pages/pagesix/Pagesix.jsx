import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Pagesix = () => {
 const [name, setname] = useState("")
 const [description, setDescription] = useState("")
 const [tool, SetTool] = useState("")
 const [link, setLink] = useState("")
 const [imageurl, setfile ] = useState(null)
  const [loading, setLoading] = useState(false);
  const navigate =useNavigate()

const handlefile = async (e)=>{
  const file = e.target.files[0]
  if(!file){
    console.log("image not upload")
  }

  const image = new FormData
  image.append("image", file)
  try{
    const API = import.meta.env.VITE_API_URL
    const res = await axios.post(`${API}/newproject/uploadimage`, image, {headers: {
      "Content-Type": "multipart/form-data"
    }})
    console.log(res)
    setfile(res.data.image?.imageurl)
    console.log(imageurl)

  }catch(erorr){
    console.log(erorr)
  }finally{
    setLoading(false)
  }
}

 
 const handlebutton = async ()=>{
    const formdata = new FormData()
    formdata.append("name", name)
    formdata.append("description", description)
    formdata.append("tool", tool)
    formdata.append("link", link)
    formdata.append("image", imageurl)


    let API = import.meta.env.VITE_API_URL
    const res = await axios.post( `${API}/newproject/project`,formdata, {headers: {"Content-Type": "application/json"}}
    )
    console.log(res)
    if(res.status === 200){
      navigate("/project")
    }
  }
  return (
    <div>
      <Header />
      <div className='w-full h-auto sm:p-15 px-5 py-10 '>
        <div className='shadow-xl border border-[#938F8F] w-full h-full rounded-lg sm:flex '>
          <div className='flex flex-col gap-4 sm:w-[40%] w-full h-full px-10 py-10'>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-serifpro italic font-[500]'>Name project</p>
              <div className='w-40 h-10 border-1 rounded-md ml-5 '>
                <input 
                value={name}
                onChange={(e)=>setname(e.target.value)}
                className='w-full h-full border-[#938F8F] px-4 text-[13px] outline-none' type="text" placeholder='your project name' />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-serifpro italic font-[500]'> project tools</p>
              <div className='w-40 h-10 border-1 border-[#938F8F] rounded-md ml-5 '>
                <input
                value={tool}
                onChange={(e)=>SetTool(e.target.value)}
                className='w-full h-full px-4 text-[13px] outline-none' type="text" placeholder='your project tools' />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-serifpro italic font-[500]'> project link</p>
              <div className='w-40 h-10 border-1 border-[#938F8F] rounded-md ml-5 '>
                <input
                value={link}
                onChange={(e)=>setLink(e.target.value)}
                className='w-full h-full px-4 text-[13px] outline-none' type="text" placeholder='your project link' />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-serifpro italic font-[500]'> project description</p>
              <div className='w-60 h-15 border-1 border-[#938F8F] rounded-md ml-5 '>
                <textarea 
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                className='w-full h-full px-4 py-2 text-[13px] outline-none' type="text" placeholder='your prject description....' />
              </div>
            </div>
          </div>
          <div className='sm:w-[60%] w-full  h-full sm:px-10 px-5 sm:py-10 py-5'>
            <div className='flex  gap-2'>
              <p className='text-sm font-serifpro italic font-[600] mt-3'> project image:</p>
              <div className='w-40 h-10 border-1 border-[#938F8F] rounded-md ml-5 '>
                <input 
                onChange={handlefile}
                className='w-full h-full px-4 text-[13px] outline-none' type="file" placeholder='your project link' />
                {loading && <p>Uploading...</p>}
              </div>
            </div>
            {imageurl && (
            <div className='w-[50%] h-[50vh] rounded-lg mt-10 ml-15 '>
              <img className='w-auto h-auto sm:object-container object-container rounded-lg' src={imageurl} alt="" />
            </div>
            )}
            <div 
            onClick={handlebutton}
            className='px-5 py-3 cursor-pointer hover:shadow-lg hover:scale-90 transition-transform transform duration-300  mt-10 sm:ml-100 ml-40 w-25 text-white rounded-xl text-sm font-serifpro font-[700] bg-[#FE9502] '> uploaded</div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Pagesix
