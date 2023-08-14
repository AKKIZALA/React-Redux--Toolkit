import React from 'react'
import { BrowserRouter, Route ,Routes} from "react-router-dom"
import Home from "./components/Home"
import Default from "./components/Default"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import { Provider } from 'react-redux'
import store from './components/store/Store'

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='' element={<Default/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App