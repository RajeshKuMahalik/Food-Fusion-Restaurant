import React from 'react'
import {NavLink} from 'react-router-dom'
import { assets } from '../assets/assets'
import { Plus, List, ShoppingCart, MessageSquare, CalendarCheck } from "lucide-react";

const Sidebar = () => {
  return (
    <div className='w-[15%] min-h-screen '>
       <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink to='/add' className={({isActive})=> `flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-lg ${isActive ? 'bg-[#F2F3FF]  border-orange-500':'' }`} >
           {/* <img className='w-5 h-5' src={assets.add_icon} alt=''/> */}
           <Plus className="w-5 h-5 text-gray-600" />
           <p className='hidden md:block'>Add items</p>
        </NavLink>
        <NavLink to='/list' className={({isActive})=> `flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-lg ${isActive ? 'bg-[#F2F3FF]  border-orange-500':'' }`}>
            {/* <img className='w-5 h-5' src={assets.order_icon} alt=''/> */}
            <List className="w-5 h-5 text-gray-600" />
            <p className='hidden md:block'>List</p>
        </NavLink>
        <NavLink to='/orders' className={({isActive})=> `flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-lg ${isActive ? 'bg-[#F2F3FF]  border-orange-500':'' }`}>
           {/* <img className='w-5 h-5' src={assets.order_icon} alt=''/> */}
           <ShoppingCart className="w-5 h-5 text-gray-600" />
           <p className='hidden md:block'>Orders</p>
        </NavLink>
        <NavLink to='/feedback' className={({isActive})=> `flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-lg ${isActive ? 'bg-[#F2F3FF]  border-orange-500':'' }`}>
        <MessageSquare className="w-5 h-5 text-gray-600" />
         <p className='hidden md:block'>Feedback</p>
        </NavLink>
        <NavLink to='/reservation' className={({isActive})=> `flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-lg ${isActive ? 'bg-[#F2F3FF]  border-orange-500':'' }`}>
        <CalendarCheck className="w-5 h-5 text-gray-600"/>
           <p className='hidden md:block'>Reservation</p>
        </NavLink>
       </div>
    </div>
  )
}

export default Sidebar
