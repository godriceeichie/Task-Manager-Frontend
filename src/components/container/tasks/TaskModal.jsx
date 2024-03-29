import React, { useContext, useEffect, useState } from 'react';
import { Menu } from '@mantine/core';
import moreVertIcon from "../../../assets/img/more_vert_black_24dp.svg";
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'
import instance from '../../../config/api';
import useTaskContext from '../../../hooks/useTaskContext';
import CreateTask from './CreateTask';
import useAuthContext from '../../../hooks/useAuthContext';

const TaskModal = ({ task, setViewTaskForm, viewTaskForm }) => {
  const [deleted, setDeleted] = useState(false);
  const [edited, setEdited] = useState(false);
  const { tasks, dispatch } = useTaskContext()
  const { user } = useAuthContext()
  useEffect(() => {
    if(deleted){
      instance.delete(`/tasks/${task._id}`, {
        headers: {
          'Authorization': `Bearer ${user && user.token}`
        }
      })
      .then((response) => {
        dispatch({type: 'DELETE_TASK', payload: response.data})
        
      }, (err) => {
        console.log(err.response.data.error)
      })
    }
  },[deleted, user])

  // // useEffect(() => {
  // //   if(edited){
  // //     setViewTaskForm(true)
  // //     instance.get(`/tasks/${task._id}`)
  // //     .then(response => {
  // //       console.log(response.data)
  // //       fields.setname(response.data.name)
  // //       console.log(fields.name)
  // //     }, (err) => {
  // //       console.log(err)
  // //     })
  // //   }


  // },[edited])

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <img src={moreVertIcon} alt="" />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Edit</Menu.Label>
        <Menu.Item icon={<AiOutlineEdit size={14} />} onClick={() => setEdited(true)}>Edit Task</Menu.Item>
        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item color="red" icon={<MdOutlineDelete size={14} />} onClick={() => {setDeleted(!deleted)}}>Delete Task</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default TaskModal;
