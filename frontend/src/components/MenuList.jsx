import React from 'react'
import { menu_list } from '../assets/assets'
import {motion} from 'motion/react'

const MenuList = ({category,setCategory}) => {

  const containerVariants = {
    hidden: {opacity: 1},
      visible: {
        opacity: 1,
        transition: { delay: 0.5, staggerChildren: 0.5 },
    }
  }

  return (
    <div id='menu_name' className='flex flex-col items-center gap-4 py-16'>
      <h1 className='text-3xl font-bold'>Explore <span className='text-orange-600'>Menu</span></h1>
      <p className='sm:w-2/3 text-center text-md'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <motion.div variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{amount:0.8}} className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {menu_list.map((item, index) => {
          return ( 
            <motion.div  whileHover={{scale:1.1}} onClick={()=>setCategory(prev=>prev === item.menu_name ? "All" : item.menu_name)} key={index} className='flex flex-col items-center text-xs border rounded-lg cursor-pointer flex-shrink-0' >
              <img className={`w-16 sm:w-24 mb-2' ${category === item.menu_name ? "active" : "" }`} src={item.menu_image} alt='' />
              <p>{item.menu_name}</p>
            </motion.div>
           
          )

        })}
      </motion.div>
      
    </div>
  )
}

export default MenuList
