import React from 'react';
import { FaSearch, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const links = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];

    return (
        <div className='fixed w-full bg-white z-10 shadow-md'>
            <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>

                {/* Logo */}
                <div className='md:text-2xl text-lg font-bold text-[#0C0950] cursor-pointer'>
                    NewApp
                </div>

                {/* Desktop Links */}
                <div className='hidden md:flex space-x-6'>
                    {links.map((link) => (
                        <p key={link} className='text-gray-700 hover:text-[#0C0950] transition duration-300 cursor-pointer'>
                            {link}
                        </p>
                    ))}
                </div>

                {/* Search + Theme Toggle */}
                <div className='flex items-center justify-center gap-4'>
                    <div className='relative bg-gray-200 rounded-lg'>
                        <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4' />
                        <input
                            type="text"
                            placeholder='Search news...'
                            className='md:pl-10 pl-7 w-30 md:w-64 py-2 rounded-lg bg-gray-200 outline-none'
                        />
                    </div>
                    <button className='bg-gray-200 px-3 py-2 rounded-lg cursor-pointer'>
                        <FaMoon />
                    </button>
                    {/* Mobile Menu Button (Placeholder) */}
                    <button className='md:hidden'>
                        <Menu size={25}/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
