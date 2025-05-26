import React, { useContext, useEffect,useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Restaurant = ({id}) => {

    const { restaurant_list,search,showSearch } = useContext(StoreContext);
    // const [filterProducts, setFilterProducts] = useState([]);

    const navigate = useNavigate();


    // const applyFilter = () =>{
    //     let restaurantCopy = restaurant_list.slice();

    //     if(showSearch && search) {
    //         restaurantCopy = restaurantCopy.filter(item => item.name.includes(search))
    //     }
    //     setFilterProducts(restaurantCopy)
    // }

    // useEffect(()=>{
    //     applyFilter();
    // },[search,showSearch])
    


    return (
        <>
        <div className='text-2xl text-center pt-10 pb-5 font-bold border-b'>
        Featured Hotels Recommended For You
        </div>
            <div className='w-full grid grid-cols-auto gap-7 gap-y-7'>
                {restaurant_list.map((item, index) => {
                    return (

                        <div className="max-w-md mx-auto bg-white  rounded-xl mt-10 shadow-md overflow-hidden md:max-w-2xl">
                            <img key={index} className="h-48 w-full object-cover" src={item.restaurant_image} alt="Restaurant" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-900">{item.restaurant_name}</h2>
                                <p className="text-gray-500 text-sm mt-1">📍 {item.restaurant_address}</p>
                                <p className="text-gray-500 text-sm"> {item.restaurant_time}</p>
                                <div className='flex item-center gap-2 text-sm text-center  text-green-500' >
                                    <p className='w-2 mt-1 h-2   bg-green-500 rounded-full'></p><p> Open </p>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="text-yellow-500 text-lg"> {item.restaurant_rating}</span>
                                    <span className="text-gray-500 text-sm ml-2">({item.restaurant_reviews})</span>
                                </div>
                                <button onClick={()=>navigate(`/table-reservation/${item.id}`)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                                    Reserve a Table
                                </button>
                            </div>

                        </div>
                    )
                })}
            </div>


        </>

    )
}

export default Restaurant
