import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import Table from '../../components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { loadTarget } from '../../store/actions/target.action';

export default function Target() {
    const { domain } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const target = useSelector(state => state.targetModule.target);
    const [activeTab, setActiveTab] = useState('overview');
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        dispatch(loadTarget(domain)); // Fetch targets when component mounts
    }, [dispatch, domain]);

    useEffect(() => {
        if (target && target.subdomains) {
            const formattedData = target.subdomains.map(subdomain => ({
                id: subdomain._id,
                favorite: subdomain.isFavorite,
                checked: subdomain.isChecked,
                domain: subdomain.url,
                code: subdomain.code,
                score: subdomain.score,
                isVdp: subdomain.isVdp,
                title: subdomain.title,
                contentLength: subdomain.contentLength,
                contentType: subdomain.contentType,
                waf: subdomain.waf,
            }));
            setTableData(formattedData);
        }
    }, [target]);

    if (!target) {
        return <div>Loading target...</div>;
    }


    const handleRowClick = (subdomainId) => {
        navigate(`/targets/${domain}/${subdomainId}`);

    };

    return (
        <div>
            <Breadcrumbs title={target.domain} />
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
                                <a href={"https://" + target.domain}>{target.domain}</a>
                            </li>
                            <li><strong>Company Name:</strong> {target.companyName}</li>
                            <li><strong>Last Scanned:</strong> {target.lastScanned}</li>
                            <li><strong>Scan Rounds:</strong> {target.scanRounds}</li>
                            <li><strong>Program:</strong> {target.program}</li>
                            <li><strong>Vulnerability Disclosure Program (VDP):</strong> {target.isVdp ? 'Yes' : 'No'}</li>
                            <li><strong>Severity:</strong> {target.severity}</li>
                            <li><strong>Created By:</strong> {target.createdBy}</li>
                            <li><strong>Created At:</strong> {target.createdAt}</li>
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
