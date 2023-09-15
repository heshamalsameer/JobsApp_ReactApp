import React, { useContext, useState } from "react";
import { Box, Button, Modal, TextField, Typography, styled } from "@mui/material";
import { GlobalContext } from "../Context/Context";
import SendIcon from '@mui/icons-material/Send';
import {Action_Types as actions} from '../Context/ActionsTypes';


const StyledModel = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const BoxModal = styled(Box)({
    width: "400px",
    height: "400px",
    borderRadius: "20px",
    padding: "30px",
    backgroundColor:'background.default',
    color:'text.primary'
  });
  

  export const GetJob = () => {
    const Context =useContext(GlobalContext);
    const [user,setuser] =useState({
      name:'',
      email:'',
      phone:'',
      file:'',
      id:''
    });
    const handlechengname = (event) =>{setuser({...user,name:event.target.value,id:Context.openmodel.id})}
    const handlechengphone = (event) =>{setuser({...user,phone:event.target.value,id:Context.openmodel.id})}
    const handlechengemail = (event) =>{setuser({...user,email:event.target.value})}
    const handlechengfile = (event) =>{setuser({...user,file:event.target.value})}
    const handleClose = () => Context.Setopenmodel(false);
    let finduser = Context.employees.some((item) => item.email === user.email && item.id === user.id);
    if (user.email.length ===0 ||user.name.length ===0 ||user.phone.length ===0   ) {
      finduser = true;
    }

    return (
        <>
        <StyledModel
          open={Context.openmodel.open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <BoxModal bgcolor='background.default' color='text.primary'>
            <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Enter your information
            </Typography>
            
            <TextField onChange={handlechengname} required id="standard-basic" className="mb-2" fullWidth label="Name" variant="standard" />
            <TextField onChange={handlechengphone} required id="standard-basic" className="mb-2" fullWidth label="Phone" type="number" variant="standard" />
            <TextField onChange={handlechengemail} required id="standard-basic" className="mb-2" fullWidth label="Email" type="email" variant="standard" />
            <TextField
              onChange={handlechengfile}
              required
              id="standard-basic"
              className="mb-2"
              fullWidth
              helperText='enter your cv here'
              type="file"
              />
            <Button 
              disabled={finduser}
              onClick={() => Context.dispatch({
                  type :actions.ADD_NEW_EMPLOYEE,
                  employee:user
              })} 
              size="large" variant='contained'sx={{bgcolor:'primary.main',mr:'4px',width:'35%'}} endIcon={<SendIcon/>}>
              Send
            </Button>
          </BoxModal>
        </StyledModel>
      </>
    )
  }
  