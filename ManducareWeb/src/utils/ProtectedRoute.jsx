import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const ProtectedRoute = () => {

    const auth = useAuth();

    console.log(auth.isAuthenticatedUser);
  return auth.isAuthenticatedUser ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoute