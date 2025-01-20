"use client";
import React from "react";
import { useCart } from "@/context/Context"; // Import the context to access wishlist

const WishList = () => {
    const { wishlist, setWishlist } = useCart(); // Get wishlist and setWishlist from context

    // Function to remove an item from the wishlist
    const removeFromWishlist = (productId: string) => {
        setWishlist(wishlist.filter((item) => item._id !== productId));
    };

    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Wishlist</h1>

            {/* Show a message if wishlist is empty */}
            {wishlist.length === 0 ? (
                <p className="text-gray-500">Your wishlist is empty.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist.map((product) => (
                        <div
                            key={product._id}
                            className="border p-4 rounded-md bg-white shadow-md flex flex-col items-start"
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>

                            {product.description.split(' ').slice(0, 10).join(' ')}{"..."}
                            <p className="text-lg font-bold text-green-800">${product.price}</p>

                            <button
                                onClick={() => removeFromWishlist(product._id)}
                                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                                Remove from Wishlist
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishList;
