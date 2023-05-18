import React, { useEffect, useState } from 'react';
import profilePic from '../../assets/img/profilepic.png'
import useAuthContext from '../../hooks/useAuthContext';
import arrowLeft from '../../assets/img/keyboard_double_arrow_left_black_24dp.svg'
import arrowRight from '../../assets/img/keyboard_double_arrow_right_black_24dp.svg'
import taskSearchAtom from '../../states/atoms/taskSearchAtom';
import { useRecoilState } from 'recoil';

const DashboardHeader = () => {
    const { user } = useAuthContext()
    const [taskSearchInput, setTaskSearchInput] = useRecoilState(taskSearchAtom)
    useEffect(() => {
        console.log(taskSearchInput)
    }, [taskSearchInput])

    return (
        <header className='dashboardHeader'>
            <div className='dashboardHeader__container'>
                <div className="dashboardHeader-welcomeText">
                    {/* <h1>{`Welcome, ${ user && welcomeName}👋`}</h1> */}
                    {
                        user && <h1>{`Welcome, ${ user.username.split(" ")[0]}👋`}</h1>
                    }
                </div>
                <div className="dashboardHeader__searchbar">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                    <input type="search" placeholder='Search' value={taskSearchInput} onChange={(e) => setTaskSearchInput(e.target.value)}/>
                </div>
                <div className="dashboardHeader__userInfo">
                    <button className='dashboardHeader_notification'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888888"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
                        <span className='notification-badge'>1</span>
                    </button>
                    <div className='userInfo__details'>
                        <div>
                            <h4>{user && user.username}</h4>
                            <h5>
                                {user && user.email}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;
