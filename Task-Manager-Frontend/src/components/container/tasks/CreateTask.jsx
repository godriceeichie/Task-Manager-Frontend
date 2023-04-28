import { CloseButton, Overlay } from '@mantine/core';
import React, { useEffect, useRef } from 'react';
import NewTaskBtn from './NewTaskBtn';

const CreateTask = ({viewTaskForm, setViewTaskForm}) => {
    // const {viewTaskForm} = NewTaskBtn()
    // console.log(viewTaskForm)
    const taskForm = useRef()
    // console.log(taskForm.current.className)
    return (
        <aside className={viewTaskForm ? 'dashboardCreateTask active' : 'dashboardCreateTask'} ref={taskForm}>
           
            <header className='dashboardCreateTask__header'>
                <div className='dashboardCreateTask__headingContainer'>
                    <h1>Create New Task</h1>
                    <p>Fill out the inputs to create a new task</p>
                </div>
                <span className='close-btn' onClick={() => setViewTaskForm(false)}></span>
            </header>
            <form method="post" className='dashboardCreateTask__form'>
                <div>
                    <label htmlFor="task-name">Task name</label>
                    <input type="text" name="task-name" id="task-name" />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                </div>
                <div className='non-input-container'>
                    <div className='priorityInput-container'>
                        <label htmlFor="">Priority</label>
                        <div className='priorityInput'></div>
                    </div>
                    <div className='statusInput-container'>
                        <label htmlFor="">Status</label>
                        <div className='statusInput'></div>
                    </div>
                    <div className='startDate-container'>
                        <label htmlFor="">Start Date</label>
                        <div className='startDateInput'></div>
                    </div>
                    <div className='dueDate-container'>
                        <label htmlFor="">Due Date</label>
                        <div className='dueDateInput'></div>
                    </div>
                </div>
                <button type='submit' className='dashboardCreateTask__formButton'>Submit Task</button>
            </form>
        </aside>
    );
}

export default CreateTask;
