import React from 'react';
import { Outlet } from 'react-router-dom';
import MainContent from './MainContent';

const Home = () => {
    return (
        <div>
            {/* <h1>red</h1> */}
            <Outlet />
        </div>
    );
}

export default Home;
