import React, {createContext,useEffect,useReducer, useState} from 'react'
import { reduser } from './reduser';
import { jobs } from './initial';

export const initialstate = {
    // jobs: localStorage.getItem('jobs') ? JSON.parse(localStorage.getItem('jobs')) : jobs,
    jobs: jobs,
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
    employees: localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [],
    openmodel:{},
    Setopenmodel:() => {},
    twomodel:{employee:'',open:false},
    Settwomodel:() => {},
    login:{login:false},
    setlogin:() => {},
    dispatch:() => {},
    loginby:  localStorage.getItem('loginby') ? localStorage.getItem('loginby') :'employee',
    setloginby:() => {},

  }
export const GlobalContext = createContext(initialstate);

export const Context = ({children}) => {
  const [state,dispatch] = useReducer(reduser,initialstate);
  const [open,setopen] = useState({open:false,id:''});
  const [twomodel,settwomodel] = useState({employee:'',open:false});
  const [login,setlogin] = useState({login:false});
  const [loginby,setloginby] = useState('');
  
  useEffect(() => {
    localStorage.setItem('jobs',JSON.stringify(state.jobs));
    localStorage.setItem('users',JSON.stringify(state.users));
    localStorage.setItem('employees',JSON.stringify(state.employees));
    localStorage.setItem('loginby',state.loginby);
  },[state])
  return (
    <GlobalContext.Provider value={{
      jobs:state.jobs,
      users:state.users,
      employees:state.employees,
      dispatch: dispatch,
      openmodel:open,
      Setopenmodel:setopen,
      twomodel:twomodel,
      Settwomodel:settwomodel,
      loginby:loginby,
      setloginby:setloginby,
      login:login,
      setlogin:setlogin,

    }}>
        {children}
    </GlobalContext.Provider>
  )
}
// export const usejobContext = () => {
//   return useContext(GlobalContext);
// }