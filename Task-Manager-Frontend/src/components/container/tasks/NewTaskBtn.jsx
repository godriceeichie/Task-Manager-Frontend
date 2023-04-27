import React, { useEffect, useState } from 'react';

const NewTaskBtn = () => {
    const [viewTaskForm, setViewTaskForm] = useState(false);
    const toggleTaskForm = () => {
        setViewTaskForm(!viewTaskForm)
    }

    useEffect(() => {
        setViewTaskForm(false)
    }, []);
    return { 
        viewTaskForm,
        render: <button onClick={toggleTaskForm} className="dashboardTasks__newTask">+ New Task</button>
    }
}

export default NewTaskBtn;
