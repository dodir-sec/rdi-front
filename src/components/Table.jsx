import React from 'react';
import { useNavigate } from 'react-router-dom';

const Table = () => {
    const navigate = useNavigate();

    // Updated mock data including new fields
    const data = [
        {
            id: "1",
            name: "RDI",
            companyName: "RDI Tech",
            lastScanned: "2023-07-29",
            scanRounds: 15,
            program: "h1",
            isVdp: true,
            severity: "High",
            createdBy: "advir",
            createdAt: "2023-07-01",
            domain: "example.com",
        },
        {
            id: "2",
            name: "RDI Two",
            companyName: "RDI Solutions",
            lastScanned: "2023-07-28",
            scanRounds: 10,
            program: "bb",
            isVdp: false,
            severity: "Medium",
            createdBy: "advir",
            createdAt: "2023-06-25",
            domain: "secondexample.com",
        },
    ];

    const handleRowClick = (domain) => {
        navigate(`/targets/${domain}`);
    };

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-900 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">Company Name</th>
                        <th scope="col" className="py-3 px-6">Last Scanned</th>
                        <th scope="col" className="py-3 px-6">Scan Rounds</th>
                        <th scope="col" className="py-3 px-6">Program</th>
                        <th scope="col" className="py-3 px-6">Is VDP</th>
                        <th scope="col" className="py-3 px-6">Severity</th>
                        <th scope="col" className="py-3 px-6">Created By</th>
                        <th scope="col" className="py-3 px-6">Created At</th>
                        <th scope="col" className="py-3 px-6">Domain</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick={() => handleRowClick(item.domain)}>
                            <td className="py-4 px-6">{item?.companyName}</td>
                            <td className="py-4 px-6">{item?.lastScanned}</td>
                            <td className="py-4 px-6">{item?.scanRounds}</td>
                            <td className="py-4 px-6">{item?.program}</td>
                            <td className="py-4 px-6">{item?.isVdp ? 'Yes' : 'No'}</td>
                            <td className="py-4 px-6">{item?.severity}</td>
                            <td className="py-4 px-6">{item?.createdBy}</td>
                            <td className="py-4 px-6">{item?.createdAt}</td>
                            <td className="py-4 px-6">{item?.domain}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
