import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Home} from './Pages/Home';
import {Signin} from './Pages/Signin';
import {Signup} from './Pages/Signup';
import {Pagenotfound} from './Pages/Pagenotfound';
import  {Context}  from './Context/Context';
import './App.css';
import { Addnewjob } from './Components/Addnewjob';
import {PrivateRoutes} from './Pages/Utils'


function App() {
  const theme = createTheme({
    palette : {
      primary :{
        main:'#37812d',
        light:'#48ee48',
        dark:'#0eb129'
      }
    }
  })
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <Context>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/addnewjob' element={<Addnewjob/>}/>
          </Route>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/*' element={<Pagenotfound/>}/>
        </Routes>
        </Context>
      </Router>
    </ThemeProvider>
      </>
  );
}

export default App;
