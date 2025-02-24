import { Box, Container } from '@mui/material'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import HeroSection from '../NavBar/HeroSection'
import AccordianSection from '../NavBar/AccordianSection'
import CardsDisplay from '../cardSection/CardsDisplay'
import MainTab from '../TabSection/MainTab'
import MainGraph from '../chartSection/MainGraph'
import SideBar from '../NavBar/SideBar'

const LandingPage = ({mode, setMode}) => {
  return (
    <Container>
      <Box>
        <NavBar mode={mode} setMode={setMode} />
        <HeroSection/>
        <AccordianSection/>
        <CardsDisplay/>
        <MainTab/>
        <MainGraph/>
        <SideBar/>
      </Box>
    </Container>

  )
}

export default LandingPage
