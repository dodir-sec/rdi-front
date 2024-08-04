import React, { useState, useRef, useEffect } from 'react';

const DropdownFilter = ({ options, applyFilters }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isOpen]);

    const toggleOption = (option) => {
        const currentIndex = selectedOptions.indexOf(option);
        const newChecked = [...selectedOptions];

        if (currentIndex === -1) {
            newChecked.push(option);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setSelectedOptions(newChecked);
        applyFilters(newChecked);
    };

    return (
        <div className="relative" ref={ref}>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2.5 text-gray-900 bg-gray-100  rounded-e-lg dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800 focus:outline-none border border-gray-300">
                Filters
            </button>
            {isOpen && (
                <div className="absolute top-100 right-0 z-10 w-48 bg-white rounded-md shadow-lg dark:bg-gray-700">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                        {options.map(option => (
                            <li key={option}>
                                <button
                                    type="button"
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => toggleOption(option)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedOptions.includes(option)}
                                        onChange={() => toggleOption(option)}
                                        className="mr-2"
                                    />
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownFilter;
