import React, { useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Scan() {
  const [domain, setDomain] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [program, setProgram] = useState('');
  const [isVdp, setIsVdp] = useState(false);
  const [severity, setSeverity] = useState('low');

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleProgramChange = (e) => {
    setProgram(e.target.value);
  };

  const handleIsVdpChange = (e) => {
    setIsVdp(e.target.checked);
  };

  const handleSeverityChange = (e) => {
    setSeverity(e.target.value);
  };

  const handleScan = (e) => {
    e.preventDefault();
    console.log(`Scanning ${domain} `);
    console.log({
      Domain: domain,
      CompanyName: companyName,
      Program: program,
      IsVdp: isVdp,
      Severity: severity,
    });
    // Here you would typically call a scanning API or function
  };

  return (
    <div>
      <Breadcrumbs title={"Scanner"} />

      <div className="p-4 text-s mx-auto bg-gray-100 border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        <div className="mb-5">
          <label for="domain" className="block mb-2  font-medium text-gray-900 dark:text-white">Domain</label>
          <div className="flex">
            <span className="inline-flex items-center px-3  text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <span>https://</span>
            </span>
            <input
              value={domain}
              onChange={handleDomainChange}
              type="text" id="domain"
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-100 focus:ring-blue-400 focus:ring-1 block flex-1 min-w-0 w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
              placeholder="example.com"
            />
          </div>
        </div>
        <div className="mb-5">
          <label for="companyName" className="block mb-2  font-medium text-gray-900 dark:text-white">Company Name</label>
          <input
            value={companyName}
            onChange={handleCompanyNameChange}
            type="text" id="companyName" className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Example' />
        </div>
        <div className="mb-5">
          <label for="program" className="block mb-2  font-medium text-gray-900 dark:text-white">Program</label>
          <input
            value={program}
            onChange={handleProgramChange}
            type="text" id="program" className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Example' />
        </div>
        <div className="mb-5">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox"
              checked={isVdp}
              onChange={handleIsVdpChange}
              className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3  font-medium text-gray-900 dark:text-gray-300">Is Vdp</span>
          </label>
        </div>
        <div className="mb-5">
          <label for="severity" className="block mb-2  font-medium text-gray-900 dark:text-white">Severity</label>
          <select id="severity"
            value={severity}
            onChange={handleSeverityChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="mb-5">
        </div>
        {/* <div className="flex justify-between space-x-4">
          <button onClick={() => handleScanTypeChange('active')} className={`px-4 py-2 rounded-md ${scanType === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Active</button>
          <button onClick={() => handleScanTypeChange('passive')} className={`px-4 py-2 rounded-md ${scanType === 'passive' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Passive</button>
          <button onClick={() => handleScanTypeChange('all')} className={`px-4 py-2 rounded-md ${scanType === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>All</button>
        </div> */}
        <div className="flex justify-end">
          <button onClick={handleScan} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded">
            Start Scan
          </button>
        </div>
      </div>
    </div>
  );
}
