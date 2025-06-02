import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaBeer, FaFacebookF, FaGooglePlus, FaGooglePlusG, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import { FaSquarePinterest } from 'react-icons/fa6';
import logo from '../assets/images/categories/logo.png'
import { useCart } from '../components/cart';
import { BsBag } from 'react-icons/bs';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getTotalItems, setIsCartOpen } = useCart();

    return (
        <>
            <header className="header2">
                <div className="container mx-auto px-4 pt-6">
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center mb-6">

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

                            <a href="/" className="flex-shrink-0">
                                <img src={logo} alt="fashe-theme" className="h-8" />
                            </a>

                            <div className="flex items-center space-x-6">
                                <span className="text-gray-600">fashe@example.com</span>
                                <div className="flex items-center space-x-4">
                                    <a href="#" className="relative">
                                        <CgProfile />
                                    </a>
                                    <div className="relative">
                                        <BsBag
                                            alt="Cart"
                                            className="w-5 h-5 cursor-pointer"
                                            onClick={() => setIsCartOpen(true)}
                                        />
                                        {getTotalItems() > 0 && (
                                            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                {getTotalItems()}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="hidden lg:block py-4">
                            <ul className="flex justify-center space-x-8">
                                <li className="relative group">
                                    <a href="/" className="text-gray-700 hover:text-primary font-large">Home</a> </li>
                                <li><a href="/collections/all" className="text-gray-700 hover:text-primary font-large">Shop</a></li>
                                <li><a href="/search" className="text-gray-700 hover:text-primary font-large">Sale</a></li>
                                <li><a href="/pages/features" className="text-gray-700 hover:text-primary font-large">Features</a></li>
                                <li><a href="/blogs/news" className="text-gray-700 hover:text-primary font-large">Blog</a></li>
                                <li><a href="/pages/about" className="text-gray-700 hover:text-primary font-large">About</a></li>
                                <li><a href="/pages/contact" className="text-gray-700 hover:text-primary font-large">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:hidden">
                    <div className="flex justify-between items-center px-4 py-3 border-b">
                        <a href="/" className="flex-shrink-0">
                            <img src={logo} alt="fashe-theme" className="h-6" />
                        </a>

                        <div className="flex items-center space-x-4">
                            <a href="#" className="relative">
                                <img src="/cdn/shop/t/6/assets/icon-header-01.png" alt="User" className="w-5 h-5" />
                            </a>
                            <div className="relative">
                                <img
                                    src="/cdn/shop/t/6/assets/icon-header-02.png"
                                    alt="Cart"
                                    className="w-5 h-5 cursor-pointer"
                                    onClick={() => setIsCartOpen(true)}
                                />
                                {getTotalItems() > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {getTotalItems()}
                                    </span>
                                )}
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 hover:bg-gray-100 rounded"
                            >
                                <div className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}>
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
                            <div className="p-4">
                                <div className="flex flex-col space-y-4">
                                    <div className="border-b pb-4">
                                        <span className="text-gray-600">20% off everything! <a href="/collections/all" className="text-primary">Shop Now</a></span>
                                    </div>

                                    <div className="border-b pb-4">
                                        <span className="text-gray-600">fashe@example.com</span>
                                        <div className="mt-2">
                                            <span className="text-gray-600">$</span>
                                        </div>
                                    </div>

                                    <div className="border-b pb-4">
                                        <div className="flex space-x-4">
                                            <a href="https://facebook.com/shopify" className="text-gray-500 hover:text-primary">
                                                <FaFacebookF className="w-4 h-4" />
                                            </a>
                                            <a href="https://twitter.com/shopify" className="text-gray-500 hover:text-primary">
                                                <FaTwitter className="w-4 h-4" />
                                            </a>
                                            <a href="https://pinterest.com/shopify" className="text-gray-500 hover:text-primary">
                                                <FaPinterestSquare className="w-4 h-4" />
                                            </a>
                                            <a href="https://plus.google.com/+shopify" className="text-gray-500 hover:text-primary">
                                                <FaGooglePlus className="w-4 h-4" />
                                            </a>
                                            <a href="https://instagram.com/shopify" className="text-gray-500 hover:text-primary">
                                                <FaInstagram className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>

                                    <nav className="flex flex-col space-y-4">
                                        <div className="flex justify-between items-center">
                                            <a href="/" className="text-gray-700">Home</a>
                                            <FaAngleRight className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <a href="/collections/all" className="text-gray-700">Shop</a>
                                        <a href="/search" className="text-gray-700">Sale</a>
                                        <a href="/pages/features" className="text-gray-700">Features</a>
                                        <a href="/blogs/news" className="text-gray-700">Blog</a>
                                        <a href="/pages/about" className="text-gray-700">About</a>
                                        <a href="/pages/contact" className="text-gray-700">Contact</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>

        </>
    );
};

export default Navbar;
