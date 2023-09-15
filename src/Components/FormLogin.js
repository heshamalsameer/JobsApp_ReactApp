import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useContext, useState } from 'react';
import { GlobalContext } from '../Context/Context';
import { Link } from 'react-router-dom';
// import {Action_Types as actions} from '../Context/ActionsTypes';

export const Formlogin = () => {
  const [finduser,setfinduser] =useState(false);
  const [user,setuser] =useState({
    name:'',
    email:'',
    password:'',
  });
  const handlechengname = (event) =>{setuser({...user,name:event.target.value})}
  const handlechengemail = (event) =>{setuser({...user,email:event.target.value})}
  const handlechengpassword = (event) =>{setuser({...user,password:event.target.value})}
  const Contextuser =useContext(GlobalContext);

  const CheckUser = () => {
    let a = Contextuser.users.some((item) =>  { return item.email === user.email && item.password === user.password });
    setfinduser(a);
    if(finduser) {
      alert('success Login...');
      Contextuser.setlogin({login:true})
    }else {
      alert('this user is not found,Make sure to fill out the fields and Verify your email or password')
    }
  }
  return (
    <Box className='login' sx={{width:'350px',height:'290px',bgcolor:'#f3e1c99c',border:'solid green 2px',p:'15px',borderRadius:'40px',mt:'-30px'}}>
    <Stack spacing={2} direction={"column"}>
    <TextField onChange={handlechengname} id="standard-basic"  required label="UserName" variant="standard" />
    <TextField onChange={handlechengemail} id="standard-basic" required label="Email" type='email' variant="standard" />
    <TextField onChange={handlechengpassword} id="standard-basic" required label="Password" type='password' variant="standard" />
    <Typography>if you dont have account: <Link to={'/signup'}>signup</Link></Typography>
    <Button onClick={CheckUser} >
    <Box sx={{width:'150px',height:'45px',fontSize:'25px',bgcolor:'green',color:'white',textAlign:'center',borderRadius:'50px'}} >
      Sign in
      </Box>
    </Button>
    </Stack>
    </Box>
  )
}
