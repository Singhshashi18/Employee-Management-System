import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import AdmDashboard from './components/Dashboard/AdmDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
const [user,setUser]=useState(null)
const Authdata = useContext(AuthContext)

const handlelogin=(email,password)=>{

  if(email == 'admin@me.com' && password== '123'){
    setUser('admin')
  }else if(Authdata && Authdata.employees.find((e)=>
    email == e.email && e.password==password)){
    setUser('employee')
  }else{
    alert("invalid credentials")
  }

}



  useEffect(()=>{
    setLocalStorage()
    getLocalStorage()
      
  },)

  

  return (
    
    <>
    {!user ? <Login handleLogin={handlelogin}/>: ''}
    {user == 'admin' ? <AdmDashboard/> : <EmpDashboard/>}
    {/* <Login/> */} 
    {/* <EmpDashboard/> */}
    
    {/* <AdmDashboard/> */}
  
    </>
  )
}


export default App
