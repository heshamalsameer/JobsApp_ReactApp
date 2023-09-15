import { Box, Button, MenuItem, Stack, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { addjobname } from '../Context/initial'
import { addjobcity } from '../Context/initial'
import {Layout} from './Layout';
import { GlobalContext } from '../Context/Context';
import { Typewriter } from './Typewriter';
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
    <Stack direction={'row'}  sx={{height:'100vh',m:4}}>
      <Box sx={{width:'25rem',height:'60vh',m:2,p:2,bgcolor:'#f3e1c99c',border:'solid green 2px',borderRadius:'40px'}}>
        <Stack direction={'column'} spacing={2}>

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
    <Box  sx={{width:'150px',height:'45px',fontSize:'25px',bgcolor:'green',color:'white',textAlign:'center',borderRadius:'50px'}} >
      add job
      </Box>
    </Button>
      </Stack>
    </Box >
    <Box sx={{width:'35rem',ml:5,mt:'50px',bgcolor:'#f3e1c99c',height:'50vh',p:2,borderRadius:'35px'}}>
      <Typewriter
        text={'y ou are Welcome..., you can add a new job opportunity. Just enter the data and wait for applicants for this opportunity.'}
        time={30} />
    </Box>
    </Stack>
      </Layout>
  )
}
