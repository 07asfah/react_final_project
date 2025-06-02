import React from 'react';
import contactTopImage from '../assets/images/articles/about_top.jpg'; 

const Contact = () => {
    return (
        <>
            <section 
                className="flex flex-col items-center justify-center py-20"
                style={{
                    backgroundImage: `url(${contactTopImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h2 className="text-4xl text-white font-medium text-center">
                    Contact
                </h2>
            </section>

            <section className="bg-white py-16 px-4">
                <div className="container mx-auto px-8 md:px-16 lg:px-24">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <div className="pr-0 lg:pr-8">
                                <div className="w-full">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.5590632821154!2d-7.5338517!3d33.6037882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e1!3m2!1sfr!2sma!4v1748899908724!5m2!1sfr!2sma" 
                                        width="100%" 
                                        height="400" 
                                        style={{ border: 0 }} 
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="LionsGeek location map"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-4">
                            <form method="post" action="/contact#contact_form" id="contact_form" className="contact-form">
                                <input type="hidden" name="form_type" value="contact" />
                                <input type="hidden" name="utf8" value="✓" />

                                <h4 className="text-2xl font-medium mb-8 pt-4">Send us your message</h4>
                                
                                <div className="mb-5">
                                    <input 
                                        type="text" 
                                        id="contactFormName" 
                                        name="contact[name]" 
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                                        placeholder="Name"
                                    />
                                </div>

                                <div className="mb-5">
                                    <input 
                                        type="email" 
                                        id="contactFormEmail" 
                                        name="contact[email]" 
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                                        placeholder="Email"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                    />
                                </div>

                                <div className="mb-5">
                                    <input 
                                        type="tel" 
                                        id="contactFormPhone" 
                                        name="contact[phone]" 
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                                        placeholder="Phone"
                                    />
                                </div>

                                <div className="mb-5">
                                    <textarea 
                                        id="contactFormMessage" 
                                        name="contact[body]" 
                                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black h-32"
                                        placeholder="Message"
                                    ></textarea>
                                </div>

                                <div className="w-32">
                                    <button className="w-full py-3 px-4 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
