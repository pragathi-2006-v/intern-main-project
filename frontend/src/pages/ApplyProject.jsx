import { useState } from "react";

import axios from "axios";

import { useParams }
from "react-router-dom";

function ApplyProject(){

  const API =
  import.meta.env.VITE_API_URL;

  const { id } = useParams();

  const [proposal,setProposal]
  = useState("");

  const handleApply = async(e)=>{

    e.preventDefault();

    await axios.post(

      `${API}/api/apply`,

      {
        projectId:id,
        proposal
      }

    );

    alert("Applied Successfully");
  };

  return(

    <div className="form-container">

      <h2>
        Apply Collaboration
      </h2>

      <form onSubmit={handleApply}>

        <textarea
          placeholder="Proposal"
          onChange={(e)=>
            setProposal(e.target.value)
          }
        ></textarea>

        <button type="submit">
          Apply
        </button>

      </form>

    </div>

  );
}

export default ApplyProject;
