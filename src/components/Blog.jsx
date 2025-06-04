import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import blog01 from '../assets/images/categories/Instagram.jpg';
import blog02 from '../assets/images/categories/blog-05.jpg';
import blog03 from '../assets/images/categories/blog-06.jpg';
import blog04 from '../assets/images/categories/blog-07.jpg';
import aboutTopImage from '../assets/images/articles/article2.jpg';

const Blog = () => {
    return (
        <>

        <section 
                className="flex flex-col items-center justify-center py-20"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutTopImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '400px'
                }}
            >
                <h2 className="text-5xl text-white font-medium text-center drop-shadow-lg">
                    About
                </h2>
            </section>

        <section className="bg-white pt-16">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-2/3 lg:w-3/4 pb-20 px-4 b">
                        <div className="pr-0 lg:pr-12 ">
                            <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
                                <div className="relative w-full h-150">
                                    <img
                                        src={blog01}
                                        alt="Blog post"
                                        className="object-cover w-full h-full rounded-tl-2xl rounded-bl-2xl"
                                    />
                                </div>
                                <div className="relative w-full h-150">
                                    <img
                                        src={blog02}
                                        alt="Blog post"
                                        className="object-cover w-full h-full rounded-tr-2xl rounded-br-2xl"
                                    />
                                </div>
                            </div>

                            <div className="text-center mb-12">
                                <h4 className="text-xl font-medium mb-2">Black Friday Guide: Best Sales & Discount Codes</h4>
                                <div className="text-sm text-gray-600 mb-4">
                                    by fashe-theme Admin | crafts, street style | 1 Comments
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
                                </p>
                                <a href="#" className="text-black hover:text-gray-600">Continue Reading</a>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
                                <div className="relative w-full h-150">
                                    <img
                                        src={blog03}
                                        alt="Blog post"
                                        className="object-cover w-full h-full rounded-tl-2xl rounded-bl-2xl"
                                    />
                                </div>
                                <div className="relative w-full h-150">
                                    <img
                                        src={blog04}
                                        alt="Blog post"
                                        className="object-cover w-full h-full rounded-tr-2xl rounded-br-2xl"
                                    />
                                </div>
                            </div>

                            <div className="text-center mb-12">
                                <h4 className="text-xl font-medium mb-2">New York SS 2018 Street Style: By Annina Mislin</h4>
                                <div className="text-sm text-gray-600 mb-4">
                                    by fashe-theme Admin | crafts, street style | 0 Comments
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
                                </p>
                                <a href="#" className="text-black hover:text-gray-600">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Blog;
