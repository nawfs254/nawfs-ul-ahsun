import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:flex md:items-center md:justify-center">
        <Outlet></Outlet> 
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
