import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardHeader, DashboardMainContent, DashboardSidebar } from '../../components'
import { MantineProvider } from '@mantine/core';

function Dashboard() {
  return (
    <div className='dashboard'>
        <DashboardSidebar />
        <MantineProvider theme={{ loader: 'bars'}}>
          <DashboardMainContent>
            <DashboardHeader />
            <Outlet />
          </DashboardMainContent>
        </MantineProvider>
    </div>
  )
}

export default Dashboard