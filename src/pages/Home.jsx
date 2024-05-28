import Intro from "../components/Intro";
import Navbar from "../components/Navbar"
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="w-full md:w-11/12 mx-2 md:mx-auto">
            <Navbar></Navbar>
            <Intro></Intro>
            <div id="skills">
                <Skills></Skills>
            </div>
        </div>
    );
};

export default Home;