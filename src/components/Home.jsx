import React, { useState, useEffect, useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Dynamic imports for images
import image1 from '../assets/images/categories/Blog-09.jpg?url';
import image2 from '../assets/images/categories/Blog-08.jpg?url';
import image3 from '../assets/images/categories/Blog-10.jpg?url';

import product1 from '../assets/images/categories/Blog-05.jpg?url';
import product2 from '../assets/images/categories/Blog-09.jpg?url';
import product3 from '../assets/images/categories/Blog-11.jpg?url';
import product4 from '../assets/images/categories/Blog-12.jpg?url';
import product5 from '../assets/images/categories/Blog-13.jpg?url';
import product6 from '../assets/images/categories/Blog-14.jpg?url';
import product7 from '../assets/images/categories/Blog-15.jpg?url';
import product8 from '../assets/images/categories/Blog-16.jpg?url';

import videoSource from '../assets/videos/redvideo.mp4';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const videoRef = useRef(null);

    const carouselImages = [
        {
            url: '/src/assets/images/products/calvin.jpg',
            alt: 'Leather Collection',
            title: 'Leather Bags',
            description: 'New Collection 2024',
            buttonText: 'Shop Now'
        },
        {
            url: '/src/assets/images/products/download.jpg',
            alt: 'Fashion Collection',
            title: 'Spring Collection',
            description: 'New Arrivals',
            buttonText: 'Shop Now'
        },
        {
            url: '/src/assets/images/products/shoot.jpg',
            alt: 'Fashion Collection',
            title: 'Spring Collection',
            description: 'New Arrivals',
            buttonText: 'Shop Now'
        }
    ];

    useEffect(() => {
        const loadImages = async () => {
            try {
                const imagePromises = carouselImages.map((image) => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.onload = resolve;
                        img.onerror = reject;
                        img.src = image.url;
                    });
                });
                await Promise.all(imagePromises);
                setImagesLoaded(true);
            } catch (error) {
                console.error('Error loading images:', error);
            }
        };

        loadImages();

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    if (!imagesLoaded) {
        return (
            <div className="h-screen flex items-center justify-center bg-gray-100">
                <div className="animate-pulse text-xl text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <div className="video-container relative min-h-screen">
            <video
                ref={videoRef}
                className="fixed top-0 left-0 w-full h-full object-cover -z-10"
                src={videoSource}
                muted
                loop
                autoPlay
                preload="auto"
                playsInline
            />
            <>
                <section className="slide1 w-full max-w-[1920px] mx-auto ">
                    <div className="wrap-slick1 z-0 relative w-full ">
                        <div className="slick1 h-[570px] relative overflow-hidden">
                            {carouselImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`item-slick1 absolute w-full h-full transition-all duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                    style={{
                                        backgroundImage: `url(${image.url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className="wrap-content-slide1 flex flex-col items-center justify-center h-full text-center px-4">
                                        <h2 className={`caption1-slide1 text-4xl md:text-6xl font-bold mb-6 text-white transform ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                            } transition-all duration-700 delay-300`}>
                                            {image.title}
                                        </h2>

                                        <span className={`caption2-slide1 text-xl md:text-2xl text-white mb-8 transform ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                            } transition-all duration-700 delay-500`}>
                                            {image.description}
                                        </span>

                                        <div className={`wrap-btn-slide1 transform ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                            } transition-all duration-700 delay-700`}>
                                            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
                                                {image.buttonText}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={goToPrevious}
                            className="arrow-slick1 prev-slick1 absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 p-4 rounded-full hover:bg-opacity-75 transition-all text-white"
                            aria-label="Previous slide"
                        >
                            <FaAngleLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={goToNext}
                            className="arrow-slick1 next-slick1 absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 p-4 rounded-full hover:bg-opacity-75 transition-all text-white"
                            aria-label="Next slide"
                        >
                            <FaAngleRight className="w-6 h-6" />
                        </button>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                            {carouselImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-white scale-125'
                                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <div className="banner bgwhite mt-10 mb-10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="col-span-1">
                                <div className="block1 group cursor-pointer relative">
                                    <div className="block1-img overflow-hidden relative">
                                        <img
                                            src={image1}
                                            alt="Sunglasses"
                                            className="w-full h-[450px] object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Link
                                                to="/collections/sunglasses"
                                                className="block text-center bg-white text-black py-3 px-6 font-medium mx-auto max-w-[150px] hover:bg-opacity-90 transition-all border-2 border-gray-200 shadow-md"
                                            >
                                                Sunglasses
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Watches Category */}
                            <div className="col-span-1">
                                <div className="block1 relative group cursor-pointer ">
                                    <div className="block1-img overflow-hidden relative">
                                        <img
                                            src={image2}
                                            alt="Watches"
                                            className="w-full h-[450px] object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Link
                                                to="/collections/watches"
                                                className="block text-center bg-white text-black py-3 px-6 font-medium mx-auto max-w-[150px] hover:bg-opacity-90 transition-all border-2 border-gray-200 shadow-md"
                                            >
                                                Watches
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bags Category */}
                            <div className="col-span-1">
                                <div className="block1 relative group cursor-pointer">
                                    <div className="block1-img overflow-hidden relative">
                                        <img
                                            src={image3}
                                            alt="Bags"
                                            className="w-full h-[450px] object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Link
                                                to="/collections/bags"
                                                className="block text-center bg-white text-black py-3 px-6 font-medium mx-auto max-w-[150px] hover:bg-opacity-90 transition-all border-2 border-gray-200 shadow-md"
                                            >
                                                Bags
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <section className="bgwhite py-12">
                    <div className="container mx-auto px-4">
                        {/* Section Title */}
                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-medium">OUR PRODUCTS</h3>
                        </div>

                        {/* Tab Navigation */}
                        <div className="flex justify-center mb-8">
                            <ul className="flex space-x-8" role="tablist">
                                <li>
                                    <button
                                        className="text-lg hover:text-gray-600 border-b-2 border-transparent hover:border-black transition-all"
                                        role="tab"
                                    >
                                        Best Seller
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="text-lg hover:text-gray-600 border-b-2 border-transparent hover:border-black transition-all"
                                        role="tab"
                                    >
                                        Featured
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="text-lg hover:text-gray-600 border-b-2 border-transparent hover:border-black transition-all"
                                        role="tab"
                                    >
                                        New Arrivals
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {/* Product Card */}
                            <div className="group relative">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product1}
                                        alt="Product"
                                        className="w-full h-[400px] object-contain"
                                    />
                                    <div className=" inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                                        <div className=" bottom-4 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <button className="mx-auto block bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 text-center">
                                    <a href="#" className="block text-lg mb-2 hover:text-gray-600">
                                        Boxy T-Shirt
                                    </a>
                                    <span className="text-gray-900 font-medium">$20.00</span>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product2}
                                        alt="Product"
                                        className="w-full h-[400px] object-contain"
                                    />
                                    <div className=" inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                                        <div className=" bottom-4 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <button className="mx-auto block bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 text-center">
                                    <a href="#" className="block text-lg mb-2 hover:text-gray-600">
                                        Boxy7 T-Shirt with Roll Sleeve
                                    </a>
                                    <span className="text-gray-900 font-medium">$20.00</span>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product3}
                                        alt="Product"
                                        className="w-full h-[400px] object-contain"
                                    />
                                    <div className=" inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                                        <div className=" bottom-4 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <button className="mx-auto block bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 text-center">
                                    <a href="#" className="block text-lg mb-2 hover:text-gray-600">
                                        Boxy7 T-Shirt with Roll Sleeve
                                    </a>
                                    <span className="text-gray-900 font-medium">$20.00</span>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product7}
                                        alt="Product"
                                        className="w-full h-[400px] object-contain"
                                    />
                                    <div className=" inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                                        <div className=" bottom-4 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <button className="mx-auto block bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 text-center">
                                    <a href="#" className="block text-lg mb-2 hover:text-gray-600">
                                        Boxy7 T-Shirt with Roll Sleeve
                                    </a>
                                    <span className="text-gray-900 font-medium">$20.00</span>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product8}
                                        alt="Product"
                                        className="w-full h-[400px] object-contain"
                                    />
                                    <div className=" inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                                        <div className=" bottom-4 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <button className="mx-auto block bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 text-center">
                                    <a href="#" className="block text-lg mb-2 hover:text-gray-600">
                                        Boxy7 T-Shirt with Roll Sleeve
                                    </a>
                                    <span className="text-gray-900 font-medium">$20.00</span>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product6}
                                        alt="Product"
                                        className="w-full h-[400px] object-contain"
                                    />
                                    <div className=" inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                                        <div className=" bottom-4 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <button className="mx-auto block bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 text-center">
                                    <a href="#" className="block text-lg mb-2 hover:text-gray-600">
                                        Boxy7 T-Shirt with Roll Sleeve
                                    </a>
                                    <span className="text-gray-900 font-medium">$20.00</span>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product5}
                                        alt="Product"
                                        className="w-full h-[400px] object-contain"
                                    />
                                    <div className=" inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                                        <div className=" bottom-4 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <button className="mx-auto block bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 text-center">
                                    <a href="#" className="block text-lg mb-2 hover:text-gray-600">
                                        Boxy7 T-Shirt with Roll Sleeve
                                    </a>
                                    <span className="text-gray-900 font-medium">$20.00</span>
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product4}
                                        alt="Product"
                                        className="w-full h-[400px] object-contain"
                                    />
                                    <div className=" inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                                        <div className=" bottom-4 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <button className="mx-auto block bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 text-center">
                                    <a href="#" className="block text-lg mb-2 hover:text-gray-600">
                                        Boxy7 T-Shirt with Roll Sleeve
                                    </a>
                                    <span className="text-gray-900 font-medium">$20.00</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="relative h-screen w-full overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="text-center text-white">
                            <h2 className="text-5xl font-bold mb-4">The Beauty</h2>
                            <h3 className="text-6xl font-bold mb-8">LOOKBOOK</h3>
                        </div>
                    </div>
                    <video
                        ref={videoRef}
                        className="absolute inset-0 w-full h-full object-cover"
                        src={videoSource}
                        muted
                        loop
                        autoPlay
                        preload="auto"
                        playsInline
                    />
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12">OUR BLOG</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="group">
                                <a href="#" className="block mb-4 overflow-hidden">
                                    <img
                                        src={product1}
                                        alt="Black Friday Guide"
                                        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </a>
                                <h3 className="text-xl font-semibold mb-2">
                                    <a href="#" className="hover:text-gray-600">Black Friday Guide: Best Sales & Discount Codes</a>
                                </h3>
                                <div className="text-sm text-gray-500 mb-3">
                                    by <a href="#" className="text-black">fashe-theme Admin</a> on Dec 28,2017
                                </div>
                                <p className="text-gray-50">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
                                </p>
                            </div>

                            <div className="group">
                                <a href="#" className="block mb-4 overflow-hidden">
                                    <img
                                        src={product2}
                                        alt="White Sneakers"
                                        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </a>
                                <h3 className="text-xl font-semibold mb-2">
                                    <a href="#" className="hover:text-gray-600">The White Sneakers Nearly Every Fashion Girls Own</a>
                                </h3>
                                <div className="text-sm text-gray-500 mb-3">
                                    by <a href="#" className="text-black">fashe-theme Admin</a> on Dec 28,2017
                                </div>
                                <p className="text-gray-50">
                                    Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Inter-dum et...
                                </p>
                            </div>

                            <div className="group">
                                <a href="#" className="block mb-4 overflow-hidden">
                                    <img
                                        src={product3}
                                        alt="New York Street Style"
                                        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </a>
                                <h3 className="text-xl font-semibold mb-2">
                                    <a href="#" className="hover:text-gray-600">New York SS 2018 Street Style: By Annina Mislin</a>
                                </h3>
                                <div className="text-sm text-gray-500 mb-3">
                                    by <a href="#" className="text-black">fashe-theme Admin</a> on Dec 28,2017
                                </div>
                                <p className="text-gray-50">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-neutral-300 mb-12">@ FOLLOW US ON INSTAGRAM</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        </div>
                    </div>
                </section>

                <section className=" py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            {/* Feature 1 */}
                            <div className='border-r border-gray-200'>
                                <h3 className="text-xl text-gray-200 font-medium mb-2">Free Delivery Worldwide</h3>
                                <p className="text-gray-50">Mirum est notare quam littera gothica</p>
                            </div>

                            {/* Feature 2 */}
                            <div className='border-r border-gray-200'>
                                <h3 className="text-xl font-medium text-gray-200 mb-2">30 Days Return</h3>
                                <p className="text-gray-50">Simply return it within 30 days for an exchange</p>
                            </div>

                            {/* Feature 3 */}
                            <div>
                                <h3 className="text-xl font-medium  text-gray-200 mb-2">Store Opening</h3>
                                <p className="text-gray-50">Shop open from Monday to Sunday</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </div>
    );
};

export default Home;
