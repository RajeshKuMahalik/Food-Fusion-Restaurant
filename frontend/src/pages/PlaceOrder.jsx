import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"




const PlaceOrder = () => {

  const navigate = useNavigate();

  const { getCartCountAmount, token, food_list, cartItems, setCartItems, delivery } = useContext(StoreContext);
  const [method, setMethod] = useState('cod');
  // const randomNum = Math.floor(Math.random() * 100) + 30;
  const [data, setData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    country: "",
    phone: ""
  })

  const onChnageHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);

        try {

          const { data } = await axios.post("https://food-fusion-restaurant-backend.onrender.com/api/order/verifyRazorpay", response, { headers: { token } })
          if (data.success) {
            navigate('/orders')
            setCartItems({})
          }

        } catch (error) {
          console.log(error);
          toast.error(error)

        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      food_list.map((items) => {
        if (cartItems[items.id] > 0) {
          let itemInfo = items;
          itemInfo.quantity = cartItems[items.id];
          orderItems.push(itemInfo)
        }
      })
      console.log(orderItems)
      let orderData = {
        address: data,
        items: orderItems,
        amount: getCartCountAmount() + delivery,
      }

      switch (method) {

        //API Calls for COD
        case 'cod':
          const response = await axios.post('https://food-fusion-restaurant-backend.onrender.com/api/order/place', orderData, { headers: { token } })
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
          break;
        case 'razorpay':

          const responseRazorpay = await axios.post("https://food-fusion-restaurant-backend.onrender.com/api/order/razorpay", orderData, { headers: { token } })
          if (responseRazorpay.data.success) {
            initPay(responseRazorpay.data.order);

          }

          break;

        default:
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col px-5 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <h2>DELIVERY INFORMATION</h2>
        </div>
        {/* ----left side--- */}
        <div className='flex gap-3'>
          <input required name='name' onChange={onChnageHandler} value={data.name} className='border border-black/60 rounded py-1.5 px-3.5 w-full' type='name' placeholder='Enter Your Name' />
        </div>
        <input required name='email' onChange={onChnageHandler} value={data.email} className='border border-black/60 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email address' />
        <input required name='street' onChange={onChnageHandler} value={data.street} className='border border-black/60 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street' />
        <div className='flex gap-3'>
          <input required name='city' onChange={onChnageHandler} value={data.city} className='border border-black/60 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
          <input required name='state' onChange={onChnageHandler} value={data.state} className='border border-black/60 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input required name='country' onChange={onChnageHandler} value={data.country} className='border border-black/60 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChnageHandler} value={data.phone} className='border border-black/60 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone' />
      </div>

      {/*----right side-----  */}
      <div className='mt-8'>
        <div className='flex justify-center my-5'>
          <div className='text-2xl w-[40vw]'>
            <h2>Cart Total</h2>
            <hr className='mx-[5px]' />
            <div className='flex flex-col gap-2 mt-2 text-sm'>
              <div className='flex justify-between'>
                <p>Subtotal = </p>
                <p className='lg:mr-80'>Rs : {getCartCountAmount()}</p>
              </div>
              <div className='flex justify-between'>
                <p>Delivey Fee =</p>
                <p className='lg:mr-80'>Rs : {getCartCountAmount() === 0 ? 0 : delivery}</p>
              </div>
              <div className='flex justify-between'>
                <p>Total </p>
                <p className='lg:mr-80'>Rs : {getCartCountAmount() === 0 ? 0 : getCartCountAmount() + delivery}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <h2>PAYMENT METHOD</h2>
          -------Payment Mathod --------
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-orange-500' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt='' />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-orange-500' : ''}`}></p>
              <p className='text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>

          </div>
        </div>
        <button type='submit' className='bg-black text-white px-16 py-3 text-sm md:py-4'>PLACE ORDER</button>
      </div>
    </form>
  )
}

export default PlaceOrder


