import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UploadProject from "./pages/UploadProject";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import ApplyProject from "./pages/ApplyProject";

function App(){

  return(
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/upload" element={<UploadProject />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/apply/:id" element={<ApplyProject />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
