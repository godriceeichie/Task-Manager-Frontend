import { NativeSelect } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { DateInput } from '@mantine/dates'

const CreateTask = ({ viewTaskForm, setViewTaskForm }) => {
  const taskForm = useRef();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskStatus, setTaskStatus] = useState('');
  
  const [taskDueDate, setTaskDueDate] = useState();

  return (
    <aside
      className={
        viewTaskForm ? "dashboardCreateTask active" : "dashboardCreateTask"
      }
      ref={taskForm}
    >
      <header className="dashboardCreateTask__header">
        <div className="dashboardCreateTask__headingContainer">
          <h1>Create New Task</h1>
          <p>Fill out the inputs to create a new task</p>
        </div>
        <span
          className="close-btn"
          onClick={() => setViewTaskForm(false)}
        ></span>
      </header>
      <form method="post" className="dashboardCreateTask__form">
        <div>
          <label htmlFor="task-name">Task name</label>
          <input
            type="text"
            name="task-name"
            id="task-name"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
          ></textarea>
        </div>
        <div className="categoryInput-container">
            <label htmlFor="category">Category</label>
            <input
                type="text"
                id="category"
                onChange={(e) => setTaskCategory(e.target.value)}
                value={taskCategory}
            />
        </div>  
        
        <div className="non-input-container">
          <NativeSelect
            data={['Todo', 'In Progress', 'Completed']}
            label="Status"
            description=""
            placeholder="Select your task status"
            radius={'md'}
          />
          
          <NativeSelect
            data={['Criritcal', 'Normal', 'Low']}
            label="Priority"
            description=""
            placeholder="Select your task prioirity"
            radius={'md'}
          />
          
          <DateInput
            minDate={new Date()}
            label="Due Date"
            placeholder="DD/MM/YYYY HH:mm:ss"
            maw={400}
            valueFormat="DD/MM/YYYY HH:mm:ss"
            mx="auto"
          />
          {/* <div className="dueDate-container">
            <label htmlFor="">Due Date</label>
            <div className="dueDateInput"></div>
          </div> */}
        </div>
        <button type="submit" className="dashboardCreateTask__formButton">
          Submit Task
        </button>
      </form>
    </aside>
  );
};

export default CreateTask;
