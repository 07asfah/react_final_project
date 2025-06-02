import React, { createContext, useContext, useState } from 'react';

const Cart = createContext();

export function CartProvider({ children }) {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const getTotalItems = () => {
        return cartItems.length;
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <Cart.Provider value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems, getTotalItems, getTotalPrice }}>
            {children}
        </Cart.Provider>
    );
}

export function useCart() {
    return useContext(Cart);
}

const CartComponent = () => {
    const { cartItems, getTotalPrice } = useCart();

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
            
            {cartItems.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-600">Your cart is empty</p>
                </div>
            ) : (
                <div>
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b pb-4">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                                    <div>
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-gray-600">${item.price}</p>
                                    </div>
                                </div>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => {/* Add remove functionality */}}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 flex justify-between items-center">
                        <div className="text-lg font-medium">
                            Total: ${getTotalPrice()}
                        </div>
                        <button className="bg-black text-white px-6 py-2 hover:bg-gray-800">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartComponent;