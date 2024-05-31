import portfolioLight from "../assets/websites/portfolio/portfolio-light.png"
import portfolioDark from "../assets/websites/portfolio/portfolio-dark.png"
import { Link } from "react-router-dom";
import { useState } from "react";

const Card = () => {
    const [isClicked, setIsClicked] = useState(false)

    const handleToggle = () => {
        setIsClicked(!isClicked)
    }

    return (


        <div className="dark:text-white border-2 p-3 m-2 relative animate__animated animate__flipInX">
            <img src={isClicked ?  portfolioDark : portfolioLight} alt="" className=" md:w-full" />

            <div onClick={handleToggle} className="absolute top-2 right-3 w-fit bg-purple-300 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 my-2 rounded dark:bg-purple-900 dark:text-purple-300 cursor-pointer">
                {isClicked ? "Light mode" : "Dark Mode"}
            </div>

            <div className="my-2 p-3 space-y-2">
                <div className="w-fit bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 my-2 rounded dark:bg-blue-900 dark:text-blue-300 ">Portfolio</div>
                <h3 className="text-3xl font-extrabold">Portfolio Website</h3>
                <p className="text-base md:text-lg">Live Link: <Link to="https://www.nawfsulahsun.live/" className="hover:underline hover:font-medium transition">www.nawfsulahsun.live</Link></p>

                <p className="text-base md:text-lg"><Link to="https://github.com/nawfs254/nawfs-ul-ahsun" target="_blank" className="hover:underline hover:font-medium transition">Github Repo</Link></p>

                <div className="flex flex-wrap">
                    <div className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 my-4 w-fit">Html</div>
                    <div className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 my-4 w-fit">CSS</div>
                    <div className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 my-4 w-fit">Javascript</div>
                    <div className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 my-4 w-fit">React</div>
                </div>

            </div>
        </div>

    );
};

export default Card;