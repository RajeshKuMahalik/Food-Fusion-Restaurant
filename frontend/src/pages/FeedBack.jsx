import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'


const FeedBack = ({onSubmit}) => {

  const { foodId } = useParams()
  const [filterFood, setFilterFood] = useState([])
  const { food_list } = useContext(StoreContext)
 const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [message, setMessage] = useState("")
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
     try {
      const res = await axios.post("https://food-fusion-restaurant-backend.onrender.com/api/feedback", formData)
      setMessage(res.data.message);
      setFormData({name: "", email:"", message:""})
     } catch (error) {
      setMessage("Error submitting feedback")
     }
    };

  const applyFilter = () => {
    if (foodId) {
      setFilterFood(food_list.filter(food => food.id === foodId))
    } else {
      setFilterFood(food_list)
    }
  }

  useEffect(() => {
    applyFilter();
  }, [food_list, foodId])

 

  return (
    <>

      <div >
        {
          filterFood.map((item, index) => (
            <div className='flex flex-col sm:flex-row gap-4 mt-5 ml-[6%] mr-[20%]' key={index}>
              <div>
                <img className='w-full sm:max-w-72 rounded-lg' src={item.image} />
              </div>
              <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 mx-2 sm:mx-0 mt-[-80px] sm:mt-0 max-1050:mt-[10px] max-1050:w-full'>
                <p className='flex items-center gap-2 text-2xl font-medium '>{item.name}</p>
                <div>
                  <p>Rs: {item.price}</p>
                  <p>{item.description}</p>
                  <p>Category : {item.category}</p>
                </div>
              </div>
            </div>
          ))
        }      
      </div>
    <div className="max-w-md mx-auto mt-10 border  bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Feedback Form</h2>
      {message && <p className='text-green-600'>{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-2 border rounded" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-2 border rounded" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Feedback" className="w-full p-2 border rounded" required></textarea>
        <button type='submit'onClick={()=>navigate('/thankyou')}  className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Submit</button>
      </form>
    </div>
    </>
   

  )
}


export default FeedBack

