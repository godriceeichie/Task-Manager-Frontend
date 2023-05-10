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
import { Loader } from "@mantine/core";
import instance from "../../config/api";
import useTaskContext from "../../hooks/useTaskContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const DashboardTasks = () => {
  const [toggleTaskView, setToggleTaskView] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const { tasks, dispatch } = useTaskContext()

  const toggleActiveClass = () => {
    setToggleTaskView(!toggleTaskView);
  };


  const { render, viewTaskForm, setViewTaskForm } = NewTaskBtn();
  const { createTaskForm } = CreateTask(viewTaskForm, setViewTaskForm)
  const dashboardMainStyle = {
    marginTop: '0.75rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    width: '100%',
  }

  const dashboardLoadingStyle = {
    marginTop: '0.75rem',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }

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
      {/* w={'70vw'} h={'50vh'} */}
      {
        isLoading ? (
          <main className="dashboardTasks__grid" style={dashboardLoadingStyle}>
            <Loader />
          </main>
        )
        : (
          <main className="dashboardTasks__grid" style={dashboardMainStyle}>
            <TodoTasks tasks={tasks} viewTaskForm={viewTaskForm} setViewTaskForm={setViewTaskForm} />
            <InProgressTasks tasks={tasks} />
            <CompletedTasks tasks={tasks} /> 
          </main>
        )
      }
      {
        createTaskForm
      }
    </section>
  );
};

export default DashboardTasks;
