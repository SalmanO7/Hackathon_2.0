"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@/context/Context";
import Link from "next/link";
import Navbar from "../pages/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/app/components/style.css";

const WishList = () => {
  const { wishlist, setWishlist } = useCart();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist));
      }
    }
  }, []);

  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const removeFromWishlist = (productId: string) => {
    const removedItem = wishlist.find((item) => item._id === productId);

    const updatedWishlist = wishlist.filter((item) => item._id !== productId);
    setWishlist(updatedWishlist);

    if (removedItem) {
      toast.info(`Removed "${removedItem.title}" from wishlist`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "custom-toast",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 bg-gray-50 min-h-screen sm:px-6 lg:px-9">
        <ToastContainer />
        <nav className="text-sm flex justify-start gap-x-1 sm:px-10 text-gray-500 mb-6 px-10 md:py-4">
          <Link href="/">Home</Link> / <span className="text-black font-semibold">WishList</span>
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
                <Link href={`/${product._id}`} className="w-full">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                </Link>
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
                {product.description.split(" ").slice(0, 10).join(" ")}
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
