import React, { useState } from 'react'
import Header from '../components/Header'
import MenuList from '../components/MenuList'
import RelatedFood from '../components/RelatedFood'
import Banner from '../components/Banner'


const Home = () => {

  const [category,setCategory] = useState("All");
  
  
  return (
    <div>
      <Header />
      <MenuList category={category} setCategory={setCategory}/>
      <RelatedFood category={category}/>
      <Banner />
    </div>
  )
}

export default Home
