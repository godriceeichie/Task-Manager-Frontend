import React from 'react';
import moreVertIcon from "../../../assets/img/more_vert_black_24dp.svg";
import AvatarGroup from './AvatarGroup';
import commentIcon from "../../../assets/img/comment_black_24dp.svg";
import TaskModal from './TaskModal'
import { AiOutlineClockCircle } from 'react-icons/ai'
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const TodoTasks = ({tasks}) => {
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
                // if(task._id === '6459499698915d5eb9790e16') console.log(task)
                return(
                    <div className="dashboardTasks__grid-items" key={task._id}>
                        <header>
                            <span className="dashboardTasks__grid-itemsCategory todo">
                                {task.category}
                            </span>
                            {/* <img src={moreVertIcon} alt="" /> */}
                            <TaskModal task={task}/>
                        </header>
                        <div className="dashboardTasks__grid-itemsContent">
                            <h3>{task.name}</h3>
                            <p>{task.description}</p>
                        </div>
                        <div
                            style={{ display: "flex", justifyContent: "space-between" }}
                        >
                            {/* <AvatarGroup /> */}
                            <span className='time-left'>
                                <AiOutlineClockCircle color='#e74646'/>
                                {(daysLeft > 0) && `${daysLeft} days left`}
                            </span>
                            <img src={commentIcon} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default TodoTasks;
