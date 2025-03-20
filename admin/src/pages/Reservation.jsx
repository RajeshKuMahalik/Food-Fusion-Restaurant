import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backendUrl } from '../App'

const Reservation = ({ token }) => {

    const [reservation, setReservations] = useState([])


    const AllReservation = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/reservations')
            if (response.data.success) {
                setReservations(response.data.reservations)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    const removeReservation = async (id) => {
        try {
            const response = await axios.post('http://localhost:4000/api/reservation', {id}, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                await AllReservation()
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    useEffect(() => {
        AllReservation();
    }, [])


    return (
        <div className='w-[70%] ml-[max(5vw,25px)] mt-[80px] text-[16px]'>
            <p className='text-2xl pb-6 font-medium text-orange-600'>All <span className='text-black'>Reservation</span></p>
            <div className='grid grid-cols-2 gap-6 max-md:flex flex-col'>
                {
                    reservation.map((item, index) => (
                        <div key={index} className='items-center gap-10 px-[12px] py-[11px] border text-4'>
                            <p className=' font-semibold'>Name: <span className='font-normal'>{item.name}</span></p>
                            <p className=' font-semibold'>Phone:<span className='font-normal'> {item.phone}</span></p>
                            <p className=' font-semibold'>Date: <span className='font-normal'>{item.date}</span></p>
                            <p className=' font-semibold'>Time: <span className='font-normal'>{item.time}</span></p>
                            <p className=' font-semibold'>Guests:<span className='font-normal'>{item.guests}</span> </p>
                            <p className=' font-semibold'>Table: <span className='font-normal'>{item.tableNumber}</span> </p>
                            <div>
                                <button onClick={() => removeReservation(item._id)} className='bg-red-600 text-white rounded-md px-10'>Cancle</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Reservation
