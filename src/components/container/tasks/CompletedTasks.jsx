import React from 'react';
import moreVertIcon from "../../../assets/img/more_vert_black_24dp.svg";
import AvatarGroup from './AvatarGroup';
import commentIcon from "../../../assets/img/comment_black_24dp.svg";
import TaskModal from './TaskModal';
import { formatDistanceToNow } from 'date-fns';
import { AiOutlineClockCircle } from 'react-icons/ai'

const CompletedTasks = ({tasks}) => {
    const filterCompletedTasks = () => {
        return(
            tasks.filter(task => {
                return task.status === 'Completed'
            })
        )
    }
    return (
        <div className="dashboardTasks__gridContainer">
            {
                tasks && (
                    <header>
                        <h2 className="dashboardTasks__gridHeading">
                            <span className="completed"></span>
                            Completed
                        </h2>
                        <span className="dashboardTasks__grid-itemsLength">
                            {tasks ? `(${filterCompletedTasks().length})` : `(0)`}
                        </span>
                    </header>
                )
            }
            {tasks && filterCompletedTasks().map(task => {
                return(
                    <div className="dashboardTasks__grid-items" key={task._id}>
                        <header>
                            <span className="dashboardTasks__grid-itemsCategory completed">
                                {task.category}
                            </span>
                            <TaskModal task={task}/>
                        </header>
                        <div className="dashboardTasks__grid-itemsContent">
                            <h3>{task.name}</h3>
                            <p>{task.description}</p>
                        </div>
                        <div
                            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        >
                            <span className='time-left'>
                                <AiOutlineClockCircle color='#02790d'/>
                                Completed
                            </span>
                            <span style={{justifySelf: 'end'}} className='created-at'>{formatDistanceToNow((new Date(task.createdAt).getFullYear(), new Date(task.createdAt).getMonth(), new Date(task.createdAt).getDate(), new Date(task.createdAt).getTime()), {addSuffix: true})}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default CompletedTasks;
