import React from 'react';

const Contact = () => {
    return (
        <>
            <section 
                className="flex flex-col items-center justify-center py-20"
                style={{
                    backgroundImage: "url('//fashe-theme.myshopify.com/cdn/shop/t/6/assets/contact_top.jpg?v=24393269471667451341516034187')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h2 className="text-4xl text-white font-medium text-center">
                    Contact
                </h2>
            </section>

            <section className="bg-white py-16 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <div className="pr-0 lg:pr-8">
                                <div className="w-full">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.6822073234102!2d-83.71685604946924!3d42.30664594636449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cac2c20114b69%3A0x96fe590afa21efb6!2s2300+Traverwood+Dr%2C+Ann+Arbor%2C+MI+48105!5e0!3m2!1sen!2s!4v1461260551915"
                                        width="100%" 
                                        height="400" 
                                        style={{ border: 0 }} 
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="location map"
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