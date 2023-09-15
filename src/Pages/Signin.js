import React from 'react'
import {Layout} from '../Components/Layout';
import { Formlogin } from '../Components/FormLogin';
import { Box, Stack, Typography } from '@mui/material';
export const Signin = () => {
  return (
    <Layout>
      <Stack sx={{alignItems:'center',mt:'40px',height:'85vh'}}>
      <Box  sx={{borderRadius:'50%',bgcolor:'#f3e1c9',width:'150px',height:'150px',zIndex:'1',textAlign:'center'}}>
        <Typography variant='h5' sx={{mt:'50px',fontWeight:'bold'}}>Sign in</Typography>
      </Box>
      <Formlogin/>
      </Stack>
    </Layout>
  )
}
