import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "../pages/Home.css"
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import Button from "./Button";
import 'animate.css';


const Intro = () => {
    return (
        <div className="w-full md:w-4/5 mx-auto my-16 flex flex-col-reverse md:flex-row items-center gap-3 dark:text-white">
            <div className="w-full md:w-1/2 items-center gap-3 justify-between space-y-5 mx-2">
                <div className="text-center  md:text-left space-y-3">
                    <h1 className="text-3xl md:text-5xl font-extrabold">&lt;h1&gt;Nawfs Ul Ahsun&lt;/h1&gt;</h1>
                    <p className="text-xl md:text-2xl font-semibold">&lt;p&gt;<Typewriter words={[" Jr Front-end Developer ", " CS Engineer ", " Musician "]} loop={0} cursor={1}></Typewriter>&lt;/p&gt;</p>
                    <p className="text-base md:text-xl font-medium">&lt;p&gt;I am enthusiastic about driving innovation and adopting the changing world of technology. I am committed to creating solutions that make an impact leveraging my skills to contribute to the organization&apos;s growth and success.&lt;/p&gt;</p>

                    <Link to="/contact">
                        <Button text="Get in touch"></Button>
                    </Link>
                </div>
                <div className="flex gap-4 justify-center md:justify-start">
                    <FaGithub size={40}></FaGithub>
                    <FaLinkedin size={40}></FaLinkedin>
                    <FaFacebook size={40}></FaFacebook>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
                <div className="image w-[300px] md:w-[450px] h-[300px] md:h-[450px] border-blue-200 border-[5px] md:border-[10px]"></div>
            </div>
        </div>
    );
};

export default Intro;