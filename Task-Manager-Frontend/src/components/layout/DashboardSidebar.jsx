import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SidebarLinks from '../../data/SidebarLinks'
import MinorSidebarLinks from '../../data/MinorSidebarLinks'


function DashboardSidebar() {
  const SidebarLink = useRef()
  const [linkIndex, setlinkIndex] = useState();

  const sidebarLinkClick = (index) => {
    setlinkIndex(index)
    console.log(index)
  }

  return (
    <aside className='dashboardSidebar'>
        <header className='dashboardSidebar__header'>
          <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3.5" y="4" width="35" height="35" fill="white" stroke="#3E54AC" strokeWidth="7"/>
          </svg>
          <h1>
            <Link to={'/'}>Slick</Link>
          </h1>
        </header>
        <nav>
          <ul className='dashboardSidebar__links-container'>
            <div className="dashboardSidebar__main-container">
              {
                SidebarLinks.map(({title, icon, path}, index)=> {
                  return(
                    <li key={index}>
                      <NavLink to={path} activeClassName='active' exact={path === '/dashboard/'}>
                        <img src={icon} alt=""/>
                        <span className='dashboardSidebar__nav-name'>{title}</span>
                      </NavLink>
                    </li>
                  )
                })
              }
            </div>
            <div className='dashboardSidebar__main-container'>
              {
                MinorSidebarLinks.map(({title, icon, index}) => {
                  return(
                    <li onClick={() => sidebarLinkClick(index, path)} key={index} className={(linkIndex === index) ? 'active' : ''}>
                      <Link>
                        <img src={icon} alt="" />
                        <span className='dashboardSidebar__nav-name'>{title}</span>
                      </Link>
                    </li>
                  )
                })
              }
            </div>
          </ul>
        </nav>
    </aside>
  )
}

export default DashboardSidebar