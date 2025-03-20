import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

const Navbar = () => {

    const navigate = useNavigate()

    const [visible, setVisible] = useState(false);

    // const [token, setToken] = useState(true);

    const { getCartCount, setShowSearch, userData,token,setToken,setCartItems } = useContext(StoreContext);

    const logout = () => {
        localStorage.removeItem('token') 
        setToken(false)
        setCartItems({})
        navigate('login')
    }



    return (
        <div className='flex items-center justify-between py-4  font-medium bg-black/60  text-white'>
            <Link to='/'> <p className=' w-36 cursor-pointer text-yellow-400 font-bold ml-10 max-1050:w-[85px] max-1050:ml-[6px] max-1050:text-[10px]'>FOOD FUSION.</p> </Link>
            <ul className='max-1050:flex max-1050:px-[-70%] sm:flex gap-5 max-1050:gap-3 max-1050:text-[10px]'>
            <NavLink to='/' className='flex flex-col items-center gap-1 '>
                    <li className='py-1  hover:text-yellow-400 cursor-pointer'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-black w-2/4 hidden' />
                </NavLink>

                <NavLink to='/restaurant' className='flex flex-col items-center gap-1'>
                    <li className='py-1  hover:text-yellow-400 cursor-pointer'>RESTAURANT</li>
                    <hr className='border-none outline-none h-0.5 bg-black w-2/4 hidden' />
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <li className='py-1  hover:text-yellow-400 cursor-pointer'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-black w-2/4 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <li className='py-1  hover:text-yellow-400 cursor-pointer'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-black w-2/4 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center mr-10 sm:ml-6 gap-2 max-1050:ml-5'>
                {/* <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt='' className='w-5 cursor-pointer' /> */}

                <Link to='/cart' className='relative'>
                    <img src={assets.basket_icon} alt='' className='w-5 min-w-5 cursor-pointer max-1050:min-w-[14px]' />
                    <p className='absolute right-[-5px] top-[-3px] w-3 text-center leading-4 bg-white text-orange-700 aspect-square rounded-full text-[8px] max-1050:top-[-4px] max-1050:h-[13px] max-1050:w-[10px] max-1050:left-[-5px]'>{getCartCount()}</p>
                </Link>
                <div className='group relative'>
                    <Link to='/login'><img className='w-5 cursor-pointer max-1050:min-w-[14px]' src={assets.profile_icon} alt=''/></Link>
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-400'>
                            <p onClick={()=>navigate('my-profile')} className='cursor-pointer hover:text-black '>My Profile</p>
                            <p onClick={()=>navigate('orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                {/* <img onClick={() => setVisible(true)} src={assets.menu} alt='' className='w-5 cursor-pointer sm:hidden' /> */}
            </div>
            {/* ----SideBar Menu for small screen ----- */}
            {/* <div className={`absolute top-0 right-0 buttom-0 left-0 overflow-hidden  bg-white transition-all ${visible ? ' w-full h-screen ' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <p>Back</p>
                    </div>
                    <NavLink className='py-2 pl-6 border' onClick={() => setVisible(false)} to='/'>HOME</NavLink>
                    <NavLink className='py-2 pl-6 border' onClick={() => setVisible(false)} to='/restaurant'>RESTAURANT</NavLink>
                    <NavLink className='py-2 pl-6 border' onClick={() => setVisible(false)} to='/about'>ABOUT</NavLink>
                    <NavLink className='py-2 pl-6 border' onClick={() => setVisible(false)} to='/contact'>CONTACT</NavLink>
                </div>
            </div> */}
        </div>
    )
}

export default Navbar
