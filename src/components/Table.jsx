import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownFilter from './DropdownFilter';
import TableSearch from './TableSearch';

const Table = ({ data, handleRowClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');
    const [filterOptions, setFilterOptions] = useState([]);

    // Function to handle sorting
    const handleSort = (field) => {
        const direction = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortDirection(direction);
    };

    const applyFilters = (selectedFilters) => {
        setFilterOptions(selectedFilters);
    };

    const compareValues = (key, order = 'asc') => {
        return function innerSort(a, b) {
            const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (order === 'desc') ? (comparison * -1) : comparison;
        };
    };

    // Memoized filtered and sorted data
    // const sortedFilteredData = useMemo(() => {
    //     return data.filter(item => {
    //         return Object.keys(item).some(key =>
    //             item[key] != null && // Check for null or undefined
    //             item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
    //         );
    //     }).sort(compareValues(sortField, sortDirection));
    // }, [data, searchTerm, sortField, sortDirection]);

    // Memoized filtered and sorted data
    const sortedFilteredData = useMemo(() => {
        let filteredData = data.filter(item => {
            const searchMatch = Object.keys(item).some(key =>
                item[key] != null && item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
            );
            const filterMatch = filterOptions.length === 0 || filterOptions.includes(item.isVdp ? "VDP" : "Not VDP");
            return searchMatch && filterMatch;
        });
        return filteredData.sort(compareValues(sortField, sortDirection));
    }, [data, searchTerm, sortField, sortDirection, filterOptions]);



    const handleCheckboxClick = (id, isChecked, event) => {
        event.stopPropagation();  // Prevent the row click event
        console.log(`Toggling checkbox for id ${id}: ${!isChecked}`);
        // Here you would usually update the state or dispatch an action
    };

    const handleFavoriteToggle = (id, isFavorite, event) => {
        event.stopPropagation();  // Prevent the row click event
        console.log(`Toggling favorite status for id ${id}: ${!isFavorite}`);
    };

    const handleDomainClick = (url, event) => {
        event.stopPropagation();  // Prevent the row click event
        window.open(`https://${url}`, '_blank');
    };

    // Exclude 'id' from headers for display
    const tableHeaders = data.length > 0 ? Object.keys(data[0]).filter(header => header !== 'id') : [];

    return (
        <div>
            <div className="flex mb-4 justify-between items-center">
                <TableSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <DropdownFilter options={["VDP", "Not VDP"]} applyFilters={applyFilters} />
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-900 dark:text-gray-400">
                    <tr>
                        {tableHeaders.map(header => (
                            <th key={header} className="py-3 px-6 cursor-pointer"
                                onClick={() => handleSort(header)}>
                                {header.replace(/([A-Z])/g, ' $1').trim()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedFilteredData.map((item) => (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                            onClick={() => handleRowClick(item.id)}
                        >
                            {tableHeaders.map(header => (
                                <td key={header} className="py-4 px-6">
                                    {header === 'domain' ?
                                        <a onClick={(e) => handleDomainClick(item[header], e)} href={`https://${item[header]}`} target="_blank" rel="noopener noreferrer">{item[header]}</a> :
                                        header === 'isVdp' ?
                                            item[header] ? 'VDP' : 'NOT VDP' :
                                            header === 'checked' ?
                                                <i onClick={(e) => handleCheckboxClick(item.id, item.checked, e)} className={item.checked ? "ri-checkbox-circle-line" : "ri-checkbox-blank-circle-line"}></i> :
                                                header === 'favorite' ?
                                                    <i onClick={(e) => handleFavoriteToggle(item.id, item.favorite, e)} className={item.favorite ? "ri-star-fill" : "ri-star-line"}></i> :
                                                    item[header]
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
