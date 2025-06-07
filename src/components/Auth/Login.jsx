import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const submitHandler=()=>{
      handleLogin(email,password)
        // e.preventDefault();
        // console.log("submited")
        
        setEmail('');
        setPassword('');

    }
  return (
    <div className='flex  h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>

            <form
            onSubmit={(e)=>{
                e.preventDefault();
                submitHandler();
            }}
             className='flex flex-col items-center justify-center'>
                <input  required className=' text-black outline-none
                 bg-transparent border-2 border-emerald-600 
                 text-xl py-3 px-5 rounded-full placeholder:text-white'
                 type='email' placeholder='enter your email here...'
                 onChange={(e)=>{setEmail(e.target.value) } } value={email}
                 />

                <input required  className=' text-black outline-none
                 bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 mt-3 rounded-full placeholder:text-white'
                type='password' placeholder='enter your password...'
                onChange={(e)=>{setPassword(e.target.value)}} value={password}/>

                <button  className=' text-white outline-none
                  bg-emerald-600 text-xl py-3 px-5 rounded-full mt-5 '
                 >Log In</button>
            </form>

        </div>
      
    </div>
  )
}

export default Login
