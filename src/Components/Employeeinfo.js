import React, { useContext } from "react";
import { Box, Modal, Typography, styled } from "@mui/material";
import { GlobalContext } from "../Context/Context";


const StyledModel = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const BoxModal = styled(Box)({
    width: "500px",
    height: "300px",
    borderRadius: "20px",
    padding: "30px",
    color:'text.primary'
  });
  

  export const Employeeinfo = () => {
    const Context =useContext(GlobalContext);
    const handleClose = () => Context.Settwomodel({employee:{},open:false});

    return (
        <>
        <StyledModel
          open={Context.twomodel.open}
          onClose={handleClose}
        >
          <BoxModal bgcolor='background.default' color='text.primary'>
            <Typography mb={2} variant="h5" color={"gray"} textAlign={"center"}>
            This person's information
            </Typography>
            <Typography variant="h5" sx={{bgcolor:'wheat',height:'35px',borderRadius:'35px',pl:2}}  >
              <span className="fw-bold" >Number</span>: {Context.twomodel.employee.id}
            </Typography>
            <Typography variant="h5" sx={{mt:1,bgcolor:'wheat',height:'35px',borderRadius:'35px',pl:2}} >
            <span className="fw-bold" >Name</span>: {Context.twomodel.employee.name}
            </Typography>
            <Typography variant="h5" sx={{mt:1,bgcolor:'wheat',height:'50px',borderRadius:'35px',pl:2,overflow:'scroll'}} >
            <span className="fw-bold" >Email</span>: {Context.twomodel.employee.email}
            </Typography>
            <Typography variant="h5" sx={{mt:1,bgcolor:'wheat',height:'35px',borderRadius:'35px',pl:2}} >
            <span className="fw-bold" >Mobile</span>: {Context.twomodel.employee.phone}
            </Typography>
          </BoxModal>
        </StyledModel>
      </>
    )
  }
  