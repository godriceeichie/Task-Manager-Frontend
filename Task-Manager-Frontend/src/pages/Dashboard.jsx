import React from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardSidebar } from '../components'

function Dashboard() {
  return (
    <div className='dashboard'>
        <DashboardSidebar />
        <Outlet />
    </div>
  )
}

export default Dashboard