import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'
import { BsChevronDown } from 'react-icons/bs'
import { Menu } from '@mantine/core';

const AccountModal = () => {
    return (
        <Menu shadow="md" width={200}>
            {/* <Menu.Target>
                <BsChevronDown />
            </Menu.Target> */}

            <Menu.Dropdown>
                <Menu.Label>Edit </Menu.Label>
                <Menu.Item icon={<AiOutlineEdit size={14} />}>Edit Profile</Menu.Item>
                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item color="red" icon={<MdOutlineDelete size={14} />} >Delete Account</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default AccountModal;
