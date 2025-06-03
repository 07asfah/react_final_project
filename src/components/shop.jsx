import React from 'react';
import { useCart } from './cart';
import shop1 from '../assets/images/shop/shop1.jpg';
import shop2 from '../assets/images/shop/shop2.jpg';
import shop3 from '../assets/images/shop/shop3.jpg';
import shop4 from '../assets/images/shop/shop4.jpg';
import shop5 from '../assets/images/shop/shop5.jpg';
import shop6 from '../assets/images/shop/shop6.jpg';
import shop7 from '../assets/images/shop/shop7.jpg';
import shop8 from '../assets/images/shop/shop8.jpg';

const Shop = () => {
    const { addToCart } = useCart();

    const products = [
        { 
            id: 1, 
            image: shop1, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00 
        },
        { 
            id: 2, 
            image: shop2, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00 
        },
        { 
            id: 3, 
            image: shop3, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00 
        },
        { 
            id: 4, 
            image: shop4, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00 
        },
        { 
            id: 5, 
            image: shop5, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00 
        },
        { 
            id: 6, 
            image: shop6, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00 
        },
        { 
            id: 7, 
            image: shop7, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00 
        },
        { 
            id: 8, 
            image: shop8, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00 
        },
    ];

    const handleAddToCart = (product) => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Categories</h2>
                        <ul className="space-y-2">
                            <li>Best Seller (8 items)</li>
                            <li>Featured (8 items)</li>
                            <li>Men (8 items)</li>
                            <li>Women (8 items)</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">color</h2>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> black
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> gray
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> red
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">size</h2>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> L
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> M
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> S
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> XL
                            </label>
                        </div>
                    </div>
                </div>

                <div className="md:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="relative">
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="w-full h-auto"
                                    />
                                    <div className="product-overlay">
                                        <button 
                                            onClick={() => handleAddToCart(product)}
                                            className="add-to-cart-btn"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-gray-800 text-lg">{product.title}</h3>
                                    <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;