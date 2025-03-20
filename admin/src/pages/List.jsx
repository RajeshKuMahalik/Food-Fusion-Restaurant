import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { assets } from '../assets/assets'

const List = ({token}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/food/list');
      if (response.data.success) {
        setList(response.data.foods)
      }
      else {
        toast.message(response.data.message)
      }    
    } catch (error){
      console.log(error);
      toast.error(error.message)
      
    }
    }
    

  const removeFood = async(foodId) =>{
    try {
      const response = await axios.post(backendUrl + '/api/food/remove',{id:foodId},{headers:{token}})
      if(response.data.success) {
       toast.success(response.data.message)
       await fetchList()
      }  
      else {
       toast.error("Error");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
    
  }

  useEffect(() => {
    fetchList();
  },[])

  return (
    <div className='w-[70%] ml-[max(5vw,25px)] mt-[80px] text-[16px]'>
      <p className='text-2xl pb-4 font-medium text-orange-600'>All <span className='text-black'>Menu</span></p>
      <div>
        <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] px-[12px] py-[15px] border text-4 max-1050:grid max-1050:text-[13px]'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>(
              
                <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] px-[12px] py-[15px] border text-4 max-1050:text-[13px]'>
                  <img src={'http://localhost:4000/images/' + item.image} alt='' className='w-16 max-1050:w-[30px]'/>
                  {/* <img src={item.image[0]}/> */}
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>{item.price}</p>
                  <img onClick={()=>removeFood(item._id)} className='h-4 cursor-pointer' src={assets.bin_icon} alt=''/>
                </div>         
        ))}
      </div>
    </div>
  )
}

export default List


