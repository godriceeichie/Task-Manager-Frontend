import { CloseButton, Overlay } from '@mantine/core';
import React, { useEffect } from 'react';
import NewTaskBtn from './NewTaskBtn';

const CreateTask = ({viewTaskForm}) => {
    // const {viewTaskForm} = NewTaskBtn()
    // console.log(viewTaskForm)
    return (
        <aside className={viewTaskForm ? 'dashboardCreateTask active' : 'dashboardCreateTask'}>
            {
                viewTaskForm && <Overlay opacity={0.5} fixed={true}/>
            }
            <header className='dashboardCreateTask__header'>
                <h1>Create New Task</h1>
                <p>Fill out the inputs to create a new task</p>
                <span></span>
            </header>
            <form method="post">
                <div>
                    <label htmlFor="">Task name</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Status</label>
                        <div></div>
                    </div>
                    <div>
                        <label htmlFor="">Due Date</label>
                        <div></div>
                    </div>
                </div>
                
            </form>
        </aside>
    );
}

export default CreateTask;
