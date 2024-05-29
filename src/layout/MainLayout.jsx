import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:flex md:items-center md:justify-center">
        <Outlet></Outlet> 
      </div>
    </div>
  );
};

export default MainLayout;
