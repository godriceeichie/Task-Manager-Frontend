import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Landing, Navbar } from '../components';

const Home = () => {
    // const { id } = useParams()
    const location = useLocation()
    const path = location.pathname.split('/')[1]
    // console.log(path)
    return (
        <>
            <Landing url={path}>
                <Navbar url={path}/>
                <Outlet />
            </Landing>
        </>
    );
}

export default Home;