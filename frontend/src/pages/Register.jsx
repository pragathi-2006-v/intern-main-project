import { useState } from "react";
import axios from "axios";

function Register(){

  const API = import.meta.env.VITE_API_URL;

  const [form,setForm] = useState({
    username:"",
    email:"",
    password:""
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
      `${API}/api/auth/register`,
      form
    );

    alert("Registered Successfully");
  };

  return(
    <div className="form-container">

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;