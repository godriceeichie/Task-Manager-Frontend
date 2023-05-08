import React from 'react';
import { Menu, Button, Text } from '@mantine/core';
import moreVertIcon from "../../../assets/img/more_vert_black_24dp.svg";
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'

const TaskModal = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        {/* <Button>Toggle menu</Button> */}
        <img src={moreVertIcon} alt="" />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Edit</Menu.Label>
        <Menu.Item icon={<AiOutlineEdit size={14} />}>Edit Task</Menu.Item>
        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item color="red" icon={<MdOutlineDelete size={14} />}>Delete Task</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default TaskModal;
