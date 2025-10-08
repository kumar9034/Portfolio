import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {  // <-- lowercase 'children'
  const [project_id, setProject_id] = useState(null);

  return (
    <ProjectContext.Provider value={{ project_id, setProject_id }}>
      {children}  {/* <-- use lowercase here too */}
    </ProjectContext.Provider>
  );
};
