import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate();


  return (
    <div className='relative h-[35vw] max-1050:h-[60vw] text-white'> 
     <img src={assets.banner_pic} alt='' className='w-full h-full object-cover'/>
      <div className='absolute flex flex-col items-center gap-1.5vw  bottom-[45%] left-[29%] max-1050:max-w-[45%] max-1050:top-[10%] max-1050:left-[21%] max-750:max-w-[55%]'>
        <p className='font-bold text-[max(4.5vw,24px)] max-1050:text-[max(5vw,21px)]'>Delicious Food Menu</p>
        <p className='text-[15px] max-750:text-[6px] max-1050:text-center'>Satisfy your cravings with our delicious offerings at the Tasty Treats Sale.</p>
        <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='bg-black text-white px-4 py-2 rounded-full mt-10 max-1050:text-[9px] '>Order Now</button>
      </div>  
    </div>
  )
}

export default Banner
