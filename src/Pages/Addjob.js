import { Box, Button, MenuItem, Stack, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { addjobname } from '../Context/initial'
import { addjobcity } from '../Context/initial'
import {Layout} from '../Components/Layout';
import { GlobalContext } from '../Context/Context';
import {Action_Types as actions} from '../Context/ActionsTypes';

export const Addnewjob = () => {
  const [job,setjob] =useState({
    name:'',
    hour:'',
    city:'',
    description:'',
    image:'',
    id:''
  });
  const handlechangename = (event) =>{setjob({...job,name:event.target.value})}
  const handlechangehour = (event) =>{setjob({...job,hour:event.target.value})}
  const handlechangecity = (event) =>{setjob({...job,city:event.target.value})}
  const handlechangedescrip = (event) =>{setjob({...job,description:event.target.value})}
  const handlechangeimage = (event) =>{setjob({...job,image:event.target.value})}

  const Contextjob =useContext(GlobalContext);
  let findjob = Contextjob.jobs.some((item) => item === job);
  if (job.city.length ===0 ||job.name.length ===0 ||job.hour.length ===0 ||job.description.length ===0  ) {
    findjob = true;
  }
  return (
    <Layout>
    <Stack direction={'row'} sx={{height:'100vh',m:4}}>
      <Box sx={{width:'30vw',height:'60vh',m:2,p:2,bgcolor:'#f3e1c9',border:'solid green 2px',borderRadius:'40px'}}>
      <TextField
    required
    variant="standard"
    label='job name'
    select
    value={job.name}
    onChange={handlechangename}
    fullWidth
    >
      {
        addjobname.map((name) => (
          <MenuItem value={name}>{name}</MenuItem>
          ))
        }
    </TextField>
      <TextField
      sx={{mt:2}}
    required
    variant="standard"
    label='job time'
    select
    value={job.hour}
    onChange={handlechangehour}
    fullWidth
    >
    <MenuItem value='part time'>part time</MenuItem>
    <MenuItem value='full time'>full time</MenuItem>
    </TextField>
      <TextField
      sx={{mt:2}}
    required
    variant="standard"
    label='job city'
    select
    value={job.city}
    onChange={handlechangecity}
    fullWidth
    >
      {
        addjobcity.map((city) => (
          <MenuItem value={city}>{city}</MenuItem>
          ))
        }
    </TextField>
      <TextField
      sx={{mt:2}}
    required
    variant="standard"
    label='job description'
    value={job.description}
    onChange={handlechangedescrip}
    fullWidth
    >
    </TextField>
      <TextField
      sx={{mt:2}}
    required
    variant="standard"
    label='url image'
    value={job.image}
    onChange={handlechangeimage}
    fullWidth
    >
    </TextField>
    <Button disabled={findjob} onClick={() => Contextjob.dispatch({
        type :actions.ADD_JOB,
        job:job
    })}>
    <Box sx={{width:'150px',height:'45px',fontSize:'25px',bgcolor:'green',color:'white',textAlign:'center',borderRadius:'50px',ml:7,mt:2}} >
      add job
      </Box>
    </Button>
    </Box>
    <Box>welcome</Box>
    </Stack>
      </Layout>
  )
}
