import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Navbar from '../components/Navbar'



const Adpage = ({ user }) => {
  let navigate = useNavigate()

  // function handleDeleteToy(toyToDelete) {
  //   const updatedToys = toys.filter((toy) => toy.id !== toyToDelete.id);
  //   setToys(updatedToys);
  // }

  const [newAd, setNewAd] = useState({
    category: "",
    image_url: "",
    condition: "",
    price: "",
    description: "",
    user_id: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(event.target.value)
    setNewAd({
      ...newAd, [name]: value, user_id: user.id
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newAd)

    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAd),
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
       
      })
      .catch((error) => {
        console.log("your error:" + error)
      })

    setNewAd({
      category: "",
      image_url: "",
      condition: "",
      price: "",
      description: "",
      user_id: ""
    })
    // navigate("/account")
  }


  return (
    <div className='min-h-screen bg-grey'>
      <Navbar />
      <div className='w-6/12 mg-auto flex flex-col justify-center ' >
        <form className='mt-12' onSubmit={handleSubmit}>
          <h5 className='text-green my-4 text-center text-4xl font-bold'>Post An Ad</h5>
          <div className='d-flex flex-column justify-content-between'>
            <div className=''>
              <div>
                <input type="text" placeholder="Category" name="category" value={newAd.category} onChange={handleChange} required />
              </div>

              <div>
                <input type="text" placeholder="Item Condition" name="condition" value={newAd.condition} onChange={handleChange} required />
              </div>
              <div>
                <input type="number" placeholder="Price in Ksh" name="price" value={newAd.price} onChange={handleChange} required />
              </div>
            </div>
            {/* <div className=''>
              <input placeholder="Item Image" type="file" name="image_url" value={newAd.image_url} onChange={handleChange} alt="upload"></input>
            </div> */}
            <div className=''>
              <input placeholder="Add item url" type="text" name="image_url" value={newAd.image_url} onChange={handleChange} alt="upload"></input>
            </div>
          </div>
          <div>
            <input className="additionalAdDetails" type="text" placeholder="Item Description" name="description" value={newAd.description} onChange={handleChange} required />
          </div>
          <div className="mt-4 flex justify-center">
            <button type="submit" className="btn text-white">Submit</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Adpage
