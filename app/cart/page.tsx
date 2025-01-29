"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/context/Context";
import Navbar from "../pages/Navbar";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/app/components/style.css";

const CartPage = () => {
  const { increaseQuantity, decreaseQuantity } = useCart();
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Sync with localStorage whenever cartItems changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Remove item from cart and update localStorage
  const removeFromCart = (productId: string) => {
    const updatedCart = cartItems.filter((item: any) => item.product._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.info("Item removed from cart", { position: "bottom-right", autoClose: 3000 });
  };

  // Increase quantity and update localStorage
  const handleIncreaseQuantity = (productId: string) => {
    const updatedCart = cartItems.map((item: any) =>
      item.product._id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Decrease quantity and update localStorage
  const handleDecreaseQuantity = (productId: string) => {
    const updatedCart = cartItems
      .map((item: any) =>
        item.product._id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
      .filter((item: any) => item.quantity > 0);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <nav className="md:px-9 xl:pl-16 text-sm flex justify-start gap-x-1 sm:px-10 text-gray-500 mb-6 px-10 py-6 md:py-8">
        <Link href="/">Home</Link> / <span className="text-black font-semibold">Your Cart</span>
      </nav>
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center pt-40 pb-16">
          <p>
            Your cart is empty <Link href="/" className="bg-gray-100 py-2 px-3 rounded-2xl">Select Products</Link>
          </p>
        </div>
      ) : (
        <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
          {cartItems.map((item: any) => (
            <div key={item.product._id} className="flex justify-between items-center border-b py-4">
              <div className="flex items-start sm:items-center flex-col gap-2 sm:flex-row">
                <img src={item.product.imageUrl} alt={item.product.title} width={50} height={50} className="rounded ml-5 sm:ml-0" />
                <span className="ml-4">{item.product.title}</span>
              </div>
              <div className="flex items-center flex-col-reverse sm:flex-row gap-5 sm:gap-x-16">
                <div className="flex items-center">
                  <button onClick={() => handleDecreaseQuantity(item.product._id)} className="px-2 py-1 border border-gray-300 rounded-full">-</button>
                  <span className="px-4">{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.product._id)} className="px-2 py-1 border border-gray-300 rounded-full">+</button>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold">${item.product.price * item.quantity}</span>
                  <button onClick={() => removeFromCart(item.product._id)} className="px-4 py-2 text-sm bg-[#01B5DA] text-white rounded-md hover:bg-[#1F2937]">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CartPage;
