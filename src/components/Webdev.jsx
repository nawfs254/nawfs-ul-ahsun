import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
const Webdev = () => {
    return (
        <div className="my-5">
            <div className="flex flex-col md:flex-row gap-10 uppercase dark:text-white">

                <div className="w-full lg:w-1/2 mx-auto animate__animated animate__fadeInLeft">
                    <h3 className="text-3xl md:text-4xl pb-10 text-center font-bold">Front-end</h3>

                    <div className="grid grid-cols-2 text-2xl justify-center items-center">
                        <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-r hover:bg-gray-200 hover:scale-110 transition hover:text-black">
                            <FaHtml5></FaHtml5>
                            <p className="font-bold">Html</p> <span className="text-lg font-medium">Fresher</span>
                        </div>
                        <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-b border-l hover:bg-gray-200 hover:scale-110 transition hover:text-black">
                            <FaCss3></FaCss3>
                            <p className="font-bold">CSS</p> <span className="text-lg font-medium">Fresher</span>
                        </div>

                        <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-t border-r border-b hover:bg-gray-200 hover:scale-110 transition hover:text-black">
                            <FaJs></FaJs>
                            <p className="font-bold">Javascript</p> <span className="text-lg font-medium">Fresher</span>
                        </div>
                        <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-t border-b border-l hover:bg-gray-200 hover:scale-110 transition hover:text-black">
                            <FaReact></FaReact>
                            <p className="font-bold">React</p> <span className="text-lg font-medium">Fresher</span>
                        </div>

                        <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-t border-r hover:bg-gray-200 hover:scale-110 transition hover:text-black">
                            <RiTailwindCssFill></RiTailwindCssFill>
                            <p className="font-bold">Tailwind</p> <span className="text-lg font-medium">Fresher</span>
                        </div>
                        <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-t border-l hover:bg-gray-200 hover:scale-110 transition hover:text-black">
                            <FaGithub></FaGithub>
                            <p className="font-bold">Github</p> <span className="text-lg font-medium">Fresher</span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 mx-auto mt-10 md:mt-0  animate__animated animate__fadeInRight">
                    <h3 className="text-3xl md:text-4xl pb-10 text-center font-bold">Back-end</h3>

                    <div className="grid grid-cols-2 text-2xl justify-center items-center w-full border-r">
                        <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-r border-b hover:bg-gray-200 hover:scale-110 transition hover:text-black">
                            <RiFirebaseFill></RiFirebaseFill>
                            <p className="font-bold">Firebase</p> <span className="text-lg font-medium">Fresher</span>
                        </div>
                        <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-l border-b hover:bg-gray-200 hover:scale-110 transition hover:text-black">
                            <DiMongodb></DiMongodb>
                            <p className="font-bold">MongoDB</p> <span className="text-lg font-medium">Fresher</span>
                        </div>
                        <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border-r border-t hover:bg-gray-200 hover:scale-110 transition hover:text-black">
                            <SiExpress></SiExpress>
                            <p className="font-bold">ExpressJS</p> <span className="text-lg font-medium">Fresher</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Webdev;