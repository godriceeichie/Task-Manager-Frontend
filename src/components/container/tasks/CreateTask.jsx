import { Overlay, Button } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { DateInput } from "@mantine/dates";
import instance from "../../../config/api";
import ErrorModal from "../ErrorModal";
import useTaskContext from "../../../hooks/useTaskContext";
import { taskSchema } from "../../../schema/taskSchema";
import { z } from 'zod'


const CreateTask = ({ viewTaskForm, setViewTaskForm }) => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState(""); 
  const [status, setstatus] = useState("");
  const [priority, setpriority] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState()


  const task = {
    name,
    description,
    category,
    status,
    priority,
    dueDate,
  };

  const { tasks, dispatch } = useTaskContext()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setIsLoading(true)
    // const {priority} = taskSchema.parse(task)

    try{
      taskSchema.parse(task)
      
    }catch(err){
      console.log(err)

    }
    
    instance.post("/tasks", task).then(
      (res) => {
        console.log(res);
        setname("");
        setdescription("");
        setcategory("");
        setstatus("");
        setpriority("");
        setdueDate("");
        setError(null);
        dispatch({type: 'CREATE_TASK', payload: task})
        setIsLoading(false)
      },
      (err) => {
        setError(err.response.data.error);
      }
    );

  };

  return (
    <aside
      className={
        viewTaskForm ? "dashboardCreateTask active" : "dashboardCreateTask"
      }
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
      <form
        method="post"
        className="dashboardCreateTask__form"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="task-name">Task name</label>
          <input
            type="text"
            name="task-name"
            id="task-name"
            onChange={(e) => setname(e.target.value)}
            value={name}
            
          />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            onChange={(e) => setdescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="categoryInput-container">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            onChange={(e) => setcategory(e.target.value)}
            value={category}
          />
        </div>

        <div className="non-input-container">
          <div className="statusInput-container">
            <label htmlFor="">Status</label>
            <select
              name=""
              id="taskStatus"
              onChange={(e) => setstatus(e.target.value)}
              value={status}
              placeholder="Select task status"
            >
              <option value="" disabled></option>
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="statusInput-container">
            <label htmlFor="">Priority</label>
            <select
              name=""
              id="taskStatus"
              onChange={(e) => setpriority(e.target.value)}
              value={priority}
              placeholder="Select task priority"
            >
              <option value="" disabled></option>
              <option value="Urgent">Urgent</option>
              <option value="Normal">Normal</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <DateInput
            minDate={new Date()}
            label="Due Date"
            placeholder="DD/MM/YYYY HH:mm:ss"
            maw={400}
            valueFormat="DD/MM/YYYY HH:mm:ss"
            mx="auto"
            value={dueDate}
            onChange={(e) => setdueDate(e)}
          />
        </div>
        {/* <button type="submit" className="dashboardCreateTask__formButton">
          Submit Task
        </button> */}
        {
          isLoading ? ( <Button loading type="submit" radius={"md"} color="blue">
          Submit Task
        </Button> ) : (<Button type="submit" radius={"md"} color="blue">
          Submit Task
        </Button>)
        }
      </form>
      
      {error && <ErrorModal err={error} />}
    </aside>
    
  );
};

export default CreateTask;
