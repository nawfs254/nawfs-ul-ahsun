import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const getSavedTheme = localStorage.getItem('theme')

  const [btnIcon, setBtnIcon] = useState("")

  useEffect(() => {
    if (getSavedTheme === "light" || !getSavedTheme) {
      setBtnIcon("dark")
    }
    if (getSavedTheme === "dark") {
      setBtnIcon("light")
    }
  }, [])


  const [isDark, setIsDark] = useState(false)

  const toggle = () => {
    setIsDark(!isDark)
    if (isDark) {
      setBtnIcon("light")
      localStorage.setItem("theme", "dark")
      document.getElementById("html").classList.add("dark")
    }
    if (!isDark) {
      setBtnIcon("Dark")
      localStorage.setItem("theme", "light")
      document.getElementById("html").classList.remove("dark")
    }

  }


  return (
    <nav className="w-full md:w-11/12 mx-auto bg-white dark:bg-gray-900 py-3 md:sticky top-0 z-20">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-4xl dark:text-white font-bold">
            NAWFS UL AHSUN
          </span>
        </a>

        <div
          className="w-full md:block md:w-auto text-xl font-semibold"
          id="navbar-default"
        >
          <ul className="font-medium flex p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 flex-wrap justify-center items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "transition-all font-bold block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/qualification"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Qualification
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <button onClick={toggle} href="#_" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 hover:border-blue-700 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-700 group-hover:-rotate-180 ease"></span>
                  <span className="relative">
                    {
                      btnIcon === "light" ? <MdLightMode /> : <MdDarkMode />
                    }
                  </span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
