import React from 'react';
import aboutTopImage from '../assets/images/articles/article2.jpg';
import storyImage from '../assets/images/categories/about-info.jpg';

const About = () => {
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
            
            <section className="bg-white py-16 pb-10">
                <div className="container mx-auto px-8 md:px-16 lg:px-24">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="overflow-hidden hover:opacity-90 transition-opacity duration-300 shadow-lg rounded">
                                <img 
                                    src={storyImage} 
                                    alt="Our Story" 
                                    className="w-full object-cover h-full" 
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        
                        <div className="w-full md:w-2/3 px-4 mb-8">
                            <h3 className="text-2xl font-medium mb-4 mt-4">Our story</h3>
                            <p className="mb-7 text-gray-600 leading-relaxed">
                                Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                            </p>
                            
                            <div className="border-l-4 border-gray-300 pl-7 ml-2 mb-3">
                                <p className="mb-3 text-gray-600 italic">
                                    Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                                </p>
                                <span className="text-gray-600 font-medium">- Steve Job's</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
