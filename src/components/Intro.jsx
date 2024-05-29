import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "../pages/Home.css"
import { FiSend } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
    return (
        <div className="w-full md:w-4/5 mx-auto my-16 flex flex-col-reverse md:flex-row items-center gap-3">
                <div className="w-full md:w-1/2 items-center gap-3 justify-between space-y-5 mx-2">
                    <div className="text-center md:text-left space-y-3">
                        <h1 className="text-3xl md:text-5xl font-extrabold">&lt;h1&gt;Nawfs Ul Ahsun&lt;/h1&gt;</h1>
                        <p className="text-xl md:text-2xl font-semibold">&lt;p&gt;<Typewriter words={[" Jr Front-end Developer ", " CS Engineer ", " Musician "]} loop={0} cursor={1}></Typewriter>&lt;/p&gt;</p>
                        <p className="text-base md:text-xl font-medium">&lt;p&gt;I am enthusiastic about driving innovation and adopting the changing world of technology. I am committed to creating solutions that make an impact leveraging my skills to contribute to the organization&apos;s growth and success.&lt;/p&gt;</p>

                        <a href="#_" class="relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 hover:border-blue-700 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-700 group-hover:-rotate-180 ease"></span>
                                <span className="relative flex gap-3">Get in touch <span><FiSend></FiSend></span></span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
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