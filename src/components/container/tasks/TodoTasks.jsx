import React from 'react';
import moreVertIcon from "../../../assets/img/more_vert_black_24dp.svg";
import AvatarGroup from './AvatarGroup';
import commentIcon from "../../../assets/img/comment_black_24dp.svg";
import TaskModal from './TaskModal'
import { AiOutlineClockCircle } from 'react-icons/ai'
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const TodoTasks = ({tasks, setViewTaskForm, viewTaskForm }) => {
    const filterTodoTasks = () => {
        // console.log(tasks)
       return(
        tasks.filter(task => {
            return task.status === 'Todo'
        })
       )
    }
    return (
        <div className="dashboardTasks__gridContainer">
           {
            tasks && (
                <header>
                    <h2 className="dashboardTasks__gridHeading">
                        <span></span>
                        Todo
                    </h2>
                    <span className="dashboardTasks__grid-itemsLength">
                        {tasks ? `(${filterTodoTasks().length})` : `(0)`}
                    </span>
                </header>
            )
           }
            {(tasks) && filterTodoTasks().map(task => {
                let daysLeft = (new Date(task.dueDate).getDate()) - (new Date().getDate())
                return(
                    <div className="dashboardTasks__grid-items" key={task._id}>
                        <header>
                            <span className="dashboardTasks__grid-itemsCategory todo">
                                {task.category}
                            </span>
                            {/* <img src={moreVertIcon} alt="" /> */}
                            <TaskModal task={task} setViewTaskForm={setViewTaskForm} viewTaskForm={viewTaskForm} inputFields={{}}/>
                        </header>
                        <div className="dashboardTasks__grid-itemsContent">
                            <h3>{task.name}</h3>
                            <p>{task.description}</p>
                        </div>
                        <div
                            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        >
                            {/* <AvatarGroup /> */}
                            <span className='time-left'>
                                <AiOutlineClockCircle color='#e74646'/>
                                {(daysLeft > 0) ? `${daysLeft} days left` : `Time has expired`}
                            </span>
                            <span className='created-at'>{formatDistanceToNow((new Date(task.createdAt).getFullYear(), new Date(task.createdAt).getMonth(), new Date(task.createdAt).getDate(), new Date(task.createdAt).getTime()), {addSuffix: true})}</span>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default TodoTasks;
