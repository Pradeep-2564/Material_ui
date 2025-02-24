import {  Box, Container } from '@mui/material'
import React from 'react'
import AlertMsg from '../Main/Alert'
import AlertDialog from '../Main/Dailog'
import Progress from '../Main/Progress'
import Navbar from '../Main/Navbar'
import BasicSpeedDial from '../Main/SpeedDail'
import TitlebarBelowImageList from '../Main/ImageList'

const LandingPractice = () => {
  return (
    <Box>
        <Container>
            <Navbar/>
            <AlertMsg/>
            <AlertDialog/>
            <Progress/>
            <TitlebarBelowImageList/>
            <BasicSpeedDial/>
        </Container>
    </Box>
  )
}

export default LandingPractice
