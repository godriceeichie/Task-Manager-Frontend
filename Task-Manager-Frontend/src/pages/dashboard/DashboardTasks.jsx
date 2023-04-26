import React, { useEffect, useState } from 'react';
import gridIcon from '../../assets/img/grid_view_black_24dp.svg'
import listIcon from '../../assets/img/view_list_black_24dp.svg'
import moreVertIcon from '../../assets/img/more_vert_black_24dp.svg'
import { AvatarGroup } from '../../components';
import commentIcon from '../../assets/img/comment_black_24dp.svg'

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
            <main className="dashboardTasks__grid">
                <div className='dashboardTasks__gridContainer'>
                    <header>
                        <h2 className='dashboardTasks__gridHeading'>
                            <span></span>
                            Todo
                        </h2>
                        <span className='dashboardTasks__grid-itemsLength'>{ tasks ? `(${tasks.length})` : `(0)`}</span>
                    </header>
                    { tasks && tasks.map((task) => {
                        return( 
                            <div className='dashboardTasks__grid-items'>
                                <header>
                                    <span className='dashboardTasks__grid-itemsCategory'>{task.category}</span>
                                    <img src={moreVertIcon} alt="" />
                                </header>
                                <div className='dashboardTasks__grid-itemsContent'>
                                    <h3>{task.name}</h3>
                                    <p>{task.description}</p>
                                </div>
                                <div style={{display: 'flex', justifyContent:'space-between'}}>
                                    <AvatarGroup />
                                    <img src={commentIcon} alt=""/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div style={{backgroundColor: 'blue'}}>e</div>
                <div style={{backgroundColor: 'green'}}>d</div>
            </main> 
        </section>
    );
}

export default DashboardTasks;
