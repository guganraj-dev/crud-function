import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Update = () => {
  const {id}=useParams()
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [phone,setphone]=useState()
  const Navigate = useNavigate()  

   useEffect(()=>{
        axios.get('https://crud-function-4.onrender.com'+id)
        .then((result)=>{
          console.log(result)
          setName(result.data.name)
          setEmail(result.data.email)
          setPassword(result.data.password)
          setphone(result.data.phone)
        })
        .catch((err)=>console.log(err))
      },[id])

      const update =(e)=>{
        e.preventDefault()
        axios.put('https://crud-function-4.onrender.com'+id,{name,email,password,phone})
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
        
    <h2>Update Form</h2>
    <form onSubmit={update} >
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
      </div>
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
      </div>

      <div>
        <label>phone</label>
        <input
          type="number"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e)=> setphone(e.target.value)}
        />
      </div>

      <button type="submit">Update</button>
    </form>
  </div>
  )
}

export default Update
