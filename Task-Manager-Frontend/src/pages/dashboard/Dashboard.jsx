import React from 'react'
import { Outlet } from 'react-router-dom'
import { CreateTask, DashboardHeader, DashboardMainContent, DashboardSidebar } from '../../components'

function Dashboard() {
  return (
    <div className='dashboard'>
        <DashboardSidebar />
        <DashboardMainContent>
          <DashboardHeader />
          <Outlet />
        </DashboardMainContent>

    </div>
  )
}

export default Dashboard