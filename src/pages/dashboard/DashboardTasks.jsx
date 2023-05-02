import React, { useEffect, useState } from "react";
import gridIcon from "../../assets/img/grid_view_black_24dp.svg";
import listIcon from "../../assets/img/view_list_black_24dp.svg";
import {
  CompletedTasks,
  CreateTask,
  InProgressTasks,
  NewTaskBtn,
  TodoTasks,
} from "../../components";
import { Overlay } from "@mantine/core";
import instance from "../../config/api";

const DashboardTasks = () => {
  const [toggleTaskView, setToggleTaskView] = useState(false);
  const [tasks, setTasks] = useState(null);

  const toggleActiveClass = () => {
    setToggleTaskView(!toggleTaskView);
  };

  const { render, viewTaskForm, setViewTaskForm } = NewTaskBtn();

  useEffect(() => {
    instance
      .get("/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="dashboardTasks">
      <header className="dashboardTasks__headerContainer">
        {/* <div className="dashboardTasks__displayView">
                    <button
                        className={toggleTaskView ? "" : "active"}
                        onClick={toggleActiveClass}
                    >
                        <img src={gridIcon} alt="" height={20} />
                    </button>
                    <button
                        className={toggleTaskView ? "active" : ""}
                        onClick={toggleActiveClass}
                    >
                        <img src={listIcon} alt="" height={20} />
                    </button>
                </div> */}
        {render}
      </header>
      <main className="dashboardTasks__grid">
        <TodoTasks tasks={tasks} />
        <InProgressTasks tasks={tasks} />
        <CompletedTasks tasks={tasks} />
      </main>
      <CreateTask
        viewTaskForm={viewTaskForm}
        setViewTaskForm={setViewTaskForm}
      />    
    </section>
  );
};

export default DashboardTasks;
