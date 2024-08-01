import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Target() {
    const { domain } = useParams();
    const [activeTab, setActiveTab] = useState('overview'); // Default to 'overview'

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-bold">Details for {domain}</h1>
            <div className="my-4">
                {/* Tab navigation */}
                <ul className="flex cursor-pointer">
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
            <div>
                {/* Conditional rendering based on the active tab */}
                {activeTab === 'overview' && (
                    <div>
                        <h2 className="text-xl font-semibold">Overview</h2>
                        <p>Some general information about {domain}, its security posture, recent activities, etc.</p>
                    </div>
                )}
                {activeTab === 'subdomains' && (
                    <div>
                        <h2 className="text-xl font-semibold">Subdomains</h2>
                        <p>List and details of subdomains for {domain}. This could include more specific data or recent scans.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
