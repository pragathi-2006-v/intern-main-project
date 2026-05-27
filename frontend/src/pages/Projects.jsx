import { useEffect,useState }
from "react";

import axios from "axios";

import ProjectCard
from "../components/ProjectCard";

function Projects(){

  const API =
  import.meta.env.VITE_API_URL;

  const [projects,setProjects]
  = useState([]);

  useEffect(()=>{

    fetchProjects();

  },[]);

  const fetchProjects =
  async()=>{

    const res = await axios.get(

      `${API}/api/projects`

    );

    setProjects(res.data);
  };

  return(

    <div className="dashboard">

      <h1>Projects</h1>

      <br />

      <div className="project-grid">

        {
          projects.map((project)=>(

            <ProjectCard
              key={project._id}
              project={project}
            />

          ))
        }

      </div>

    </div>

  );
}

export default Projects;