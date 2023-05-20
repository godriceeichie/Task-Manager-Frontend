import React from 'react';
import { Group, Menu } from '@mantine/core';
import { UserButton } from './UserButton';
import AccountModal from './AccountModal';
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'

const UserHeaderProfile = ({username, email}) => {
    return (
        <Group position="center">
            <Menu withArrow offset={3}>
                <Menu.Target>
                    <UserButton
                        image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                        name={username}
                        email={email}
                    />
                </Menu.Target>
                {/* ...Menu.Items */}
                <Menu.Dropdown >
                    <Menu.Label>Edit </Menu.Label>
                    <Menu.Item icon={<AiOutlineEdit size={14} />}>Edit Profile</Menu.Item>
                    <Menu.Divider />

                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item color="red" icon={<MdOutlineDelete size={14} />} >Delete Account</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Group>
    );
}

export default UserHeaderProfile;
