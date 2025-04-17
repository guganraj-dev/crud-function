import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Main = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{ 
      axios.get('https://crud-function-4.onrender.com')
      .then((result)=>setUsers(result.data))
      .catch((err)=>console.log(err))
    },[])

    const handledelete =(id)=>{
      axios.delete("https://crud-function-4.onrender.com/deleteuser/"+id)
      .then((res)=>{console.log(res)
        window.location.reload()
      })
      .catch((err)=>{console.log(err)})
    }
  return (
    <div>
        
    <h2>User Table</h2>
   <Link to="/users"><button>ADD</button></Link> 
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>phone</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {users.map((usersdata)=>{
        return<tr >
              
            <td>{usersdata.name}</td>
            <td>{usersdata.email}</td>
            <td>{usersdata.password}</td>
            <td>{usersdata.phone}</td>
            <td>
            <Link to={`/update/${usersdata._id}`}><button>update</button></Link> 
            </td>
            <td>
              <button onClick={(e)=>handledelete(usersdata._id)}>Delete</button>
            </td>

          </tr>
       })}
          
        
      </tbody>
    </table>
    
  </div>
  )
}

export default Main