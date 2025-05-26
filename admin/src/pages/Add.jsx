import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets';
import { backendUrl } from '../App';

const Add = ({token}) => {

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad",
    })

    const onchangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)
        const response = await axios.post(backendUrl + '/api/food/add' ,formData,{headers:{token}});
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad",
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className='w-[70%] ml-[max(5vw,25px)] mt-[80px] text-[16px]'>
            <form className='flex flex-col gap-[10px]' onSubmit={onSubmitHandler}>
                <div className='flex flex-col gap-[10px]'>
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' className='w-[120px]' />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
                </div>
                <div className='w-[max(40%,280px)] flex flex-col gap-[10px]'>
                    <p>Item Name</p>
                    <input className='p-[10px]' onChange={onchangeHandler} value={data.name} type='text' name='name' placeholder='Item Name' />
                </div>
                <div className='w-[max(40%,280px)] flex flex-col gap-[10px]'>
                    <p>Item Description</p>
                    <textarea className='p-[10px]' onChange={onchangeHandler} value={data.description} name='description' row='6' placeholder='Write about item' required />
                </div>
                <div className='flex gap-[30px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <p>Item Category</p>
                        <select className='w-[max(120px)] p-[10px]' onChange={onchangeHandler} name='category'>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div>
                        <p>Item Price</p>
                        <input className='w-[max(120px)] p-[10px]' onChange={onchangeHandler} value={data.price} type='number' name='price' placeholder='Enter Price'/>
                    </div>
                </div>
                <button className='w-[max(120px)] border-none p-[10px] bg-black text-white cursor-pointer' type='submit'>ADD</button>
            </form>
        </div>
    )
}

export default Add
