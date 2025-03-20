import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import AllFood from './AllFood';


const RelatedFood = ({ category }) => {

  const {food_list} = useContext(StoreContext);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-black md:mx-10'>
      <h1 className='text-3xl font-bold'>Top <span className='text-orange-600'> Dishes For You </span></h1>
      <p className='sm:w-2/3 text-center text-sm'>For your Desier We Make This Type Of Delicious Food</p>
      <div className='grid grid-cols-2 max-1050:grid-cols-3 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {food_list.map((item, index) => {
          if(category === "All" || category === item.category){
           return <AllFood key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
           } 
        })}
     </div>
    </div>
  )
}

export default RelatedFood
