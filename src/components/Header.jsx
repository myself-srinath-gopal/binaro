import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { headerData } from '../data';
import MobileHeaderLink from './MobileHeaderLink';

const Header = () => {

    const [sticky, setSticky] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const mobileMenuRef = useRef(null);


    const handleScroll = () => {
        setSticky(window.scrollY >= 80);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed h-24 top-0 py-1 z-50 w-full bg-transparent transition-all  ${sticky ? "shadow-lg dark:shadow-darkmd bg-white dark:bg-secondary" : "shadow-none"}`}
        >
            <div className="max-w-6xl mx-auto px-7">
                <div className="flex items-center justify-between py-6">
                    <Link to={"/"}>
                        <img src="/assets/binora.png" alt="" className='h-12 object-cover' />
                    </Link>
                    <ul className="hidden lg:flex grow items-center justify-center space-x-6">
                        <li className='block'>
                            <Link to={"/"} className='text-base py-3 flex font-normal text-(--MidnightNavyText) hover:text-(--primary)'>
                                Home
                            </Link>
                        </li>
                        <li className='block'>
                            <Link to={"/schedules"} className='text-base py-3 flex font-normal text-(--MidnightNavyText) hover:text-(--primary)'>
                                Schedules
                            </Link>
                        </li>
                        <li className='block'>
                            <Link to={"/speakers"} className='text-base py-3 flex font-normal text-(--MidnightNavyText) hover:text-(--primary)'>
                                Speakers
                            </Link>
                        </li>
                        <li className='block'>
                            <Link to={"/contact"} className='text-base py-3 flex font-normal text-(--MidnightNavyText) hover:text-(--primary)'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className='hidden! lg:block! btn_outline btn-2 hover-outline-slide-down rounded-lg'>
                            <span className="py-2! px-4!">Sign In</span>
                        </Link>
                        <Link to="/regsiter" className='hidden! lg:block! btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden'>
                            <span className="py-2! px-4!">Sign Up</span>
                        </Link>
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="block lg:hidden p-2 rounded-lg"
                            aria-label="Toggle mobile menu"
                        >
                            <span className="block w-6 h-0.5 bg-black"></span>
                            <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
                            <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
                        </button>
                    </div>
                </div>
            </div>
            {navbarOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
            )}

            <div
                ref={mobileMenuRef}
                className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-64 ${navbarOpen ? "translate-x-0" : "translate-x-full"} ${navbarOpen ? "ease-out" : "ease-in"
                    } z-50`}
            >
                <div className="flex items-center justify-between p-4">
                    <h2 className="text-lg! font-bold text-black">
                        Menu
                    </h2>
                    <button
                        onClick={() => setNavbarOpen(false)}
                        aria-label="Close mobile menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="dark:text-SlateBlueText"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col items-start p-4">
                    {headerData.map((item, index) => (
                        <MobileHeaderLink key={index} item={item} />
                    ))}
                    <div className="mt-4 flex flex-col space-y-4 w-full">
                        <Link
                            href="#"
                            className="bg-transparent border border-(--primary) text-(--primary) px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="#"
                            className="bg-(--primary) text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Sign Up
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header