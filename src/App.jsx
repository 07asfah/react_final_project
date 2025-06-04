import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import CartComponent, { CartProvider } from './components/cart';
import Contact from './components/contact';
import Blog from './components/Blog';
import Login from './components/Login';
import Register from './components/Register';
import Shop from './components/shop';
import CartPage from './components/CartPage';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/tagged/:tag" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart-page" element={<CartPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;





