import React, {useState} from 'react';

const DashboardMainContent = (props) => {
    
    return (
        <main className='dashboardMain'>
            {
                props.children    
            }
        </main>
    );
}

export default DashboardMainContent;
