import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const Users = () => {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [phone,setphone]=useState()
  const Navigate = useNavigate()

  const submit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5050/createUser',{name,email,password,phone})
    .then((res)=>{
      console.log(res)
      Navigate('/')
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
        
    <h2>User Form</h2>
    <form onSubmit={submit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e)=> setName(e.target.value)}
        />
      </div>
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e)=> setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e)=> setPassword(e.target.value)}
        />
      </div>

      <div>
        <label>phone:</label>
        <input
          type="number"
          placeholder="Enter your phone"
          onChange={(e)=> setphone(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Users