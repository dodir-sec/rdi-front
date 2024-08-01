import React from 'react';
import { useTheme } from '../ThemeContext';

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();  // Ensure you're extracting 'theme' from useTheme

    return (
        <button
            onClick={toggleTheme}
            className="flex text-m items-center justify-center w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            {theme === 'dark' ? (
                <i className="ri-sun-line"></i>  // Display sun icon in dark mode
            ) : (
                <i className="ri-moon-line"></i>  // Display moon icon in light mode
            )}
        </button>
    );
}

export default ThemeToggle;
