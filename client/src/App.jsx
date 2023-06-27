import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'

import { Navbar } from './components';
import { ShoppingCart } from './pages/shoppingcart';
import { Home, Products } from "./pages/home";

function App() {
  return (
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
  )
}


export default App
