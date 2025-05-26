import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios';

const Order = () => {

    const randomNum = Math.floor(Math.random() * 10) + 30;
    const { token } = useContext(StoreContext);

    const [orderData, setOrderData] = useState([])

    const loadOrderData = async () => {
        try {
            if (!token) {
                return null
            }

            const response = await axios.post("https://food-fusion-restaurant-backend.onrender.com/api/order/userorder", {}, { headers: { token } })
            if (response.data.success) {
                let allOrdersItem = []
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                         item['status'] = order.status
                         item['payment'] = order.payment
                         item['paymentMethod'] = order.paymentMethod
                         item['date'] = order.date
                         allOrdersItem.push(item)
                    })
                })
                setOrderData(allOrdersItem.reverse())
                
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        loadOrderData()
    }, [token])

    return (
        <div className='border-t pt-16 ml-10'>
            <h2 className='text-2xl font-bold text-center'>MY ORDER</h2>
            <div>
                {
                    orderData.map((item, index) => (
                        <div key={index} className='py-4 border-b text-gray-800 flex flex-col md:flex-row md:item-center md:justify-between gap-4'>
                            <div className='flex items-start gap-6 text-sm'>
                                <img className='w-16 sm:w-20' src={item.image} alt='' />
                                <div>
                                    <p className='sm:text-base font-medium'>{item.name}</p>
                                    <div className='flex flex-col gap-1 mt-2 text-base text-gray-600'>
                                        <p className='text-lg'>Rs:{item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>{item.category}</p>
                                    </div>
                                    <p>Payment : <span>{item.paymentMethod}</span></p>
                                </div>
                            </div>
                            <div className='md:w-1/2 flex justify-between py-[35px]'>
                            <div className='flex items-center gap-2'>
                                <p className='min-w-2 h-2 rounded-full bg-green-400'></p>
                                <p className='text-sm md:text-base'>{item.status}</p>
                            </div>
                            <button onClick={loadOrderData} className='border px-4 py-1 text-sm font-medium rounded-sm'>Track Order</button>
                            </div>
                            
                               
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Order
