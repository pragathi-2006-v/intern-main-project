import { useState } from "react";

import axios from "axios";

function Profile(){

  const API =
  import.meta.env.VITE_API_URL;

  const [form,setForm] = useState({

    github:"",
    linkedin:"",
    skills:"",
    bio:""

  });

  const handleChange = (e)=>{

    setForm({

      ...form,

      [e.target.name]:e.target.value

    });
  };

  const handleSubmit = async(e)=>{

    e.preventDefault();

    const userId =
    prompt("Enter User ID");

    await axios.put(

      `${API}/api/profile/${userId}`,

      form

    );

    alert("Profile Updated");
  };

  return(

    <div className="form-container">

      <h2>Profile</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="github"
          placeholder="GitHub Link"
          onChange={handleChange}
        />

        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Link"
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
        />

        <textarea
          name="bio"
          placeholder="Bio"
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Save Profile
        </button>

      </form>

    </div>

  );
}

export default Profile;
