import React from 'react'
import { Link } from 'react-router-dom'

function DashboardSidebar() {
  return (
    <aside className='dashboardSidebar'>
        <header className='dashboardSidebar__header'>
          <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3.5" y="4" width="35" height="35" fill="white" stroke="#3E54AC" stroke-width="7"/>
          </svg>
          <h1>
            <Link to={'/'}>Slick</Link>
          </h1>
        </header>
    </aside>
  )
}

export default DashboardSidebar