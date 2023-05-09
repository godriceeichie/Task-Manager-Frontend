import React from 'react';
import moreVertIcon from "../../../assets/img/more_vert_black_24dp.svg";
import AvatarGroup from './AvatarGroup';
import commentIcon from "../../../assets/img/comment_black_24dp.svg";
import TaskModal from './TaskModal';
import { AiOutlineClockCircle } from 'react-icons/ai'

const InProgressTasks = ({tasks}) => {
    const filterInProgressTasks = () => {
        return (
            tasks.filter(task => {
                return task.status === 'In Progress'
            })
        )
    }
    return (
        <div className="dashboardTasks__gridContainer">
            {
                tasks && (
                    <header>
                        <h2 className="dashboardTasks__gridHeading">
                            <span className="inProgress"></span>
                            In Progress
                        </h2>
                        <span className="dashboardTasks__grid-itemsLength">
                            {tasks ? `(${filterInProgressTasks().length})` : `(0)`}
                        </span>
                    </header>
                )
            }
            {tasks && filterInProgressTasks().map(task => {
                let daysLeft = (new Date(task.dueDate).getDate()) - (new Date().getDate())
                return (
                    <div className="dashboardTasks__grid-items" key={task._id}>
                        <header>
                            <span className="dashboardTasks__grid-itemsCategory inProgress">
                                {task.category}
                            </span>
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
                                <AiOutlineClockCircle color='#ebb02d'/>
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

export default InProgressTasks;
