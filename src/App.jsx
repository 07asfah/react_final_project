import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/shop';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import Cart from './components/cart';
import { CartProvider } from './components/cart';
import Contact from './components/contact';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
