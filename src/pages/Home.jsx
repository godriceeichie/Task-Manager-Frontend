import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Hero, Navbar } from '../components';

const Home = () => {
    // const { id } = useParams()
    const location = useLocation()
    const path = location.pathname.split('/')[1]
    // console.log(path)
    return (
        <>
            <Hero url={path}>
                <Navbar url={path}/>
                <Outlet />
            </Hero>
        </>
    );
}

export default Home;
