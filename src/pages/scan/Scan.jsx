import React, { useState } from 'react';


export default function Scan() {
  const [domain, setDomain] = useState('');
  const [scanType, setScanType] = useState('all'); // Default to 'all'

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const handleScan = () => {
    console.log(`Scanning ${domain} with ${scanType} scan...`);
    // Here you would typically call a scanning API or function
  };

  const handleScanTypeChange = (type) => {
    setScanType(type);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <input
        type="text"
        value={domain}
        onChange={handleDomainChange}
        placeholder="Enter domain"
        className="block w-full px-4 py-2 mt-2 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      />
      <div className="flex justify-between space-x-4">
        <button onClick={() => handleScanTypeChange('active')} className={`px-4 py-2 rounded-md ${scanType === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Active</button>
        <button onClick={() => handleScanTypeChange('passive')} className={`px-4 py-2 rounded-md ${scanType === 'passive' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Passive</button>
        <button onClick={() => handleScanTypeChange('all')} className={`px-4 py-2 rounded-md ${scanType === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>All</button>
      </div>
      <button onClick={handleScan} className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Scan
      </button>
    </div>
  );
}
