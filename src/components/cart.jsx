import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartContext = createContext();


const CartPanelContent = ({ cart, setCart, isCartOpen, setIsCartOpen, getSubtotal }) => {
    const navigate = useNavigate();

    return (
        <div className={`fixed inset-0 transition-opacity duration-300 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <div
                className={`fixed inset-0  bg-black transition-opacity duration-300 ${isCartOpen ? 'opacity-30' : 'opacity-0'
                    }`}
                onClick={() => setIsCartOpen(false)}
            ></div>
            <div className={`fixed right-0  pt-[11vh] top-0 h-full w-96 bg-white shadow-lg p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Cart</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-gray-500 hover:text-black text-2xl"
                    >
                        ×
                    </button>
                </div>

                {cart.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty</p>
                ) : (
                    <>
                        <div className="space-y-4 mb-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">
                                            {item.quantity} × ${item.price.toFixed(2)}
                                        </p>
                                    </div>
                                    <button
                                        className="text-gray-400 hover:text-black text-xl"
                                        onClick={() => {
                                            setCart(cart.filter(i => i.id !== item.id))
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="border-t pt-4">
                            <div className="flex justify-between mb-4">
                                <span className="font-medium">Subtotal:</span>
                                <span className="font-bold">${getSubtotal().toFixed(2)}</span>
                            </div>
                            <div className="space-y-3">
                                <button
                                    className="w-full bg-black text-white py-3 px-4 hover:bg-gray-800 transition-colors"
                                    onClick={() => { }}
                                >
                                    CHECKOUT
                                </button>
                                <button
                                    className="w-full border border-black py-3 px-4 hover:bg-gray-100 transition-colors"
                                    onClick={() => {
                                        setIsCartOpen(false);
                                        navigate('/cart-page');
                                    }}
                                >
                                    VIEW CART
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const CartPanel = () => {
    const { cart, setCart, isCartOpen, setIsCartOpen, getSubtotal } = useCart();

    return (
        <CartPanelContent
            cart={cart}
            setCart={setCart}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            getSubtotal={getSubtotal}
        />
    );
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getSubtotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            getTotalItems,
            isCartOpen,
            setIsCartOpen,
            getSubtotal
        }}>
            {children}
            <CartPanel />
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export default CartProvider;