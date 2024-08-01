import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const links = [
        {
            name: 'Dashboard',
            icon: 'ri-dashboard-line',
            path: '/',
        },
        {
            name: 'Targets',
            icon: 'ri-focus-3-line',
            path: '/targets',
        },
        {
            name: 'Scanner',
            icon: 'ri-qr-scan-line',
            path: '/scan',
        },
        {
            name: 'About',
            icon: 'ri-information-line',
            path: '/about',
        },

    ]

    return (
        <div className="h-full w-64 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
            <div className='flex flex-col gap-2 p-3'>
                {links.map((link, index) => (
                    <Link key={index} className='flex p-3 gap-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer' to={link.path}>
                        <i className={link.icon}></i>
                        <span>{link.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}



export default Navbar;
