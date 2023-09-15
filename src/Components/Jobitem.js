import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Drawer, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/Context';
import {Action_Types as actions} from '../Context/ActionsTypes';

export const Jobitem = (props) => {
  const [open,setopen] = useState(false);
  const ContextJobs =useContext(GlobalContext);
  // console.log((ContextJobs.users[0].loginby));
  // console.log(ContextJobs.loginby);
  // let loginby = 'employee';
  // ContextJobs.setloginby(ContextJobs.users[0].loginby)
  let loginby = ContextJobs.loginby;
  let Jobapplications = ContextJobs.employees.filter((item) => {return item.id === props.id});

  return (
    <Card  className='jobitem d-flex flex-column justify-content-between' key={props.id} sx={{m:1,maxWidth:'250px',bgcolor:'#FFFCF9'}}>
    <CardActionArea>
    <CardMedia sx={{Width:'100%'}} component={'img'} height={250} image={props.image} alt={props.image}/>
    </CardActionArea>
    <CardContent>
      <Typography variant='h5' gutterBottom component={'div'}>
        {props.name}
      </Typography>
      <Typography variant='h6' gutterBottom component={'div'}>
        City: {props.city}
      </Typography>
      <Typography variant='h6' gutterBottom component={'div'}>
        {props.hour}
      </Typography>
      <Typography variant='h6' color={'text.secondary'}>
      {props.description}
      </Typography>
      <Stack direction='row'className='d-flex justify-content-between' >
        {
          loginby === 'company'? 
          <Button 
          variant='contained'
          sx={{bgcolor:'primary.light',mr:'4px'}}
          onClick={() => setopen(true)}
          >
          Job applications
          </Button>
          :
          <Button 
          variant='contained'
          sx={{bgcolor:'primary.light',mr:'4px'}}
          onClick={() => ContextJobs.Setopenmodel({open:true,id:props.id})}
          >
            GetJob
          </Button>
        }
      </Stack>
      <Drawer variant='temporary' open={open} anchor='right' onClose={() => {setopen(false)}}>
          <Box sx={{width:'500px'}} p={3} >
            <Stack spacing={1}>
              {
                Jobapplications.length ===0 ? 
                <Box sx={{textAlign:'center',fontSize:'50px',fontWeight:'bold'}}>
                  There is no one applying for this job 
                </Box>
                :
                  Jobapplications.map((item,index) => (
                  <Stack direction={'row'} className='d-flex justify-content-between'>
                    <Stack direction={'row'} >
                    <Typography sx={{mr:1}} variant='h6'>{`${++index})`}</Typography>
                    <Typography variant='h6'>{item.name}</Typography>
                    </Stack>
                    <Box sx={{right:0}}>
                    <Button onClick={() =>  ContextJobs.dispatch({
                        type :actions.REMOVE_FROM_EMPLOYEES,
                        employee: item
                    })}
                    sx={{fontSize:'12px',fontWeight:'bold'}} variant="contained" color='error' size='small' startIcon={<DeleteIcon />}>
                      Delete
                    </Button> 
                    <Button
                      onClick={() => ContextJobs.Settwomodel({employee:item,open:true})}
                      sx={{ml:2,fontSize:'12px',fontWeight:'bold'}} variant="contained" size='small'
                    >
                      showdata
                    </Button> 
                    </Box>
                  </Stack>
              ))
              }
            </Stack>
          </Box>
      </Drawer>
    </CardContent>
  </Card>
  )
}
