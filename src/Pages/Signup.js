import React from 'react'
import {Layout} from '../Components/Layout';
import { Formlogup } from '../Components/Formlogup';
import { Box, Stack, Typography } from '@mui/material';
export const Signup = () => {
  return (
    <Layout>
      <Stack sx={{alignItems:'center',mt:'10px',height:'85vh'}}>
      <Box  sx={{borderRadius:'50%',bgcolor:'#f3e1c9',width:'150px',height:'150px',zIndex:'1',textAlign:'center'}}>
        <Typography variant='h5' sx={{mt:'50px',fontWeight:'bold'}}>Sign up</Typography>
      </Box>
      <Formlogup/>
      </Stack>
    </Layout>
  )
}
