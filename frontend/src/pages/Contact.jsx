import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-b'>
          <h2>CONTACT US</h2>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px] border' src={assets.contact_img} alt=''/>
      <div className='flex flex-col justify-center items-start gap-6'>
      <p className='font-semibold text-gray-800 text-xl'>Our Restaurant</p>
      <p className='text-gray-500'>Address : 54709 Willsm Station</p>
      <p className='text-gray-500'>Email : foodfusion@gamil.com</p>
      <p className='text-gray-500'>Phone : +123-456-789</p>
      </div>
      </div>
    </div>
  )
}

export default Contact
