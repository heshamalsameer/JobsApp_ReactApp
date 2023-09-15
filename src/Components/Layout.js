import React from 'react'
import { Header } from './Header'
import { Box } from '@mui/material'

export const Layout = (props) => {
  return (
    <Box className='Layout'>
    <Header/>
    <h1>{props.children}</h1>
    </Box>
  )
}
