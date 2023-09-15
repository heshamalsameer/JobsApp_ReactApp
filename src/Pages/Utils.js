import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { GlobalContext } from '../Context/Context'

export const PrivateRoutes = () => {
    const Context = useContext(GlobalContext)
    
    return (
        Context.login ? <Outlet/> : <Navigate to={'/signup'} />
)
}
