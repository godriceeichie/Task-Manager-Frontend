import React, { useContext, useEffect, useState } from 'react';
import { Menu, Button, Text } from '@mantine/core';
import moreVertIcon from "../../../assets/img/more_vert_black_24dp.svg";
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'
import instance from '../../../config/api';
import useTaskContext from '../../../hooks/useTaskContext';

const TaskModal = ({ task }) => {
  const [deleted, setDeleted] = useState(false);
  const [edited, setEdited] = useState(false);
  const { tasks, dispatch } = useTaskContext()
  // console.log(task)
  useEffect(() => {
    if(deleted){
      instance.delete(`/tasks/${task._id}`)
      .then((response) => {
        dispatch({type: 'DELETE_TASK', payload: response.data})
        
      }, (err) => {
        console.log(err.response.data.error)
      })
    }
  },[deleted])

  useEffect(() => {
    if(deleted){
      instance.patch(`/tasks/${task._id}`)
      .then((response) => {
        dispatch({type: 'DELETE_TASK', payload: response.data})
        
      }, (err) => {
        console.log(err.response.data.error)
      })
    }
  },[edited])

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <img src={moreVertIcon} alt="" />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Edit</Menu.Label>
        <Menu.Item icon={<AiOutlineEdit size={14} />} onClick={() => {setEdited(!edited)}}>Edit Task</Menu.Item>
        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item color="red" icon={<MdOutlineDelete size={14} />} onClick={() => {setDeleted(!deleted)}}>Delete Task</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default TaskModal;
