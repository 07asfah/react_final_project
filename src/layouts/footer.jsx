import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Get in Touch */}
                    <div>
                        <h3 className="text-sm font-bold uppercase mb-4">GET IN TOUCH</h3>
                        <p className="text-sm text-gray-600 mb-2">
                            Any questions? Let us know in store at 8th floor, 379 Hudson St,
                            New York, NY 10018 or call us on (+1) 96 716 6879
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-500 hover:text-red-600">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-red-600">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-red-600">
                                <FaGoogle />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-red-600">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-red-600">
                                <FaPinterestP />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase mb-4">CATEGORIES</h3>
                        <ul className="">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-black">Men</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-black">Women</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-black">Dresses</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-black">Sunglasses</a></li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase mb-4">LINKS</h3>
                        <ul className="">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-red">Search</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-red">About Us</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-red">Contact Us</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-red">Returns</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase mb-4">HELP</h3>
                        <ul className="">
                            <li><a href="#" className="text-sm text-gray-600 hover:text-red">Track Order</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-red">Returns</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-red">Shipping</a></li>
                            <li><a href="#" className="text-sm text-gray-600 hover:text-red">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="md:col-span-4 lg:col-span-1">
                        <h3 className="text-sm font-bold uppercase mb-4">NEWSLETTER</h3>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="flex-grow p-2 border-b-1 border-gray-300 focus:outline-none"
                            />
                            <button className="bg-black text-white px-4 py-2">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                    Copyright © 2023 MassTechnologist.com. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;