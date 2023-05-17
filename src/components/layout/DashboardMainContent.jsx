import React, {useState} from 'react';
import { sidebarDisplayAtom } from '../../states';
import { useRecoilState } from 'recoil'

const DashboardMainContent = (props) => {
    const [sidebarDisplay, setSidebarDisplay] = useRecoilState(sidebarDisplayAtom)
    return (
        <main className={sidebarDisplay ? 'dashboardMain closed' : 'dashboardMain'}>
            {
                props.children    
            }
        </main>
    );
}

export default DashboardMainContent;
