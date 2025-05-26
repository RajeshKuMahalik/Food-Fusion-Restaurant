import React from 'react'


const Navbar = ({setToken}) => {

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <p className='w-[max(12%,80px)] text-yellow-500'>Food Fusion Restaurant <span className='text-sm text-black'>Admin panel</span> </p>

      <button onClick={()=>setToken('')} className='bg-yellow-500 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm-text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
