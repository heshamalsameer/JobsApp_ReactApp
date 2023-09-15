import { MenuItem, Stack, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { addjobcity } from '../Context/initial'
import { GlobalContext } from '../Context/Context';
import {Action_Types as actions} from '../Context/ActionsTypes';

export const Filter = () => {
    const Context =useContext(GlobalContext);
    const [Filtertimes,setfiltertimes] =useState('');
    const [Filtercities,setfiltercity] =useState('');
    const handlechangefiltertime = (event) => {
        setfiltertimes(event.target.value);
    }
    const handlechangefiltercity = (event) => {
        setfiltercity(event.target.value);
    }
useEffect(() => {
    Context.dispatch({
        type :actions.FILTER_JOBS_BYTIME,
        filterby: Filtertimes
    })
    Context.dispatch({
        type :actions.FILTER_JOBS_BYCITY,
        filterby: Filtercities
    })
},[Filtertimes, Filtercities, Context])


    return (
        <Stack className='container mt-3 d-flex justify-content-center' spacing={4} direction={'row'}>
        <TextField
        sx={{mt:2,width:'200px',bgcolor:'#f3e1c9'}}
        variant="standard"
        label='Filter jobs Bytime'
        select
        value={Filtertimes}
        onChange={handlechangefiltertime}
        fullWidth
        >
            <MenuItem value='part time'>part time</MenuItem>
            <MenuItem value='full time'>full time</MenuItem>
        </TextField>
        <TextField
        sx={{mt:2,width:'200px',bgcolor:'#f3e1c9'}}
        variant="standard"
        label='Filter jobs Bycity'
        select
        value={Filtercities}
        onChange={handlechangefiltercity}
        fullWidth
        >
            {
                addjobcity.map((city) => (
                    <MenuItem value={city}>{city}</MenuItem>
        ))
        }
        </TextField>
        </Stack>
    )
}
