import { Badge, Box, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const NavBar = () => {
  return (
    <Box>
        <Toolbar>
            <IconButton color='inherit'>
                <MenuIcon/>
            </IconButton>

            <Typography variant='h6'>Blogging Website</Typography>

            <IconButton>
            <Badge badgeContent={4} color="error">
                <NotificationsIcon/>
            </Badge>
            </IconButton>

            <IconButton>
                <AccountCircleIcon/>
            </IconButton>

        </Toolbar>

        <Divider/>
        <Toolbar>Express your emotions through words</Toolbar>
    </Box>
  )
}

export default NavBar
