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
import { Overlay, Loader,Flex } from "@mantine/core";
import instance from "../../config/api";
import useTaskContext from "../../hooks/useTaskContext";

const DashboardTasks = () => {
  const [toggleTaskView, setToggleTaskView] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const { tasks, dispatch } = useTaskContext()

  const toggleActiveClass = () => {
    setToggleTaskView(!toggleTaskView);
  };

  const { render, viewTaskForm, setViewTaskForm } = NewTaskBtn();

  useEffect(() => {
    const fetchTasks = () => {
      instance
      .get("/tasks")
      .then((response) => {
        dispatch({type: 'SET_TASKS', payload: response.data})
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
    }
    fetchTasks()
  }, [dispatch]);

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
      {
        isLoading ? (
          <main className="dashboardTasks__grid">
            <Flex justify={"center"} align={"center"} w={'70vw'} h={'50vh'}>
            <Loader />
            </Flex>
          </main>
        )
        : (
          <main className="dashboardTasks__grid">
            <TodoTasks tasks={tasks} />
            <InProgressTasks tasks={tasks} />
            <CompletedTasks tasks={tasks} />
          </main>
        )
      }
      <CreateTask
        viewTaskForm={viewTaskForm}
        setViewTaskForm={setViewTaskForm}
      />    
    </section>
  );
};

export default DashboardTasks;
