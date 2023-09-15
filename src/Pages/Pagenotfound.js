import React from 'react'
import {Layout} from '../Components/Layout';
import { Box, Typography } from '@mui/material';
import {Typewriter} from '../Components/Typewriter'
export const Pagenotfound = () => {
  return (
    <Layout>
      <Box sx={{pt:'100px',textAlign:'center',mt:'100px',bgcolor:"#ffffffbf",width:'600px',height:'350px',ml:'25%',borderRadius:'35px'}}>
        <Typewriter text={'T his page is not found'} time={30}/> 
        <Typography variant='h4'>
        <Typewriter text={'L og in and try again'} time={30}/> 
        </Typography>
      </Box>
    </Layout>
  )
}
