import { Avatar, Tooltip } from '@mantine/core';
import girlPic from '../../assets/img/demo-girl-pic.jpg'
import boyPic from '../../assets/img/demo-boy-pic.jpg'
import manPic from '../../assets/img/demo-man-pic.jpg'

function AvatarGroup() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src={girlPic} radius="xl" size={30} />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src={boyPic} radius="xl" size={30} />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src={manPic} radius="xl" size={30} />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}

export default AvatarGroup