import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import FeedBack from './pages/FeedBack'
import Footer from './components/Footer'
import Restaurant from './pages/Restaurant'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import Order from './pages/Order'
import ReservationFrom from './components/ReservationFrom'
import { ToastContainer } from 'react-toastify';
import ThankYou from './pages/ThankYou'
import SearchBar from './components/SearchBar'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'




const App = () => {

  return (
    <div>
    < ToastContainer />
    <Navbar/>
    <SearchBar />
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/restaurant' element={<Restaurant/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/feedback/:foodId' element={<FeedBack/>}/>
     <Route path='/thankyou' element={<ThankYou/>} />
     <Route path='/cart' element={<Cart/>}/>
     <Route path = '/table-reservation/:restaurantId' element={<ReservationFrom/>} />
     <Route path='/login' element={<Login/>}/>
     <Route path='/my-profile' element={<MyProfile/>} />
     <Route path='/place-order' element={<PlaceOrder/>}/>
     <Route path='/orders' element={<Order/>} />
     <Route path='/forgot-password' element={<ForgotPassword/>}/>
     <Route path='/reset-password/:id/:token' element={<ResetPassword/>} />
      </Routes>
    <Footer />
    </div>
  )
}

export default App

