import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { Button, Divider, Drawer, Stack } from '@mui/material';
import { GlobalContext } from '../Context/Context';
import {Action_Types as actions} from '../Context/ActionsTypes';

const Search = styled('div')(({ theme }) => ({
  borderRight:'solid 2px black',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '75%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const ButtonLogin = styled('button')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  color:'white',
  display:'none',
  marginLeft: '20px',
  height:'37px',
  width: '80px',
  [theme.breakpoints.up('sm')]: {
    display:'block'
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export const Header = () => {
  const [open,setopen] = React.useState (false);
  const [searchvalue,setsearch] = React.useState('');
  const Context = React.useContext(GlobalContext);
  const handlecgange = (e) => setsearch(e.target.value)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"  
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{display: { sm: 'none' } }}
            onClick={() => {setopen(true)}} 
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color='white'
            sx={{fontSize:"35px",display : {xs : 'none',sm : 'block'},flexGrow: 1}}
            >
          <Link to='/' style={{textDecoration:'none',color:'white'}}>
            Home
          </Link>
          </Typography>
            <Drawer variant='temporary' open={open} anchor='left' onClose={() => {setopen(false)}}>
                    <Box component={'nav'} p={3} >
                    <Divider/>
                    <Stack spacing={1} alignItems={'center'} onClick={() => {setopen(false)}}>
                        <Link activeClassName='active' to={'/'} > <Button  sx={{color : 'black','&:hover':{bgcolor:'goldenrod'},fontSize :'25px'}}>Home</Button></Link>
                        <Link to={'/signin'}> <Button  sx={{color : 'black','&:hover':{bgcolor:'goldenrod'},fontSize :'20px'}}>Sign in</Button></Link>
                        <Link to={'/signup'}> <Button sx={{color : 'black','&:hover':{bgcolor:'goldenrod'},fontSize :'20px'}}>Sign up</Button></Link>
                        <Button sx={{color : 'black','&:hover':{bgcolor:'goldenrod'},fontSize :'20px'}} onClick={() => Context.dispatch({type: actions.LOGOUT,}) }>Log Out</Button>
                        <Link to={'/addnewjob'}> <Button sx={{color : 'black','&:hover':{bgcolor:'goldenrod'},fontSize :'20px'}}>Add Job</Button></Link>
                        
                    </Stack>
                    </Box>
                </Drawer>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchvalue}
              onChange={handlecgange}
            />
          </Search>
          <ButtonLogin
            sx={{ml:0,height:'39px',border:'none',mr:'20px',display: {xs: 'none',sm: 'block'}}}
            onClick={() => Context.dispatch({
              type :actions.FILTER_JOBS_BYSEARCH,
              search: searchvalue
            })}
          >
            search
          </ButtonLogin>
          <ButtonLogin
            sx={{display: {xs: 'block',sm:'none'}}}
            onClick={() => Context.dispatch({
              type :actions.FILTER_JOBS_BYSEARCH,
              search: searchvalue
            })}
          >
            Search
          </ButtonLogin>
          <Stack direction={'row'} >
            <Link to='/signin' style={{textDecoration:'none'}}>
          <ButtonLogin  >
            Sign in
          </ButtonLogin>
            </Link>
          <Link to='/signup' style={{textDecoration:'none'}}>
          <ButtonLogin  >
            Sign up
          </ButtonLogin>
            </Link>
          <ButtonLogin onClick={() => {Context.setlogin(false)}} >
            Log Out
          </ButtonLogin>
            <Link to='/addnewjob' style={{textDecoration:'none'}}>
          <ButtonLogin  >
            Add Job
          </ButtonLogin>
            </Link>
            </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}