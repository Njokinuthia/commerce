import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const Catalog = () => {
  const [items, setItems] = useState()

  useEffect(() => {
    fetch("/items")
      .then(resp => resp.json())
      .then(itemsData => {
        console.log(itemsData)
        setItems(itemsData)
      })
  }, [])  

 
  let itemCard = items?.map(item =>
    <Card
      key={item.id}
      image={item.image_url}
      price={item.price}  //     
      description={item.description}
    contact={item.user.email}
    // seller={item.user.username}
    />
  )

  return (
    <div className='min-h-screen bg-grey '>
      <Navbar />
      <h3 className=''>Category: Beds</h3>
      <div className=''>
        <div className='mt-12 w-5/6 h-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {itemCard}
        </div>
      </div>
    </div>
  )
   
}

export default Catalog
