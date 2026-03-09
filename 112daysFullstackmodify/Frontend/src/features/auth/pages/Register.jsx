import React from 'react'
import FormGroup from '../component/FormGroup'
import "../style/register.scss" 
import {Link} from "react-router"

const Register = () => {
  return (
    <main className="register-page">
      <div className="form-container">
        <h1>Register</h1>
        <form>
          <FormGroup label="Name" placeholder="Enter your name" />
          <FormGroup label="Email" placeholder="Enter your email" />
          <FormGroup label="Password" placeholder="Enter your password" />
          <button className='button' type='submit'>Register</button>
        </form>
        <p>Already have an acoount. <Link to ="/login">Login</Link></p>
      </div>
    </main>
  );
}

export default Register
