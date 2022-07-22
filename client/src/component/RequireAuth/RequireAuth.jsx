import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { selectCurrentToken } from "../../features/auth/authSlice";

import React from 'react'
import { selectIsLoading } from "../../features/ui/uiSlice";
import { useEffect } from "react";

function RequireAuth() {
    const token = useSelector((state)=>selectCurrentToken(state))
    const loading = useSelector(selectIsLoading)
    const location = useLocation()
     
    useEffect(()=>{
    },[token])

    if(loading){  
      return <h1>cargando...</h1>
    }

  return (
    token? <Outlet/> : <Navigate to="/" state={{ from: location}} replace />
  )
}

export default RequireAuth

