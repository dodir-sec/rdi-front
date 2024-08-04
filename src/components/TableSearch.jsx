import React from 'react';

const TableSearch = ({ searchTerm, setSearchTerm }) => {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="flex grow dark:border-gray-800">
            <span className="inline-flex items-center px-3 text-gray-900 bg-gray-100 rounded-s-md dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800">
                <i className="ri-search-line"></i>
            </span>
            <input
                value={searchTerm}
                onChange={handleSearchChange}
                type="text"
                id="domain"
                className="rounded-none bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-100 focus:ring-blue-400 focus:ring-1 block flex-1 min-w-0 w-full p-2.5 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                placeholder="Target Name"
            />
        </div>
    );
};

export default TableSearch;
