import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { restaurant_list } from "../assets/assets";
import axios from 'axios'


export const StoreContext = createContext();


const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000"
  const [token,setToken] = useState("")
  const [userData, setUserData] = useState(false)
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false)

  const delivery  = 30;


  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    }
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

    }
    if(token) {
      await axios.post(url+"/api/cart/add",{itemId}, {headers:{token}})
    }
  }

    const removeFromCart = async (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      if (token) {
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
      }
    }

   const getCartCount = () =>{
    let totalAmount = 0;
    for(const item in cartItems){

      if(cartItems[item] > 0){
        totalAmount +=  cartItems[item];
      }
    }
    return totalAmount
   }

   const getCartCountAmount = () =>{
    let totalAmount = 0;
    for (const item in cartItems) {

      if(cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product.id === item)
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
   }
 
   const loadCartData = async (token) => {
    const response = await axios.get(url+"/api/cart/get",{headers:{token}})
    setCartItems(response.data.cartData);
   }


   useEffect(()=>{
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
   })

    const value = {
      food_list,
      restaurant_list,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
      getCartCount,
      getCartCountAmount,
      url,token,setToken,
      userData,setUserData,
      search, setSearch,showSearch, 
      setShowSearch, loadCartData,
      delivery
      
    }

    return (
      <StoreContext.Provider value={value}>
        {props.children}
      </StoreContext.Provider>
    )
  }

export default StoreContextProvider


//7:39:27