import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../../components/ContextAPI";

const Pagethree = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const { setProject_id } = useContext(ProjectContext)

  const fetchProjects = async () => {
    try {
      const API = import.meta.env.VITE_API_URL;
      const res = await axios.get(`${API}/newproject/allprojects`);
      console.log(res.data);
      setData(res.data.projects || res.data); // depends on backend response
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  const handlebutton = (id, name) => {
    navigate(`/${name}/${id}`)
    setProject_id(id)
    localStorage.setItem("project_id", id)
  }

  return (
    <div>
      <Header />
      <div className="w-full h-auto sm:px-20 px-5 py-10 mt-10">
        <div className="flex justify-between">
          <div>
            <h1 className="sm:text-lg text-sm font-serifpro font-[700]">
              Projects
            </h1>
            <p className="sm:text-sm w-50 sm:w-full text-[10px] font-serifpro">
              Detailed list of selected projects — click a project to open details.
            </p>
          </div>
          <div>
            <a href="/add-project">
              <h1 className="sm:text-[15px] text-[12px] font-serifpro font-bold">
                Add Project
              </h1>
            </a>
          </div>
        </div>

        <div className="w-full sm:px-15 px-8 py-10">
          <div className="mt-10 flex flex-wrap gap-10 justify-center">
            {data.length > 0 ? (
              data.map((project) => (
                <div
                  onClick={() => handlebutton(project._id, project.name)}
                  key={project._id}
                  className="sm:w-[30%] w-[95%] h-auto  bg-gradient-to-tr from-[#CB7700] to-[#FFD68D] text-white border-[1px] border-[#DCD6D6] px-7 py-7 rounded-2xl hover:scale-98 cursor-pointer hover:shadow-[-10px_10px_20px_rgba(0,0,0,0.10)] transition-transform transform duration-300"
                >
                  <div className="w-full h-auto rounded-sm overflow-hidden  ">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-contain  hover:scale-109 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h1 className="text-md font-serifpro font-bold mt-10">
                      {project.name}
                    </h1>
                    <p className="text-[10px] font-serifpro italic line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3 text-black">
                      {project.tool.split(",").map((tool, idx) => (
                        <div
                          key={idx}
                          className="px-2 py-1 bg-[#F5F2F2] shadow-lg text-[8px] font-serifpro italic rounded"
                        >
                          {tool.trim()}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No projects found</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Pagethree;
