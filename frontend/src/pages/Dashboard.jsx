import { Link } from "react-router-dom";

function Dashboard(){

  return(

    <div className="dashboard">

      <h1>
        Freelancer Project
        Collaboration Portal
      </h1>

      <br />

      <p>
        Connect freelancers and
        companies for collaboration.
      </p>

      <br />

      <div
        style={{
          display:"flex",
          justifyContent:"center",
          gap:"20px",
          flexWrap:"wrap",
          marginTop:"30px"
        }}
      >

        <div
          style={{
            background:"white",
            padding:"20px",
            borderRadius:"10px",
            width:"250px",
            boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
          }}
        >

          <h2>Upload Projects</h2>

          <br />

          <p>
            Share your project ideas
            and themes.
          </p>

          <br />

          <Link to="/upload">

            <button
              style={{
                padding:"10px",
                border:"none",
                background:"#2563eb",
                color:"white",
                borderRadius:"5px",
                cursor:"pointer"
              }}
            >
              Upload
            </button>

          </Link>

        </div>

        <div
          style={{
            background:"white",
            padding:"20px",
            borderRadius:"10px",
            width:"250px",
            boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
          }}
        >

          <h2>View Projects</h2>

          <br />

          <p>
            Explore collaboration
            opportunities.
          </p>

          <br />

          <Link to="/projects">

            <button
              style={{
                padding:"10px",
                border:"none",
                background:"green",
                color:"white",
                borderRadius:"5px",
                cursor:"pointer"
              }}
            >
              View
            </button>

          </Link>

        </div>

        <div
          style={{
            background:"white",
            padding:"20px",
            borderRadius:"10px",
            width:"250px",
            boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
          }}
        >

          <h2>Manage Profile</h2>

          <br />

          <p>
            Add GitHub, LinkedIn
            and skills.
          </p>

          <br />

          <Link to="/profile">

            <button
              style={{
                padding:"10px",
                border:"none",
                background:"#f59e0b",
                color:"white",
                borderRadius:"5px",
                cursor:"pointer"
              }}
            >
              Profile
            </button>

          </Link>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;