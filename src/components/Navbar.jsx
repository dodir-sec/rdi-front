import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Navbar() {
    return (
        <div className="h-full w-64 bg-gray-800 text-white">
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/targets">Targets</Link></li>
                <li><Link to="/scan">Scan</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <ThemeToggle />
        </div>
    );
}

export default Navbar;
