import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  /*
   * More about useState hook
   */

  const [inputs, setInputs] = useState ({
    username:"",
    email:"",
    password:""
  })

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post("/auth/register", inputs)
      console.log(res)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="auth">
        <h1>Login</h1>
        <form>
            <input required type="text" placeholder='Username' name="username" onChange={handleChange}/>
            <input required type="email" placeholder='Email Address' name="email" onChange={handleChange}/>
            <input required type="password" placeholder='Password' name="password" onChange={handleChange}/>
            <button onClick={handleSubmit}>Login</button>
            <p>This is an error!</p>
            <span>Do you have an account? <Link to="/login">Login</Link></span>
        </form>
    </div>
  )
}

export default Register