import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showRecoverPassword, setShowRecoverPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [recoverEmail, setRecoverEmail] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
    };

    const handleRecoverPassword = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="bg-gray-100 py-4 px-6 md:px-12">
                <div className="flex items-center text-sm">
                    <Link to="/" className="text-gray-600 hover:text-gray-800">
                        Home
                    </Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-800">Account</span>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-medium mb-6">New Customer</h2>
                        <div className="mb-6">
                            <h3 className="text-lg font-medium mb-2">Register Account</h3>
                            <p className="text-gray-600 mb-6">
                                By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                            </p>
                            <Link 
                                to="/register"
                                className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition duration-300"
                            >
                                Continue
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-medium mb-6">Returning Customer</h2>
                        
                        {!showRecoverPassword ? (
                            <form onSubmit={handleLogin}>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <button
                                        type="button"
                                        onClick={() => setShowRecoverPassword(true)}
                                        className="text-gray-600 hover:text-black"
                                    >
                                        Forgot your password?
                                    </button>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <button
                                        type="submit"
                                        className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition duration-300"
                                    >
                                        Sign In
                                    </button>
                                    <Link to="/" className="text-gray-600 hover:text-black">
                                        Return to Store
                                    </Link>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleRecoverPassword}>
                                <h3 className="text-xl font-medium mb-4">Reset your password</h3>
                                <p className="text-gray-600 mb-6">
                                    We will send you an email to reset your password.
                                </p>

                                <div className="mb-6">
                                    <label htmlFor="recover-email" className="block text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="recover-email"
                                        value={recoverEmail}
                                        onChange={(e) => setRecoverEmail(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                    />
                                </div>

                                <div className="flex items-center space-x-4">
                                    <button
                                        type="submit"
                                        className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition duration-300"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowRecoverPassword(false)}
                                        className="text-gray-600 hover:text-black"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;