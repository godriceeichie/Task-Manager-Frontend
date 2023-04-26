import React, { useEffect, useState } from 'react';
import gridIcon from '../../assets/img/grid_view_black_24dp.svg'
import listIcon from '../../assets/img/view_list_black_24dp.svg'


const DashboardTasks = () => {
    const [toggleTaskView, setToggleTaskView] = useState(false);
    const [tasks, setTasks] = useState(null);

    const toggleActiveClass = () => {
        setToggleTaskView(!toggleTaskView)
    }

    
    useEffect(() => { 
       
        const fetchTasks = async () => {
            const response = await fetch('http://localhost:4000/api/tasks/')
            const json = await response.json()
            if(response.ok){
                setTasks(json)
            }
            
        }
        fetchTasks()
    }, []);

    return (
        <section className='dashboardTasks'>
            <header className='dashboardTasks__headerContainer'>
                <div className='dashboardTasks__displayView'>
                    <button className={toggleTaskView ? '' : 'active'} onClick={toggleActiveClass}>
                        <img src={gridIcon} alt="" height={20}/>
                    </button>
                    <button className={toggleTaskView ? 'active' : ''} onClick={toggleActiveClass}>
                        <img src={listIcon} alt="" height={20}/>
                    </button>
                </div>
                <button className='dashboardTasks__newTask'>+ New Task</button>
            </header>
            <main className="dashboardTasks__grid-container">
                <div className='dashboardTasks__grid-items'>
                    <header>
                        <h2 className='dashboardTasks__grid-heading'>
                            <span></span>
                            Todo
                        </h2>
                        <span className='dashboardTasks__grid-itemsLength'>{ tasks ? `(${tasks.length})` : `(0)`}</span>
                    </header>
                    { tasks && tasks.map((task) => {
                        return(
                            <div>
                                <header>
                                    <p></p>
                                </header>
                            </div>
                        )
                    })}
                </div>
                <div>e</div>
                <div>d</div>
            </main> 
        </section>
    );
}

export default DashboardTasks;
