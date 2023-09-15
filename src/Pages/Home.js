import React, { useContext } from 'react'
import {Layout} from '../Components/Layout';
import {Jobitem} from "../Components/Jobitem"
import { Box } from '@mui/material';
import { GlobalContext } from '../Context/Context';
import { GetJob } from '../Components/GetJob';
import { Employeeinfo } from '../Components/Employeeinfo';
import { Filter } from '../Components/Filter';

export const Home = () => {
  const ContextJobs =useContext(GlobalContext);
  return (
    <Layout>
      <GetJob/>
      <Employeeinfo/>
      <Filter/>
      <Box className='container' sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',mt:3}}>
        {
          ContextJobs.jobs.map(item => (
                <Jobitem  {...item}/>
          ))
        }
      </Box>
    </Layout>
  )
}
