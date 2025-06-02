import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/shop';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/contact';
import Home from './components/Home';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import Cart from './components/cart';
import { CartProvider } from './components/cart';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </CartProvider>
  );
};

export default App;
