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
      console.log("token requiere auth")
      console.log(token)
    },[token])

    if(loading){
      console.log("cargando")
      return <h1>cargando...</h1>
    }

  return (
    token? <Outlet/> : <Navigate to="/login" state={{ from: location}} replace />
  )
}

export default RequireAuth

