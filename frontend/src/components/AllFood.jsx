import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion} from "motion/react"

const AllFood = ({ id, name, price, description, image }) => {

    const navigate = useNavigate();

   const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  

  return (
    <motion.div whileHover={{scale: 1.1}} className='w-full grid grid-cols-auto gap-4 gap-y-6'>
    <div className='relative cursor-pointer'>
        <img className='w-[100%] max-1050:w-[90px] border rounded-t-[15px] rounded-b-none ' src={image} alt=''/>
        {!cartItems[id]
        ?<img className='w-[35px] absolute bottom-[15px] right-[15px] max-1050:w-[15px] max-1050:left-[10px]  cursor-pointer border rounded-[50%]' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
        :<div className='absolute bottom-[15px] right-[15px] flex items-center max-1050:left-[9px] max-1050:right-[76%] max-1050:buttom-[5px] gap-[10px] padding-[6px] border rounded-full bg-white'>
          <img className='width-[30px] max-1050:w-[10px] ' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
          <p className='max-1050:text-[10px]'>{cartItems[id]}</p>
          <img className='width-[30px] max-1050:w-[10px] ' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
        </div>
        }
    </div>
    <div className='p-[20px] border rounded-b-xl mt-[-15px] max-1050:w-[90px] max-1050:mt-[-20px]'>
        <div className='flex justify-between items-center mb-[10px] max-1050:ml-[-10px] max-1050:mt-[-18px]'>
            <p onClick={()=>navigate(`feedback/${id}`)} className='text-[20px] font-semibold cursor-pointer box hover:underline max-1050:text-[13px]'>{name}</p>
            <img className='w-70 max-1050:hidden' src={assets.rating_starts} alt=''/>
        </div>
        <p className='text-[13px] max-1050:text-[7px] max-1050:ml-[-10px]'>{description}</p>
        <p className='text-[22px`] max-1050:ml-[-10px] max-1050:text-[14px]'>Rs: {price}</p>
    </div>
      
    </motion.div>
  )
}

export default AllFood
