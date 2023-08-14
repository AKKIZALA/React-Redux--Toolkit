import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { move } from './store/slice/CartSlice'

const Cart = () => {

const cartitem = useSelector((state) => state.cart)

const dispatch = useDispatch()

const delHandler =(id) => {
  dispatch(move(id))
}

const goods = cartitem.map((ele) => (
  <div key={ele.id} className="components">
  <div className="img">
    <img src={ele.image} alt="" />
  </div>
  <div className="details">
  <p className='title'>{ele.title}</p>
  <p className='praiz'>INR.{ele.price}</p>
  </div>
  <div className="btn-box">
    <button className="btn" style={{backgroundColor:"red"}} onClick={() => delHandler(ele.id)}>Delete Item</button>
  </div>
</div>
))


  return (
    <div className='main'>
      {goods}
    </div>
  )
}

export default Cart