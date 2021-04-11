import { Popover } from '@material-ui/core';
import { mdiDotsVertical } from '@mdi/js';
import Icon from '@mdi/react';
import { useRef, useState } from 'react';
import { Card, IconButton, ListItem } from 'ui-neumorphism';

export default function ThreeDotMenu({ options }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const icon = useRef();

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = e => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton ref={icon} onClick={handleClick}>
        <Icon path={mdiDotsVertical} size={1} />
      </IconButton>

      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        keepMounted
      >
        <Card>
          {options?.map(option => (
            <ListItem link onClick={handleClose}>
              {option}
            </ListItem>
          ))}
        </Card>
      </Popover>
    </>
  );
}
