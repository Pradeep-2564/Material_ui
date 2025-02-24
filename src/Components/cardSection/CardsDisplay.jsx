import { Stack } from '@mui/material'
import React from 'react'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import ThirdCard from './ThirdCard'

const CardsDisplay = () => {
  return (
    <Stack direction="row" gap={3} m={4}>
      <FirstCard/>
      <SecondCard/>
      <ThirdCard/>
    </Stack>
  )
}

export default CardsDisplay
