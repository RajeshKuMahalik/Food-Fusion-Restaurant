import React,{useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { motion } from "motion/react" 

const Feedback = () => {

  const [feedback,setFeedback] = useState([])


  const AllFeedback = async () =>{
    try{
      const response = await axios.get('http://localhost:4000/api/feedbacks/all')
      if(response.data.success){
        setFeedback(response.data.feedbacks)
      } else {
        toast.error(response.data.message)
      }
    } catch(error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    AllFeedback();
},[])

  return (  
    <div className='w-[70%] ml-[max(5vw,25px)] mt-[80px] text-[16px]'>
    <p className='text-2xl pb-6 font-medium text-orange-600'>All <span className='text-black'>FeedBack</span> </p>
    <div className='grid grid-cols-2 gap-6 max-md:flex flex-col'>
    {
      feedback.map((item,index)=>(
        <motion.div initial={{ y: 100, opacity:0 }} animate={{ y:0, opacity:1}} transition={{duration:1}} key={index} className='items-center gap-10 px-[12px] py-[11px] border text-4'> 
        <p className=' font-semibold'>Name: <span className='font-normal'>{item.name}</span></p>
        <p className=' font-semibold'>Email: <span className='font-normal'>{item.email}</span></p>
        <p className=' font-semibold'>Message: <span className='font-normal'>{item.message}</span></p>
        </motion.div>
      ))
    }  
  
      </div>
    </div>
  )
}

export default Feedback
