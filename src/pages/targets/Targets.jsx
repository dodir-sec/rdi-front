import React, { useState, useEffect } from 'react'
import Table from '../../components/Table'
import Breadcrumbs from '../../components/Breadcrumbs';
import { useNavigate } from 'react-router-dom';

export default function Targets() {
  const navigate = useNavigate();
  const filterOptions = ["Active", "Inactive", "Completed"];
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    makeTableData();
  }, []);

  const applyFilters = (filters) => {
    console.log("Applied Filters:", filters);
    // Here you can add logic to filter your table data based on selected filters
  };

  const initialData = [
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

  const makeTableData = () => {
    const data = initialData.map((item) => {
      return {
        id: item.id,
        name: item.name,
        companyName: item.companyName,
        lastScanned: item.lastScanned,
        scanRounds: item.scanRounds,
        program: item.program,
        severity: item.severity,
        createdBy: item.createdBy,
        createdAt: item.createdAt,
        domain: item.domain,
      };
    });
    setTableData(data);
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
