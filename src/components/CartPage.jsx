import React from 'react';
import { useCart } from './cart';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, getSubtotal } = useCart();

    return (
        <>
            <section className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
                
                {cart.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">Your cart is empty</p>
                        <Link 
                            to="/shop" 
                            className="inline-block bg-black text-white px-6 py-3 hover:bg-gray-800"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-2/3">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 border-b py-4">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-24 h-24 object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-medium">{item.title}</h3>
                                        <p className="text-gray-600">
                                            ${item.price.toFixed(2)}
                                        </p>
                                        <div className="flex items-center mt-2">
                                            <span className="mr-2">Quantity: {item.quantity}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:w-1/3">
                            <div className="bg-gray-50 p-6 rounded">
                                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                                <div className="flex justify-between mb-4">
                                    <span>Subtotal</span>
                                    <span>${getSubtotal().toFixed(2)}</span>
                                </div>
                                <button 
                                    className="w-full bg-black text-white py-3 px-4 hover:bg-gray-800 transition-colors"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default CartPage;