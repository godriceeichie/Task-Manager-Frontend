import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Modal, useMantineTheme } from '@mantine/core';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useLogout } from '../../hooks/useLogout';

function LogOut(opened, close) {
    const { logout } = useLogout()
  
  const theme = useMantineTheme();
  const handleClick = () => {
    logout()
  }

  return {
    render: (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Logout"
                overlayProps={{
                color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                opacity: 0.55,
                blur: 3,
                radius: 'md'
                }}
                centered
                
            >
                {/* <div>
                    <AiOutlineCheckCircle />
                </div> */}
                <div className='logout-body'>
                    <h1 className='logoutModalText'>Are you sure you want to log out</h1>
                    <button className='logout-btn' onClick={handleClick}>Logout</button>
                </div>
            </Modal>

                {/* <Group position="center">
                    <Button onClick={open}>Open modal</Button>
                </Group> */}
        </>
    )
  };
}
export default LogOut