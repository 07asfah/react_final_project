import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Dynamic imports for images
import image1 from '../assets/images/categories/Blog-09.jpg?url';
import image2 from '../assets/images/categories/Blog-08.jpg?url';
import image3 from '../assets/images/categories/Blog-10.jpg?url';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    
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
        <>
            <section className="slide1 w-full max-w-[1920px] mx-auto">
                <div className="wrap-slick1 relative w-full">
                    <div className="slick1 h-[570px] relative overflow-hidden">
                        {carouselImages.map((image, index) => (
                            <div 
                                key={index}
                                className={`item-slick1 absolute w-full h-full transition-all duration-500 ${
                                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="wrap-content-slide1 flex flex-col items-center justify-center h-full text-center px-4">
                                    <h2 className={`caption1-slide1 text-4xl md:text-6xl font-bold mb-6 text-white transform ${
                                        index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    } transition-all duration-700 delay-300`}>
                                        {image.title}
                                    </h2>
                                    
                                    <span className={`caption2-slide1 text-xl md:text-2xl text-white mb-8 transform ${
                                        index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    } transition-all duration-700 delay-500`}>
                                        {image.description}
                                    </span>
                                    
                                    <div className={`wrap-btn-slide1 transform ${
                                        index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
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
                                className={`w-3 h-3 rounded-full transition-all ${
                                    index === currentIndex 
                                        ? 'bg-white scale-125' 
                                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories Section */}
            <div className="banner bgwhite mt-10 mb-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Sunglasses Category */}
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
        </>
    );
};

export default Home;
