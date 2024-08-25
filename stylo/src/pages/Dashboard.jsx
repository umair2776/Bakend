import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const token=localStorage.getItem("token")
  const decodedToken=jwtDecode(token);
  const [user,setUser]=useState(null)
  const navigate=useNavigate();

  const fetchuser=async()=>{
    const response=await axios.get(`http://localhost:8083/api/admin/user/${decodedToken.id}`)
    setUser(response.data.user);
  }
  useEffect(()=>{
    fetchuser();
  },[])
  const logout=()=>{
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <div>
     <h1> Welcome to the dashboard{user?.name} </h1>
     <button onClick={logout}>Logout</button>
      </div>
  )
}

export default Dashboard