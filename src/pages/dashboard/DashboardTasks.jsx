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
import { useRecoilState } from "recoil";
import taskSearchAtom from "../../states/atoms/taskSearchAtom";
import useAuthContext from "../../hooks/useAuthContext";


const DashboardTasks = () => {
  const [toggleTaskView, setToggleTaskView] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const { tasks, dispatch } = useTaskContext()


  const toggleActiveClass = () => {
    setToggleTaskView(!toggleTaskView);
  };
  

  const { render, viewTaskForm, setViewTaskForm } = NewTaskBtn();
  const { createTaskForm } = CreateTask(viewTaskForm, setViewTaskForm)

  const [taskSearchInput, setTaskSearchInput] = useRecoilState(taskSearchAtom)

  const keys = ["name", "description", "category"]
  const search = (data) => {
    return data && data.filter(item => keys.some(key => item[key].toLowerCase().includes(taskSearchInput)))
  }

  const { user } = useAuthContext()

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
      .get(`/tasks?q=${taskSearchInput}`, {
        headers: {
          'Authorization': `Bearer ${user && user.token}`
        }
      })
      .then((response) => {
        dispatch({type: 'SET_TASKS', payload: response.data})
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
    }
    fetchTasks()
    // console.log(user)

  }, [dispatch, user]);


  return (
    <section className="dashboardTasks">
      <header className="dashboardTasks__headerContainer">
        
        {render}
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
      </header>
      {
        isLoading ? (
          <main className="dashboardTasks__grid" style={dashboardLoadingStyle}>
            <Loader />
          </main>
        )
        : (
          <main className="dashboardTasks__grid">
            <TodoTasks tasks={search(tasks)} viewTaskForm={viewTaskForm} setViewTaskForm={setViewTaskForm} />
            <InProgressTasks tasks={search(tasks)} viewTaskForm={viewTaskForm} setViewTaskForm={setViewTaskForm}/>
            <CompletedTasks tasks={search(tasks)} /> 
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
