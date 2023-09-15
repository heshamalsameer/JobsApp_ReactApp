import { Box, Button, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import {Action_Types as actions} from '../Context/ActionsTypes';
import { GlobalContext } from '../Context/Context';
import { Link } from 'react-router-dom';

export const Formlogup = () => {
  const [user,setuser] =useState({
    name:'',
    email:'',
    password:'',
    phone:0,
    loginby:''
  });
  // const [helperText,sethelperText] =useState("")
  const handlechangeloginby = (event) =>{
    setuser({...user,loginby:event.target.value});
    Contextuser.setloginby(event.target.value);
    
  }
  const handlechengname = (event) =>{setuser({...user,name:event.target.value})}
  const handlechengemail = (event) =>{setuser({...user,email:event.target.value})}
  const handlechengpassword = (event) =>{setuser({...user,password:event.target.value})}
  const handlechengphone = (event) =>{setuser({...user,phone:event.target.value})}

  const Contextuser =useContext(GlobalContext);
  let finduser = Contextuser.users.some((item) => item.email === user.email);
  if (user.email.length ===0 ||user.name.length ===0 ||user.password.length ===0 ||user.loginby.length ===0  ) {
    finduser = true;
  }
  // useEffect(() => {
  //   // Contextuser.setloginby(user.loginby);
  //   localStorage.setItem('loginby', user.loginby);
  // },[user.loginby])
  return (
    <Box className='logup' sx={{width:'350px',height:'400px',bgcolor:'#f3e1c99c',border:'solid green 2px',p:'15px',borderRadius:'40px',mt:'-30px'}}>
    <Stack spacing={1} direction={"column"}>
    <TextField onChange={handlechengname} id="standard-basic" required label="UserName" type='text' variant="standard" />
    <TextField onChange={handlechengemail}id="standard-basic" helperText='Choose an email that has not been used before' required label="Email" type='email' variant="standard" />
    <TextField onChange={handlechengpassword}id="standard-basic" required label="Password" type='password' variant="standard" />
    <TextField onChange={handlechengphone}id="standard-basic" label="Phone" type='number' variant="standard" />
    <TextField
    required
    variant="standard"
    label='login by'
    select
    value={user.loginby}
    onChange={handlechangeloginby}
    fullWidth
    >
      <MenuItem value='employee'>search for a job</MenuItem>
      <MenuItem value='company'>publish a job</MenuItem>

    </TextField>
    <Typography>if you have account: <Link to={'/signin'}>signin</Link></Typography>
    <Button
        disabled={finduser} 
        onClick={() => {Contextuser.dispatch({
        type :actions.ADD_USER,
        user:user
    })
    Contextuser.setlogin({login:true});
    }}
    >
    <Box sx={{mt:1,width:'150px',height:'45px',fontSize:'25px',bgcolor:'green',color:'white',textAlign:'center',borderRadius:'50px'}} >
      Sign up
      </Box>
    </Button>
    </Stack>
    </Box>
  )
}
