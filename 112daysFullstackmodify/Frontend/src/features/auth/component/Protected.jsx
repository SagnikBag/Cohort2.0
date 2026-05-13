import React from 'react'
import {useAuth} from '../hooks/useAuth'
import { Navigate, useNavigate } from 'react-router'

const Protected = ({children}) => {

 const navigate = useNavigate()
const {user,loading} = useAuth()


if(loading){
 return <h1>Loading...</h1>
}
if (!loading && !user) {
  return <Navigate to="/register"/>
}

  return children
}

export default Protected