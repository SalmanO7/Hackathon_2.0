"use client";
import React, { useEffect } from "react";
import { useCart } from "@/context/Context"; // Import the context to access wishlist
import Link from "next/link";
import Navbar from "../pages/Navbar";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css";
import "@/app/components/style.css";

const WishList = () => {
  const { wishlist, setWishlist } = useCart(); // Get wishlist and setWishlist from context

  // Load wishlist from local storage when the component mounts
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, [setWishlist]);

  // Save wishlist to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Function to remove an item from the wishlist
  const removeFromWishlist = (productId: string) => {
    // Find the product being removed
    const removedItem = wishlist.find((item) => item._id === productId);

    // Remove the product from the wishlist
    setWishlist(wishlist.filter((item) => item._id !== productId));

  if (removedItem) {
       // Show a toast notification with the product name
     toast.info(`Removed "${removedItem.title}" from wishlist`, {
        position: "bottom-right", // Position to bottom-right
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "custom-toast", // Apply gradient styling
        // bodyClassName: "custom-toast-body", // Optional: for additional body styling
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 bg-gray-50 min-h-screen sm:px-6 lg:px-9">
        <ToastContainer />
        <nav className="text-sm flex justify-start gap-x-1 sm:px-10  text-gray-500 mb-6 px-10 md:py-4">
          <Link href="/">Home</Link> /{" "}
          <span className="text-black font-semibold">WishList</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-800 mb-6 pl-4 sm:pl-6 lg:pl-9">
          Your Wishlist
        </h1>
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
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>

                {product.description.split(" ").slice(0, 10).join(" ")}
                {"..."}
                <p className="text-lg font-bold text-green-800">
                  ${product.price}
                </p>

                <button
                  onClick={() => removeFromWishlist(product._id)}
                  className="mt-4 px-4 py-2 bg-[#01B5DA] text-white rounded-md hover:bg-[#1F2937]"
                >
                  Remove from Wishlist
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default WishList;
