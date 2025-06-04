import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaBeer, FaFacebookF, FaGooglePlus, FaGooglePlusG, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import { FaSquarePinterest } from 'react-icons/fa6';
import logo from '../assets/images/categories/logo.png'
import { useCart } from '../components/cart';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getTotalItems, setIsCartOpen } = useCart();

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
                <div className="container mx-auto px-4 py-2 hidden md:block bg-white">
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                            <a href="" className="text-gray-500 hover:text-primary">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a href="" className="text-gray-500 hover:text-primary">
                                <FaTwitter className="w-4 h-4" />
                            </a>
                            <a href="" className="text-gray-500 hover:text-primary">
                                <FaPinterestSquare className="w-4 h-4" />
                            </a>
                            <a href="" className="text-gray-500 hover:text-primary">
                                <FaGooglePlusG className="w-4 h-4" />
                            </a>
                            <a href="" className="text-gray-500 hover:text-primary">
                                <FaInstagram className="w-4 h-4" />
                            </a>
                        </div>
                        <span className="text-gray-600">fashe@example.com</span>
                    </div>
                </div>
                <div className="container mx-auto px-4 bg-white">
                    <div className="flex justify-between items-center py-4">
                        <Link to="/" className="flex-shrink-0">
                            <img src={logo} alt="fashe-theme" className="h-8" />
                        </Link>

                        <nav className="hidden lg:flex items-center space-x-8">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/shop" className="nav-link">Shop</Link>
                            <Link to="/sale" className="nav-link">Sale</Link>
                            <Link to="/features" className="nav-link">Features</Link>
                            <Link to="/blog" className="nav-link">Blog</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Link to="/login" className="text-gray-600 hover:text-black">
                                <CgProfile className="w-6 h-6" />
                            </Link>
                            <button 
                                className="relative"
                                onClick={() => setIsCartOpen(true)}
                            >
                                <BsBag className="w-6 h-6 text-gray-600 hover:text-black" />
                                {getTotalItems() > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {getTotalItems()}
                                    </span>
                                )}
                            </button>
                            <button 
                                className="lg:hidden"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <div className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}>
                                    <span className="sr-only">Menu</span>
                                    <div className="h-0.5 w-6 bg-gray-600 mb-1"></div>
                                    <div className="h-0.5 w-6 bg-gray-600 mb-1"></div>
                                    <div className="h-0.5 w-6 bg-gray-600"></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`
                    lg:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                `}>
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-8">
                            <Link to="/" className="flex-shrink-0">
                                <img src={logo} alt="fashe-theme" className="h-6" />
                            </Link>
                            <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-500 hover:text-black"
                            >
                                ×
                            </button>
                        </div>
                        <nav className="space-y-4">
                            <Link to="/" className="block py-2 text-gray-600 hover:text-black">Home</Link>
                            <Link to="/shop" className="block py-2 text-gray-600 hover:text-black">Shop</Link>
                            <Link to="/sale" className="block py-2 text-gray-600 hover:text-black">Sale</Link>
                            <Link to="/features" className="block py-2 text-gray-600 hover:text-black">Features</Link>
                            <Link to="/blog" className="block py-2 text-gray-600 hover:text-black">Blog</Link>
                            <Link to="/about" className="block py-2 text-gray-600 hover:text-black">About</Link>
                            <Link to="/contact" className="block py-2 text-gray-600 hover:text-black">Contact</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;


