import React from 'react';
import { useNavigate } from 'react-router-dom';

const Table = () => {
    const navigate = useNavigate();

    // Mock data based on the provided keys
    const data = [
        {
            id: "1",
            name: "RDI",
            lastScanned: "2023-07-29",
            scanRounds: 15,
            program: "h1",
            isVdp: true,
            acquisitions: [],
            domains: [
                { domain: "example.com", severity: "critical", isVdp: true, id: "d1" }
            ],
        },
        {
            id: "2",
            name: "RDI Two",
            lastScanned: "2023-07-28",
            scanRounds: 10,
            program: "bb",
            isVdp: false,
            acquisitions: [],
            domains: [
                { domain: "secondexample.com", severity: "high", isVdp: false, id: "d2" },
                { domain: "thirdexample.com", severity: "medium", isVdp: true, id: "d3" }
            ],
        },
    ];

    const handleRowClick = (domain) => {
        navigate(`/targets/${domain}`);
    };

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">ID</th>
                        <th scope="col" className="py-3 px-6">Name</th>
                        <th scope="col" className="py-3 px-6">Last Scanned</th>
                        <th scope="col" className="py-3 px-6">Scan Rounds</th>
                        <th scope="col" className="py-3 px-6">Program</th>
                        <th scope="col" className="py-3 px-6">Is VDP</th>
                        <th scope="col" className="py-3 px-6">Domains</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" onClick={() => handleRowClick(item.domains[0].domain)}>
                            <td className="py-4 px-6">{item.id}</td>
                            <td className="py-4 px-6">{item.name}</td>
                            <td className="py-4 px-6">{item.lastScanned}</td>
                            <td className="py-4 px-6">{item.scanRounds}</td>
                            <td className="py-4 px-6">{item.program}</td>
                            <td className="py-4 px-6">{item.isVdp ? 'Yes' : 'No'}</td>
                            <td className="py-4 px-6">
                                {item.domains.map(domain => (
                                    <div key={domain.id}>
                                        {domain.domain} ({domain.severity})
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
