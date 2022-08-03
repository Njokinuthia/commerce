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
    // contact={item.user.email}
    // seller={item.user.username}
    />
  )

  return (
    <div className='min-h-screen bg-grey '>
      <Navbar />
      <h3 className=''>Category: Beds</h3>
      <div className=''>
        <div className=' border flex flex-wrap'>
          {itemCard}
        </div>
      </div>
    </div>
  )
   
}

export default Catalog
