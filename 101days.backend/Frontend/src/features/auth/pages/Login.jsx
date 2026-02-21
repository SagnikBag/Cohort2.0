import React,{useState} from 'react'
import '../style/form.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth' 

const Login = () => {

  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const {handleLogin} = useAuth()



function handleSubmit(e){
  e.preventDefault()

  axios.post("http://localhost:3000/api/auth/login",{
    username,password
  },{
    withCredentials: true
  }).then(res=>{
    console.log(res.data);
    
  })
}

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input onInput={(e)=>{setUsername(e.target.value)}}
          type="text" name="username" placeholder="Enter username" />
          <input onInput={(e)=>{setPassword(e.target.value)}}
           type="text" name="password" placeholder="Enter password" />

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="toggleAuthForm" to="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login