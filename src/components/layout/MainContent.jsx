import React from 'react';
import { Hero } from '..';
import ClientsSection from '../container/clients/ClientsSection';


const MainContent = () => {
    return (
        <main className='main-content'>
            <Hero />
            <ClientsSection />
        </main>
    );
}

export default MainContent