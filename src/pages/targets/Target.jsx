import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import Table from '../../components/Table';

export default function Target() {
    const { domain } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [tableData, setTableData] = useState([]);


    const initialData =
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
        subdomains: [
            {
                id: "sub1",
                url: "sub.example.com",
                code: 200,
                title: "Subdomain 1",
                severity: "Info",
                img: "",
                isFavorite: false,
                isChecked: false,
                score: 0,
                contentLength: 0,
                contentType: "HTML",
                ips: [],
                techStack: ["React", "Node.js"],
                ports: [],
                dirs: [],
                params: [],
                waf: "Cloudfare"
            }
        ]
    };

    useEffect(() => {
        makeTableData();
    }, []);

    const makeTableData = () => {
        const data = initialData.subdomains.map((item) => {
            return {
                id: item.id,
                url: item.url,
                code: item.code,
                title: item.title,
                severity: item.severity,
                isFavorite: item.isFavorite,
                isChecked: item.isChecked,
                score: item.score,
                contentLength: item.contentLength,
                contentType: item.contentType,
                waf: item.waf
            };
        });
        setTableData(data);
    }

    const handleRowClick = (subdomainId) => {
        navigate(`/targets/${initialData.id}/${subdomainId}`);

    };

    return (
        <div>
            <Breadcrumbs title={initialData.domain} />
            <div className="mb-5">
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
            <div >
                {activeTab === 'overview' && (
                    <div className='p-4 bg-gray-50 shadow-md rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:text-white'>
                        <ul>
                            <li><strong>Domain:</strong>
                                <a href={"https://" + initialData.domain}>{initialData.domain}</a>
                            </li>
                            <li><strong>Company Name:</strong> {initialData.companyName}</li>
                            <li><strong>Last Scanned:</strong> {initialData.lastScanned}</li>
                            <li><strong>Scan Rounds:</strong> {initialData.scanRounds}</li>
                            <li><strong>Program:</strong> {initialData.program}</li>
                            <li><strong>Vulnerability Disclosure Program (VDP):</strong> {initialData.isVdp ? 'Yes' : 'No'}</li>
                            <li><strong>Severity:</strong> {initialData.severity}</li>
                            <li><strong>Created By:</strong> {initialData.createdBy}</li>
                            <li><strong>Created At:</strong> {initialData.createdAt}</li>
                        </ul>
                    </div>
                )}
                {activeTab === 'subdomains' && (
                    <div>
                        <Table data={tableData} handleRowClick={handleRowClick} />
                    </div>
                )}
            </div>
        </div>
    );
}
