import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const ReservationFrom = () => {

  const { restaurantId } = useParams()
  const { restaurant_list } = useContext(StoreContext)
  const [filterRestaurant, setFilterRestaurant] = useState([])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    tableNumber: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/reserve", formData);
      toast("Reservation successful!");
      setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "", tableNumber: "" });
    } catch (error) {
      toast("Error making reservation");
    }
  };


  const applyFilter = () => {
    if (restaurantId) {
      setFilterRestaurant(restaurant_list.filter(item => item.id === restaurantId))
    } else {
      setFilterRestaurant(restaurant_list)
    }
  }

  useEffect(() => {
    applyFilter();
  }, [restaurant_list, restaurantId])



  return (
    <div className='relative w-full '>

      {
        filterRestaurant.map((item, index) => (
          <div className='relative w-full  bg-cover bg-center' key={index}>
            <img className='w-full h-[70vw] sm:h-[89vh] max-750:h-[85vh]' src={item.restaurant_image} />
            <div className='absolute inset-0 bg-black bg-opacity-60'></div>
          </div>
        ))
      }
      <div className="absolute top-24  left-1/2 transform -translate-x-1/2 max-w-sm p-6 bg-white  rounded-lg shadow-lg sm:top:10 max-750:w-[60vh] max-750:top-[40px] ">
        <h2 className="text-xl font-semibold mb-4">Reserve a Table</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone" className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="date" name="date" className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="time" name="time" className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="number" name="guests" min="1" placeholder='Enter guest number' className="w-full p-2 border rounded" onChange={handleChange} required />
          <input type="number" name="tableNumber" min="1" placeholder='Enter table number' className="w-full p-2 border rounded" onChange={handleChange} required />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Reserve</button>
        </form>
      </div>
    </div>

  )
}

export default ReservationFrom
