import React, { useEffect, useState } from "react";
import gridIcon from "../../assets/img/grid_view_black_24dp.svg";
import listIcon from "../../assets/img/view_list_black_24dp.svg";
import { AvatarGroup, CompletedTasks, CreateTask, InProgressTasks, NewTaskBtn, TodoTasks } from "../../components";
import commentIcon from "../../assets/img/comment_black_24dp.svg";
import { Overlay } from "@mantine/core";
import axios from 'axios'
import moreVertIcon from "../../assets/img/more_vert_black_24dp.svg";

const DashboardTasks = () => {
    const [toggleTaskView, setToggleTaskView] = useState(false);
    const [tasks, setTasks] = useState(null);

    const toggleActiveClass = () => {
        setToggleTaskView(!toggleTaskView);
    };

    const { render, viewTaskForm, setViewTaskForm } = NewTaskBtn()
    // console.log(viewTaskForm)

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('http://localhost:4000/api/tasks/')
            const json = await response.json();
            if (response.ok) {
                setTasks(json);
            }
        };
        fetchTasks();
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
                <TodoTasks tasks={tasks}/>
                <InProgressTasks tasks={tasks}/>
                <CompletedTasks tasks={tasks}/>
            </main>
            <CreateTask viewTaskForm={viewTaskForm} setViewTaskForm={setViewTaskForm}/>
            {viewTaskForm && <Overlay zIndex={70}/>}
        </section>
    );
};

export default DashboardTasks;
