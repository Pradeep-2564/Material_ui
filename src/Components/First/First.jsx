import {Box} from '@mui/material'
import React from 'react'
import {Button} from '@mui/material'

const First = () => {
  return (
    <Box style={{color: 'red',p: 2, border: '1px solid grey',padding: '10px'}}>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
    </Box>
  )
}

export default First
