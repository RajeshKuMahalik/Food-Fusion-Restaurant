import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center font-bold pt-8 border-b '>
        <h2>ABOUT US</h2>
      </div>
      
      <div className='my-10 flex flex-col justify-center md:flex-row gap-16'>
        <img className='w-full md:max-w-[300px] border ' src={assets.about} alt=''/>
        <div className='flex flex-col justify-center gap-6 px-2 md:w-2/4 sm:w-full text-gray-600'>
          <p>Welcome to Food Fusion, the ultimate solution for efficient restaurant management. Our platform is designed to help restaurant owners, managers, and staff streamline operations, improve customer service, and increase profitability.</p>
          <p>With features like order management, table reservations and inventory tracking our system ensures smooth day-to-day operations. Whether you're running a small café or a multi-chain restaurant,Food Fusion Restaurant simplifies your work, so you can focus on delivering exceptional dining experiences.</p>
          <p className=' text-gray-800'>Our Mission</p>
          <p>"Our mission is to empower restaurants of all sizes with a seamless, innovative, and efficient management system that enhances productivity, improves customer experience, and maximizes profitability. We strive to simplify restaurant operations by integrating advanced technology for order processing, inventory control, staff management, and customer engagement—allowing restaurant owners and teams to focus on delivering exceptional dining experiences."</p>
        </div>
      </div>

      <div className='text-xl py-4 ml-10'>
        <p className='font-bold'>WHY CHOOSE US</p>
      </div>
      <div className='flex flex-col md:flex-row mr-10 ml-10 text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b >Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassie-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionas is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div> 
      </div>
    </div>
  )
}

export default About




