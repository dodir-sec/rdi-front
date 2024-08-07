import React, { useState, useEffect } from 'react'
import Table from '../../components/Table'
import Breadcrumbs from '../../components/Breadcrumbs';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadTargets } from '../../store/actions/target.action';

export default function Targets() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const targets = useSelector(state => state.targetModule.targets);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    dispatch(loadTargets()); // Fetch targets when component mounts
  }, [dispatch]);

  // Update table data whenever targets change
  useEffect(() => {
    if (targets && targets.length > 0) {
      const formattedData = targets.map(target => ({
        domain: target.domain,
        id: target._id,
        companyName: target.companyName,
        program: target.program,
        severity: target.severity,
        isVdp: target.isVdp,
        scanRounds: target.scanRounds,
        lastScanned: target.lastScanned ? new Date(target.createdAt).toLocaleDateString() : 'N/A',
        createdAt: target.createdAt ? new Date(target.createdAt).toLocaleDateString() : 'N/A', // Example of date formatting
        createdBy: target.createdBy,
      }));
      setTableData(formattedData);
    }
  }, [targets]); // React to changes in 'targets'

  if (!targets) {
    return <div>Loading targets...</div>;
  }

  // Handle navigation to detailed page
  const handleRowClick = (domain) => {
    navigate(`/targets/${domain}`);
  };

  return (
    <div>
      <Breadcrumbs title={"Targets"} />
      <div>
        <Table data={tableData} handleRowClick={handleRowClick} />
      </div>
    </div>
  )
}
