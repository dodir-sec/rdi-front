import React from 'react';
import Logo from '../assets/images/logo.png';
import Admin from '../assets/images/admin.png';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className=" p-4 flex justify-between items-center border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
            <div className="flex items-center gap-3">
                <img src={Logo} className='w-16 rounded-full' alt="Logo" />
                <span className="text-xl logo font-semibold">RDI</span>
            </div>
            <div className="flex items-center gap-3">
                <ThemeToggle />
                <span>Admin</span>
                <Link to='/profile'>
                    <img src={Admin} className='w-10 rounded-full' alt="Logo" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
