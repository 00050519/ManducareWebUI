import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const ProtectedRouteNutr = () => {

    const auth = useAuth();

  return auth.isAuthenticatedNutr ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRouteNutr