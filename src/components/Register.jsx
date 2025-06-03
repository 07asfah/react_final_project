import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add registration logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm mb-8">
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                    Home
                </Link>
                <span className="mx-2 text-gray-400">›</span>
                <span className="text-gray-800">Create Account</span>
            </div>

            <div className="mb-8">
                <h1 className="text-3xl font-medium mb-2">Create Account</h1>
                <h2 className="text-xl text-gray-700">Your Personal Details</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                    <label htmlFor="first_name" className="block text-gray-700">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="first_name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                        required
                    />
                </div>

                <div className="space-y-1">
                    <label htmlFor="last_name" className="block text-gray-700">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="last_name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                        required
                    />
                </div>

                <div className="space-y-1">
                    <label htmlFor="email" className="block text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                        required
                    />
                </div>

                <div className="space-y-1">
                    <label htmlFor="password" className="block text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                        required
                    />
                </div>

                <div className="flex items-center mt-6">
                    <button
                        type="submit"
                        className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-black transition duration-300 flex items-center"
                    >
                        <FaUser className="mr-2" />
                        CREATE
                    </button>
                    <span className="ml-4 text-gray-600">or <Link to="/" className="text-gray-600 hover:text-black underline">Return to Store</Link></span>
                </div>
            </form>
        </div>
    );
};

export default Register;
