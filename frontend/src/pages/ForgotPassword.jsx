import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ForgotPassword = () => {
    const {url,token,setToken,} = useContext(StoreContext)

    const navigate = useNavigate()
  
  
   const [email, setEmail] = useState('')
  
   const onSubmitHandler = async (event) => {
    event.preventDefault()
  
    try {
        const { data } = await axios.post(url + '/api/forgot-password', { email })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }   
  
    } catch (error) {
      toast.error(error.message)
    }
  
  }
  
   useEffect(()=>{
    if(token) {
      navigate('/login')
    }
   },[token])
  
  
  
    return (
      <form  onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div  className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>Forgot Password</p>
          <p>Please Enter Your Email</p>
          <div className='w-full'>
            <p>Email</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='email' name='email' onChange={(e)=>setEmail(e.target.value)} value={email} />
          </div>  
          <button type='submit' className='bg-black/60 text-white w-full py-2 rounded-md text-base'>Send</button>
         
        </div>
      </form>
  )
}

export default ForgotPassword
