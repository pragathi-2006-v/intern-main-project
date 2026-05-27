import { Link } from "react-router-dom";

function Navbar(){

  return(
    <div className="navbar">

      <h2>FreeCollab</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/upload">Upload</Link>

        <Link to="/profile">Profile</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

      </div>

    </div>
  );
}

export default Navbar;