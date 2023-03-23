import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Landing, Navbar } from '../components';

const Home = () => {
    // const { id } = useParams()
    const location = useLocation()
    const path = location.pathname.split('/')[1]
    // console.log(path)
    return (
        <>
            <Navbar url={path}/>
            <Outlet />
        </>
    );
}

export default Home;