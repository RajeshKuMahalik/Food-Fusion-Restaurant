import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, food_list, removeFromCart,getCartCountAmount,delivery } = useContext(StoreContext)
  
  const navigate = useNavigate();

  // const randomNum = Math.floor(Math.random()* 100) + 30;

  return (
    <div className='mt-[90px] mx-6'>
    <div>
      <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,10px)]'>
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr className='h-[1px] border border-red-500 '/>
      {food_list.map((item, index) =>{
        if(cartItems[item.id] > 0) {
          return (
            <div>
            <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,10px)] my-[10px]'>
            <img className='w-[40px]' src={item.image}/>
              <p>{item.name}</p>
              <p>Rs: {item.price}</p>
              <p>{cartItems[item.id]}</p>
              <p>Rs:{item.price * cartItems[item.id]}</p>
              <img className='w-[20px] cursor-pointer' onClick={()=>removeFromCart(item.id)} src={assets.bin_icon} alt=''/>
            </div>
            <hr className='h-[1px] border' />
            </div>
             
          )
        }
      })}
      </div>
      <div className='flex justify-center my-20 '>
        <div className='text-2xl w-[30vw] max-1050:w-[40vw]'>
          <h2>Cart Total</h2>
          <hr className='mx-[4px]'/>
          <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between '>
            <p>Subtotal =</p>
              <p className='lg:mr-80'>{getCartCountAmount()}</p>
            </div>           
            <div className='flex justify-between'>
              <p>Delivey Fee = </p>
              <p className='lg:mr-80'>Rs{getCartCountAmount() === 0 ? 0 : delivery}</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <b>Total</b>
                <b className='lg:mr-80'>{getCartCountAmount()=== 0 ? 0 : getCartCountAmount()+ delivery}</b>
            </div>
          </div>
          <div className='w-full text-center'>
          <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3' >PLACE ORDER</button>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Cart
