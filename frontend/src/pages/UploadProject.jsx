import { useState } from "react";

import axios from "axios";

function UploadProject(){

  const API =
  import.meta.env.VITE_API_URL;

  const [form,setForm] = useState({

    title:"",
    theme:"",
    description:"",
    budget:"",
    deadline:""

  });

  const handleChange = (e)=>{

    setForm({

      ...form,

      [e.target.name]:e.target.value

    });
  };

  const handleSubmit = async(e)=>{

    e.preventDefault();

    await axios.post(

      `${API}/api/projects`,

      form

    );

    alert("Project Uploaded");
  };

  return(

    <div className="form-container">

      <h2>Upload Project</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Project Title"
          onChange={handleChange}
        />

        <input
          type="text"
          name="theme"
          placeholder="Theme"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>

        <input
          type="text"
          name="budget"
          placeholder="Budget"
          onChange={handleChange}
        />

        <input
          type="date"
          name="deadline"
          onChange={handleChange}
        />

        <button type="submit">
          Upload
        </button>

      </form>

    </div>

  );
}

export default UploadProject;