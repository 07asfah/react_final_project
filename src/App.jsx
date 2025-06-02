import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import CartComponent, { CartProvider } from './components/cart';
import Contact from './components/contact';
import Blog from './components/Blog';
import Shop from './components/shop';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<CartComponent/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;

