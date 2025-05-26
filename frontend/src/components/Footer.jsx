import React from 'react'

const Footer = () => {
  return (
    <div className=' md:mx-10 '>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40  text-sm'>

        {/* left section */}
        <div>
          <p className='mb-5 w-40 font-bold text-xl'>Food Fusion</p>
          <p className='w-full md:w-2/3 leading-6'>Welcome to Food Fusion, where great flavors meet warm hospitality. Enjoy our delicious meals, crafted with fresh ingredients and a touch of love. Dine in, take out, or reserve your table online for a seamless experience. Taste the difference today!</p>
        </div>
        {/* center section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2'>
          <li>Home</li>
          <li>Foods</li>
          <li>Conatct Us</li>
          </ul>
         
        </div>
        {/* right section */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <p className='flex flex-col gap-2'>1020-2345-6789</p>
          <p className='flex flex-col gap-2'>foodfusion@gmail.com</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
