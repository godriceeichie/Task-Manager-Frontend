import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardHeader, DashboardMainContent, DashboardSidebar } from '../../components'
import { MantineProvider } from '@mantine/core';
import { TaskContextProvider } from '../../contexts/TaskContext';

function Dashboard() {
  return (
    <div className='dashboard'>
        <DashboardSidebar />
        <MantineProvider theme={{ loader: 'bars'}}>
          <TaskContextProvider>
            <DashboardMainContent>
              <DashboardHeader />
              <Outlet />
            </DashboardMainContent>
          </TaskContextProvider>
        </MantineProvider>
    </div>
  )
}

export default Dashboard