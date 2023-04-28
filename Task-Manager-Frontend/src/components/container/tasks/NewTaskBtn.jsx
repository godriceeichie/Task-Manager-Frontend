import React, { useEffect, useState } from 'react';

const NewTaskBtn = () => {
    const [viewTaskForm, setViewTaskForm] = useState(false);
    const toggleTaskForm = () => {
        setViewTaskForm(!viewTaskForm)
        // console.log(viewTaskForm)
    }

    useEffect(() => {
        setViewTaskForm(false)
    }, []);
    return { 
        toggleTaskForm,
        viewTaskForm,
        render: <button onClick={toggleTaskForm} className="dashboardTasks__newTask">+ New Task</button>
    }
}

export default NewTaskBtn;
