import { Box } from '@mui/material'
import React from 'react'
import HeroDivider from './HeroDivider'

const HeroText = () => {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'500px'

    }}>
      <Box>
        <HeroDivider/>
      </Box>
      
    </Box>
  )
}

export default HeroText
