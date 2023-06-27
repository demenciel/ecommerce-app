import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'

import { Footer, Hero, Reviews, Gallery, Products } from './containers';
import { Navbar } from './components';

function App() {

  return (
    <div className='background'>
      <Navbar />
      <Hero />
      <Products />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
