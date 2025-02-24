import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DeleteIcon from '@mui/icons-material/Delete';

function SideBar({open, onClose}) {


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {['Payments', 'Results', 'Attendance'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 4 === 0 ? <CurrencyRupeeIcon /> : <LocalLibraryIcon/> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Inbox', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <DeleteIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default SideBar