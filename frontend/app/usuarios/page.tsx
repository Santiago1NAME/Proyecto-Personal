import React from 'react';
import TableUsers from './TableUsers';
import NavDashboard from '@/components/dashboard/NavDashboard';

async function page() {
  return (
    <>
      <NavDashboard title="Listado de usuarios" options={true}></NavDashboard>
      <TableUsers></TableUsers>
    </>
  )
}

export default page
