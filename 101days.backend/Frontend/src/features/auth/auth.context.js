import (createContext,useState,useEffect) from 'react'
import {login,register,getMe} from "./services/auth.api"

export const AuthContext createContext()

export function AuthProvide({children}){
 const [user, setUser] = useState(null)
 const [loading, setLoading] = useState(false)

 const handleLogin = async(email,password)=>{
  setLoading(true)
  try{
   const response = await login(email,password)
   setUser(response.user)
  }
  catch(err){
   throw err
  }
  finally{
   setLoading(false)
  }
}

const handleRegister = async (username,password,email)=>{
 setLoading(true)
 try{
  const response = async (username,password,email)
  setUser(response.user)
 }
 catch(err){
  throw err
 }
 finally{
  setLoading(false)
 }
}
return <AuthContext.Provider value ={{user,loading,handleLogin,handleRegister}}>
 {children}
</AuthContext.Provider>
}