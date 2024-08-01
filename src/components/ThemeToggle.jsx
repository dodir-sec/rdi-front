import React from 'react';
import { useTheme } from '../ThemeContext';

function ThemeToggle() {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="px-4 py-2 text-white bg-gray-600 rounded">
            Toggle Theme
        </button>
    );
}

export default ThemeToggle;
