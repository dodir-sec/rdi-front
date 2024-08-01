import React from 'react';

function Header() {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                {/* Logo: Replace `logo.svg` with your actual logo path */}
                <img src="/path-to-your-logo.svg" alt="RDI Logo" className="h-8 mr-2" />
                <span className="text-xl font-bold">RDI</span>
            </div>
            <div>
                {/* Profile Image: Replace `profile.jpg` with your actual profile image path */}
                <img src="/path-to-your-profile-image.jpg" alt="Profile" className="h-10 w-10 rounded-full" />
            </div>
        </header>
    );
}

export default Header;
