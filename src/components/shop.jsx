import React, { useState } from 'react';
import { useCart } from './cart';
import shop1 from '../assets/images/shop/shop1.jpg';
import shop2 from '../assets/images/shop/shop2.jpg';
import shop3 from '../assets/images/shop/shop3.jpg';
import shop4 from '../assets/images/shop/shop4.jpg';
import shop5 from '../assets/images/shop/shop5.jpg';
import shop6 from '../assets/images/shop/shop6.jpg';
import shop7 from '../assets/images/shop/shop7.jpg';
import shop8 from '../assets/images/shop/shop8.jpg';

import aboutTopImage from '../assets/images/articles/article2.jpg';

const Shop = () => {
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedColor, setSelectedColor] = useState('all');
    const [selectedSize, setSelectedSize] = useState('all');

    const products = [
        { 
            id: 1, 
            image: shop1, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00,
            category: "men",
            color: "black",
            size: "L"
        },
        { 
            id: 2, 
            image: shop2, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00,
            category: "women",
            color: "gray",
            size: "M"
        },
        { 
            id: 3, 
            image: shop3, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00,
            category: "men",
            color: "red",
            size: "S"
        },
        { 
            id: 4, 
            image: shop4, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00,
            category: "women",
            color: "black",
            size: "XL"
        },
        { 
            id: 5, 
            image: shop5, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00,
            category: "men",
            color: "gray",
            size: "L"
        },
        { 
            id: 6, 
            image: shop6, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00,
            category: "women",
            color: "red",
            size: "M"
        },
        { 
            id: 7, 
            image: shop7, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00,
            category: "men",
            color: "black",
            size: "S"
        },
        { 
            id: 8, 
            image: shop8, 
            title: "Boxy T-Shirt with Roll Sleeve Detail", 
            price: 20.00,
            category: "women",
            color: "gray",
            size: "XL"
        },
    ];

    const filteredProducts = products.filter(product => {
        return (
            (selectedCategory === 'all' || product.category === selectedCategory) &&
            (selectedColor === 'all' || product.color === selectedColor) &&
            (selectedSize === 'all' || product.size === selectedSize)
        );
    });

    const categories = [
        { id: 'all', name: 'All', count: products.length },
        { id: 'bestSeller', name: 'Best Seller', count: products.filter(p => p.category === 'bestSeller').length },
        { id: 'featured', name: 'Featured', count: products.filter(p => p.category === 'featured').length },
        { id: 'men', name: 'Men', count: products.filter(p => p.category === 'men').length },
        { id: 'women', name: 'Women', count: products.filter(p => p.category === 'women').length },
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
                    Shop
                </h2>
            </section>
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Categories</h2>
                        <ul className="space-y-2">
                            {categories.map(category => (
                                <li 
                                    key={category.id}
                                    className={`cursor-pointer ${
                                        selectedCategory === category.id ? 'text-black font-medium' : 'text-gray-600'
                                    }`}
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    {category.name} ({category.count} items)
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Color</h2>
                        <div className="space-y-2">
                            {['all', 'black', 'gray', 'red'].map(color => (
                                <label key={color} className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="color"
                                        value={color}
                                        checked={selectedColor === color}
                                        onChange={(e) => setSelectedColor(e.target.value)}
                                        className="mr-2"
                                    />
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Size</h2>
                        <div className="space-y-2">
                            {['all', 'S', 'M', 'L', 'XL'].map(size => (
                                <label key={size} className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="size"
                                        value={size}
                                        checked={selectedSize === size}
                                        onChange={(e) => setSelectedSize(e.target.value)}
                                        className="mr-2"
                                    />
                                    {size.toUpperCase()}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
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
    </>
    );
};
export default Shop;