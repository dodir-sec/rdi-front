import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Target() {
    const { domain } = useParams();
    const [activeTab, setActiveTab] = useState('overview'); // Default to 'overview'

    return (
        <div className="">
            <Breadcrumbs title={domain} />
            <div className="mb-5 ">
                <ul className="flex cursor-pointer dark:text-white">
                    <li
                        className={`mr-6 text-lg ${activeTab === 'overview' ? 'border-b-2 border-blue-500' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        Overview
                    </li>
                    <li
                        className={`text-lg ${activeTab === 'subdomains' ? 'border-b-2 border-blue-500' : ''}`}
                        onClick={() => setActiveTab('subdomains')}
                    >
                        Subdomains
                    </li>
                </ul>
            </div>
            <div className='p-4 bg-gray-50 shadow-md rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:text-white'>
                {/* Conditional rendering based on the active tab */}
                {activeTab === 'overview' && (
                    <div>
                        <p>Some general information about {domain}, its security posture, recent activities, etc.</p>
                    </div>
                )}
                {activeTab === 'subdomains' && (
                    <div>
                        <p>List and details of subdomains for {domain}. This could include more specific data or recent scans.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
