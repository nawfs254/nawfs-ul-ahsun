import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false)

    // const openMenu = () => {

    // }

    return (
        <div>
            <div onClick={() => setIsOpen(true)}
                className={isOpen ? 'hidden' : ''}>
                <GiHamburgerMenu size={26}>
                </GiHamburgerMenu></div>



            <div className={isOpen ? 'fixed top-0 left-0 w-screen h-screen bg-white z-30 flex flex-col items-center justify-center gap-3 text-xl overflow-hidden animate__animated animate__fadeInTopRight' : 'animate__animated animate__fadeOutTopRight hidden'}>
                <div onClick={() => setIsOpen(false)} className={isOpen ? 'fixed top-10 right-10 z-80' : 'hidden'}><RxCross2 size={26} /></div>

                <ul className='space-y-5'>
                    <li onClick={() => setIsOpen(false)}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "py-2 px-3 font-bold text-blue-700 border-b-4 border-blue-700"
                                    : "py-2 px-3"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li onClick={() => setIsOpen(false)}>
                        <NavLink to="/skills"
                            className={({ isActive }) =>
                                isActive
                                    ? "py-2 px-3 font-bold text-blue-700 border-b-4 border-blue-700"
                                    : "py-2 px-3"
                            }
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li onClick={() => setIsOpen(false)}>
                        <NavLink to="/qualification"
                            className={({ isActive }) =>
                                isActive
                                    ? "py-2 px-3 font-bold text-blue-700 border-b-4 border-blue-700"
                                    : "py-2 px-3"
                            }
                        >
                            Qualification
                        </NavLink>
                    </li>
                    <li onClick={() => setIsOpen(false)}>
                        <NavLink to="/portfolio"
                            className={({ isActive }) =>
                                isActive
                                    ? "py-2 px-3 font-bold text-blue-700 border-b-4 border-blue-700"
                                    : "py-2 px-3"
                            }
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li onClick={() => setIsOpen(false)}>
                        <NavLink to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "py-2 px-3 font-bold text-blue-700 border-b-4 border-blue-700"
                                    : "py-2 px-3"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default DropDown;