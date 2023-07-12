import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'

import { Navbar } from './components';
import { ShoppingCart } from './pages/shoppingcart';
import { Home, Products } from "./pages/home";
import { useEffect } from 'react';

export const addedToCartContext = React.createContext();

function App() {

  const [itemsInCart, setItemsInCart] = useState(null);
  
  function clearCart() {
    localStorage.clear();
    setItemsInCart(null);
  }

  return (
    <addedToCartContext.Provider value={{itemsInCart, setItemsInCart, clearCart}}>
      <BrowserRouter>
        <div className="className">
          <Navbar />
          <Routes>
            <Route path='/cart' element={<ShoppingCart />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </addedToCartContext.Provider>
  )
}


export default App
