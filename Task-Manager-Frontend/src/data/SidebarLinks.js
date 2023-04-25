import homeIcon from '../assets/img/home_black_24dp.svg'
import projectIcon from '../assets/img/work_black_24dp.svg'
import taskIcon from '../assets/img/task_black_24dp.svg'
import messageIcon from '../assets/img/chat_black_24dp.svg'
import settingsIcon from '../assets/img/settings_black_24dp.svg'
import logOutIcon from '../assets/img/logout_black_24dp.svg'

const SidebarLinks = [
    {
        title: 'Home',
        icon: homeIcon,
        path: '/dashboard'
    },
    {
        title: 'Projects',
        icon: projectIcon,
        path: '/dashboard/projects'
    },
    {
        title: 'Tasks',
        icon: taskIcon,
        path: '/dashboard/tasks'
    },
    {
        title: 'Messages',
        icon: messageIcon,
        path: '/dashboard/messages'
    }
]

export default SidebarLinks