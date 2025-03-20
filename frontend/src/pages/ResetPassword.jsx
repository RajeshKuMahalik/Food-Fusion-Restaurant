import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const ResetPassword = () => {
    const {url,setToken,} = useContext(StoreContext)

    const {id,token} = useParams()

    const navigate = useNavigate()
   const [password,setPassword] = useState('')
  
   const onSubmitHandler = async (event) => {
    event.preventDefault()
  
    try {
        const { data } = await axios.post(url +`/api/reset_password/${id}/${token}`, { password })
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
          <p className='text-2xl font-semibold'>Reset Password</p>
          <p>Please Enter Your Email</p>
          <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='password' name='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={password} />
          </div>  
          <button type='submit' className='bg-black/60 text-white w-full py-2 rounded-md text-base'>Update</button>
         
        </div>
      </form>
  )
}

export default ResetPassword
