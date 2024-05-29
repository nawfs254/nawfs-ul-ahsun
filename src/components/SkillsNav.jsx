import { NavLink } from "react-router-dom";

const SkillsNav = () => {
    return (
        <div className="my-10">
            <ul className="flex flex-wrap text-lg font-medium text-center text-gray-500 dark:text-gray-400 justify-center md:gap-5">
                <li className="me-2">
                    <NavLink to="/skills/webdev" className={({ isActive }) => isActive ? "inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" : "inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"}>WebDev</NavLink>
                </li>
                <li className="me-2">
                    <NavLink to="/skills/music" className={({ isActive }) => isActive ? "inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" : "inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"}>Music</NavLink>
                </li>
                <li className="me-2">
                    <NavLink to="/skills/software" className={({ isActive }) => isActive ? "inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" : "inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"}>Software</NavLink>
                </li>
            </ul>
        </div >
    );
};

export default SkillsNav;