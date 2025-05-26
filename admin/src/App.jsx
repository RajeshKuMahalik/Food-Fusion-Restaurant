import React,{useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Feedback from './pages/Feedback'
import { ToastContainer } from 'react-toastify'
import Login from './components/Login'
import Reservation from './pages/Reservation'


export const backendUrl = import.meta.env.VITE_BACKEND_URL


const App = () => {

  

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token'): '');
  
  useEffect(()=>{
    localStorage.setItem('token',token)
 },[token])

  return  (
    <div>
    <ToastContainer/>
    {token === ""
        ? <Login setToken = {setToken} />
        :
      <>
      <Navbar setToken={setToken}/>
      <hr />
      <div className='flex'>
      <Sidebar/>
      <Routes>
      <Route path='/' element={<></>}/>   
        <Route path='/add' element={<Add token={token} />}/>
        <Route path='/list' element={<List token={token} />}/>
        <Route path='/orders' element={<Orders token={token}/>}/>
        <Route path='/feedback' element={<Feedback token={token}/>}/>
        <Route path='/reservation' element={<Reservation token={token}/> } />
      </Routes>
      </div>
      </>
    }
    </div>
  )
}

export default App

