import React from 'react';
import { Footer, Hero, Reviews, Gallery, Products } from './';

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home