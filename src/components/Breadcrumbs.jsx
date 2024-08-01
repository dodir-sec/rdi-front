import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Breadcrumbs = ({ title }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathnames = location.pathname.split('/').filter(x => x);

    const handleBreadcrumbClick = (path) => {
        navigate('/' + path.split('/').filter(Boolean).join('/'));
    };

    return (
        <div className='flex flex-col'>
            <div className='flex items-center text-gray-900 dark:text-white'>
                <span className="cursor-pointer" onClick={() => navigate('/')}>RDI</span>
                {pathnames.map((name, index) => {
                    const pathTo = '/' + pathnames.slice(0, index + 1).join('/');
                    return (
                        <div key={index}>
                            <i className="ri-arrow-right-s-line mx-2"></i>
                            <span className='uppercase cursor-pointer' onClick={() => handleBreadcrumbClick(pathTo)}>{name}</span>
                        </div>
                    );
                })}
            </div>
            <h2 className="mb-4 mt-3 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                {title || 'Home'}
            </h2>
        </div>
    );
};

export default Breadcrumbs;
