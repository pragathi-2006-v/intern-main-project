import { useNavigate } from "react-router-dom";

function ProjectCard({project}){

  const navigate = useNavigate();

  return(
    <div className="project-card">

      <h2>{project.title}</h2>

      <p>{project.theme}</p>

      <p>{project.description}</p>

      <p>Budget : {project.budget}</p>

      <p>Deadline : {project.deadline}</p>

      <button
        onClick={()=>navigate(`/apply/${project._id}`)}
      >
        Apply Collaboration
      </button>

    </div>
  );
}

export default ProjectCard;