import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Header = () => {

  return (
    <>
    <div className=" h-[45vw] max-1050:h-[65vw] z-[-1px] text-white">
      <img src={assets.header_img} alt="" className=" w-full h-full object-cover" />
      <div className="flex flex-col items-start gap-1.5vw max-w-[50%] ml-[26px] mt-[-26%] max-1050:ml-[9px] max-750:max-w-[70%] max-1050:mt-[-46%]">
       <motion.h2 initial={{x:-40, opacity:0}} animate={{x:10, opacity:1}}  transition={{delay:0.6, duration:1}} className='font-bold text-[max(4.5vw,22px)] max-1050:text-[max(10px,27px)] '>Order Your Favourite Food </motion.h2>
        <motion.p initial={{x:-40, opacity:0}} animate={{x:10, opacity:1}}  transition={{delay:0.6, duration:1}} className='text-[14px] max-1050:text-[8px]'>Choose from a diverse menu featuring a delectable array of dishes carfed with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</motion.p>
        <motion.a initial={{x:-40, opacity:0}} animate={{x:10, opacity:1}}  transition={{delay:0.6, duration:1}} href='#menu_name' className='' ><button className='border-none text-white font-[500] p-[1vw] px-[2.3vw] bg-orange-600 text-[max(1vw,10px)] rounded-[50px] max-750:px-[2vw] py-[1vw]'>Click Here</button> </motion.a>
      </div>
    </div> 
    </>
  )
}



export default Header
