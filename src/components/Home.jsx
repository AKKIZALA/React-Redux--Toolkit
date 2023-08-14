import React, { useEffect, useState } from 'react'
import "./Home.css"
import { useDispatch } from 'react-redux'
import { make } from './store/slice/CartSlice'


const Home = () => {

  const [product , setproduct] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(data=> data.json())
    .then(response => setproduct(response))
  },[])


    const addHandler = (element) => {
      dispatch(make(element))
    }

  const card = product.map((element) => (
    <div key={element.id} className="components">
    <div className="img">
      <img src={element.image} alt="" />
    </div>
    <div className="details">
    <p className='title'>{element.title}</p>
    <p className='praiz'>INR.{element.price}</p>
    </div>
    <div className="btn-box">
      <button className="btn" onClick={() => addHandler(element)}>Add to Cart</button>
    </div>
  </div>
  ))


  return (
    <div>
      <div className="main">
         {card}
    </div>
    </div>
  )
}

export default Home