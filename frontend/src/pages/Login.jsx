import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

  const {url,token,setToken,} = useContext(StoreContext)

  const navigate = useNavigate()

 const [currState,setCurrState] = useState("Sign Up")

 const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

 const onSubmitHandler = async (event) => {
  event.preventDefault()

  try {

    if (currState === 'Sign Up') {

      const { data } = await axios.post(url + '/api/user/register', { name, password, email })
      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }
    } else {

      const { data } = await axios.post(url + '/api/user/login', { password, email })
      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }
    }

  } catch (error) {
    toast.error(error.message)
  }

}

 useEffect(()=>{
  if(token) {
    navigate('/')
  }
 },[token])



  return (
    <form  onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div  className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{currState === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please  {currState === 'Sign Up' ? "sign up" : "log in"} to Order food</p>
        {
          currState === "Sign Up" && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' name='name' onChange={(e)=>setName(e.target.value)} value={name} />
          </div>
        }

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='email' name='email' onChange={(e)=>setEmail(e.target.value)} value={email} />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='password' name='password' onChange={(e)=>setPassword(e.target.value)} value={password} />
        </div>
        <button type='submit' className='bg-black/60 text-white w-full py-2 rounded-md text-base'>{currState === 'Sign Up' ? "Create Account" : "Login"}</button>
        <Link to='/forgot-password'>Forgot Your Password</Link>
        {
          currState === "Sign Up" 
          ? <p>Already have a Account ? <span onClick={() => setCurrState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p> 
          : <p> Create an new Account ? <span onClick={() => setCurrState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login

