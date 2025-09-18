"use client";
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    { path: "#home", title: "Home" },
    { path: "#about", title: "About" },
    { path: "#projects", title: "Projects" },
    { path: "#contact", title: "Contact" }
];

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex container flex-wrap items-center justify-between mx-auto md:py-5'>
                <div className="flex items-center">
                    <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Personal Portfolio
                    </span>
                </div>

                <div className='mobile-menu block md:hidden'>
                    {!navbarOpen ? (
                        <button 
                            onClick={() => setNavbarOpen(true)} 
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                        >
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                    ) : (
                        <button 
                            onClick={() => setNavbarOpen(false)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                        >
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    )}
                </div>

                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            { navbarOpen ? <MenuOverlay links={navLinks} /> : null }
        </nav>
    )
}

export default NavBar;
