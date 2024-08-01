import React from 'react'
import Table from '../../components/Table'
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Targets() {
  return (
    <div>
      <Breadcrumbs title={"Targets"} />
      <div>
        <Table />
      </div>
    </div>
  )
}
