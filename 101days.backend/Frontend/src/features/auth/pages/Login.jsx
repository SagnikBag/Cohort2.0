import React from 'react'
import "../style/form.scss"
const Login = () => {
  const handleSubmit = (e)=>{
    e.preventDefaulr()
  }


  return (
    <main>
      <div className="form-contaniner">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" name='username' id='username' placeholder='Enter username' />
        <input type="text" name='password' id='password' placeholder='Enter password' />
        <button>Login</button>
        </form>
      </div>
    </main>
  );
}

export default Login