import React from 'react'
import { useContext, createContext, useState, useEffect } from 'react'

const authContext = createContext({
    isAuthenticatedUser: false, 
    isAuthenticatedNutr: false,
    setIsAuthenticatedNutr: false,
    setIsAuthenticatedUser: false,
    getAccessToken: () => "", 
    getRole: () => "", 
});

export const AuthProvider = ({children}) => {

    const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
    const [isAuthenticatedNutr, setIsAuthenticatedNutr] = useState(false);

    function getAccessToken() {
      return localStorage.getItem("token");
    }

    function getRole(){
      return localStorage.getItem("role")
    }

      
    const storedToken = getAccessToken();
    const role = getRole();


      if(storedToken && role === "user") {
        setIsAuthenticatedUser(true);
        console.log(storedToken)
      }
      else if(storedToken && role === "nutritionist"){
        setIsAuthenticatedNutr(true);
        console.log(role)
      }
    
    

  return <authContext.Provider value={{isAuthenticatedUser, isAuthenticatedNutr, setIsAuthenticatedNutr, setIsAuthenticatedUser, getAccessToken, getRole}}>{children}</authContext.Provider>
}

export const useAuth = () => useContext(authContext);