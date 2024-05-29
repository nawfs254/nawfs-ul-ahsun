import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import Intro from "../components/Intro";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const Home = () => {
    return (
        <div className="w-full md:w-11/12 mx-2 md:mx-auto">
            <Intro></Intro>
            <div className="slider-div flex overflow-hidden gap-5 my-5">
                <div className="slider flex gap-5 text-2xl">
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <FaHtml5></FaHtml5>
                        <p className="font-bold">Html</p> <span className="text-lg font-medium">Fresher</span>
                    </div>
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <FaCss3></FaCss3>
                        <p className="font-bold">CSS</p> <span className="text-lg font-medium">Fresher</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <FaJs></FaJs>
                        <p className="font-bold">Javascript</p> <span className="text-lg font-medium">Fresher</span>
                    </div>
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <FaReact></FaReact>
                        <p className="font-bold">React</p> <span className="text-lg font-medium">Fresher</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <RiTailwindCssFill></RiTailwindCssFill>
                        <p className="font-bold">Tailwind</p> <span className="text-lg font-medium">Fresher</span>
                    </div>
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <FaGithub></FaGithub>
                        <p className="font-bold">Github</p> <span className="text-lg font-medium">Fresher</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <RiFirebaseFill></RiFirebaseFill>
                        <p className="font-bold">Firebase</p> <span className="text-lg font-medium">Fresher</span>
                    </div>
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <DiMongodb></DiMongodb>
                        <p className="font-bold">MongoDB</p> <span className="text-lg font-medium">Fresher</span>
                    </div>
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <SiExpress></SiExpress>
                        <p className="font-bold">ExpressJS</p> <span className="text-lg font-medium">Fresher</span>
                    </div>
                </div>
                <div className="slider flex gap-5 text-2xl" aria-hidden={true}>
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <FaHtml5></FaHtml5>
                        <p className="font-bold">Html</p> <span className="text-lg font-medium">Fresher</span>
                    </div>
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <FaCss3></FaCss3>
                        <p className="font-bold">CSS</p> <span className="text-lg font-medium">Fresher</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <FaJs></FaJs>
                        <p className="font-bold">Javascript</p> <span className="text-lg font-medium">Fresher</span>
                    </div>
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <FaReact></FaReact>
                        <p className="font-bold">React</p> <span className="text-lg font-medium">Fresher</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <RiTailwindCssFill></RiTailwindCssFill>
                        <p className="font-bold">Tailwind</p> <span className="text-lg font-medium">Fresher</span>
                    </div>
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <FaGithub></FaGithub>
                        <p className="font-bold">Github</p> <span className="text-lg font-medium">Fresher</span>
                    </div>

                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <RiFirebaseFill></RiFirebaseFill>
                        <p className="font-bold">Firebase</p> <span className="text-lg font-medium">Fresher</span>
                    </div>
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <DiMongodb></DiMongodb>
                        <p className="font-bold">MongoDB</p> <span className="text-lg font-medium">Fresher</span>
                    </div>
                    <div className="py-5 px-10 mx-auto flex flex-col items-center gap-2 w-full border hover:bg-gray-200 hover:scale-110 transition">
                        <SiExpress></SiExpress>
                        <p className="font-bold">ExpressJS</p> <span className="text-lg font-medium">Fresher</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;