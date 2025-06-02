import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestSquare, FaGooglePlus, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#f0f0f0] py-12 px-11">
            <div className="flex flex-wrap pb-20">
                <div className="w-full md:w-1/4 pt-8 px-4 mb-8 md:mb-0">
                    <h4 className="text-sm font-medium pb-8">
                        GET IN TOUCH
                    </h4>
                    <div>
                        <p className="text-sm text-gray-600 w-4/5 mb-8">
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                        </p>
                        <div className="flex mt-8">
                            <a href="" className="text-lg text-gray-800 mr-5" title="fashe-theme on Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="" className="text-lg text-gray-800 mr-5" title="fashe-theme on Twitter">
                                <FaTwitter />
                            </a>
                            <a href="" className="text-lg text-gray-800 mr-5" title="fashe-theme on Pinterest">
                                <FaPinterestSquare />
                            </a>
                            <a href="" className="text-lg text-gray-800 mr-5" title="fashe-theme on Google">
                                <FaGooglePlus />
                            </a>
                            <a href="" className="text-lg text-gray-800 mr-5" title="fashe-theme on Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/6 pt-8 px-4 mb-8 md:mb-0">
                    <h4 className="text-sm font-medium pb-8">CATEGORIES</h4>
                    <ul>
                        <li className="pb-2"><a href="/" className="text-sm text-gray-600 hover:text-red-500">Men</a></li>
                        <li className="pb-2"><a href="/" className="text-sm text-gray-600 hover:text-red-500">Women</a></li>
                        <li className="pb-2"><a href="/" className="text-sm text-gray-600 hover:text-red-500">Dresses</a></li>
                        <li className="pb-2"><a href="/" className="text-sm text-gray-600 hover:text-red-500">Sunglasses</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/6 pt-8 px-4 mb-8 md:mb-0">
                    <h4 className="text-sm font-medium pb-8">LINKS</h4>
                    <ul>
                        <li className="pb-2"><a href="/search" className="text-sm text-gray-600 hover:text-red-500">Search</a></li>
                        <li className="pb-2"><a href="/pages/about" className="text-sm text-gray-600 hover:text-red-500">About Us</a></li>
                        <li className="pb-2"><a href="/pages/contact" className="text-sm text-gray-600 hover:text-red-500">Contact Us</a></li>
                        <li className="pb-2"><a href="/pages/features" className="text-sm text-gray-600 hover:text-red-500">Returns</a></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/6 pt-8 px-4 mb-8 md:mb-0">
                    <h4 className="text-sm font-medium pb-8">HELP</h4>
                    <ul>
                        <li className="pb-2"><a href="/" className="text-sm text-gray-600 hover:text-red-500">Track Order</a></li>
                        <li className="pb-2"><a href="/" className="text-sm text-gray-600 hover:text-red-500">Returns</a></li>
                        <li className="pb-2"><a href="/" className="text-sm text-gray-600 hover:text-red-500">Shipping</a></li>
                        <li className="pb-2"><a href="/" className="text-sm text-gray-600 hover:text-red-500">FAQs</a></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/4 pt-8 px-4">
                    <h4 className="text-sm font-medium pb-8">NEWSLETTER</h4>
                    <form action="/contact#contact_form" method="post" className="w-full">
                        <input type="hidden" name="form_type" value="customer" />
                        <input type="hidden" name="utf8" value="✓" />
                        <input type="hidden" name="contact[tags]" value="newsletter" />
                        <div className="relative w-full mb-6">
                            <input 
                                type="email"
                                name="contact[email]"
                                className="w-full pb-2 text-sm text-gray-600 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <button className="w-32 py-3 text-sm text-white bg-black rounded-full hover:bg-gray-900 transition duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="text-center">
                <div className="text-sm text-gray-600 pt-5">
                    Copyright © 2023 <a href="https://themeforest.net/user/masstechnologist/portfolio" className="hover:text-gray-900">MassTechnologist.com.</a> All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
