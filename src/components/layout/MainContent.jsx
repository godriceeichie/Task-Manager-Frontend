import React from 'react';
import { Hero } from '..';
import ClientsSection from '../container/clients/ClientsSection';
import Features from '../container/features/Features';


const MainContent = () => {
    return (
        <main className='main-content'>
            <Hero />
            <ClientsSection />
            <Features />
        </main>
    );
}

export default MainContent