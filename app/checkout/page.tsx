"use client";
import { useCart } from "@/context/Context";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../pages/Navbar";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const CheckoutPage = () => {
    const { cartItems } = useCart();
    const [loading, setLoading] = useState(false);

    const [billingInfo, setBillingInfo] = useState({
        username: "",
        email: "",
        phone: "",
        address: "",
    });
    const [showConfirmation, setShowConfirmation] = useState(false);

    const calculateSubtotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
        );
    };

    const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBillingInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleConfirmOrder = async () => {
        if (!billingInfo.username || !billingInfo.email || !billingInfo.phone || !billingInfo.address) {
            toast.error("⚠️ Please fill in all billing information!", { position: "top-center" });
            return;
        }
        setLoading(true);

        const orderData = {
            _type: "order",
            user: {
                name: billingInfo.username,
                email: billingInfo.email,
                contact: billingInfo.phone,
                address: billingInfo.address,
            },
            products: cartItems.map((item) => ({
                _key: uuidv4(),
                productId: item.product._id,
                title: item.product.title,
                price: item.product.price,
                quantity: item.quantity,
                imageUrl: item.product.imageUrl,
            })),
            totalAmount: calculateSubtotal(),
            date: new Date().toISOString(),
        };

        try {
            const response = await fetch("/api/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderData }),
            });

            if (response.ok) {
                setLoading(false);
                setShowConfirmation(true);
            } else {
                throw new Error("Failed to place order");
            }
        } catch (error) {
            setLoading(false);
            alert("Something went wrong. Please try again.");
        }
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <>
            <Navbar />
            <Toaster />
            <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Billing Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                value={billingInfo.username}
                                onChange={handleBillingChange}
                                className="border p-3 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={billingInfo.email}
                                onChange={handleBillingChange}
                                className="border p-3 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={billingInfo.phone}
                                onChange={handleBillingChange}
                                className="border p-3 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Enter your address"
                                value={billingInfo.address}
                                onChange={handleBillingChange}
                                className="border p-3 rounded-md w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h2>
                    {cartItems.map((item) => (
                        <div key={item.product._id} className="flex items-center border-b py-3">
                            <img
                                src={item.product.imageUrl}
                                alt={item.product.title}
                                className="w-16 h-16 object-cover mr-4"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-semibold">{item.product.title}</p>
                                <p className="text-gray-500 text-sm">x{item.quantity}</p>
                            </div>
                            <div className="text-lg font-semibold">
                                ${item.product.price * item.quantity}
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between items-center font-semibold text-lg mt-4">
                        <span>Total</span>
                        <span>${calculateSubtotal()}</span>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleConfirmOrder}
                        className="sm:px-6 px-2 py-2 sm:py-3 bg-[#01B5DA] text-white rounded-md hover:bg-[#1F2937]"
                    >
                        {loading ? (
                            <div className="flex items-center">
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 border-2 border-t-transparent border-white rounded-full"
                                    viewBox="0 0 24 24"
                                ></svg>
                                Processing...
                            </div>
                        ) : (
                            "Confirm Order"
                        )}
                    </button>
                </div>

                {showConfirmation && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div
                            className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicked inside the pop-up
                        >
                            <motion.div
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.5 }}
                                transition={{ duration: 0.5 }}
                                className="text-6xl mb-4"
                            >
                                <motion.span
                                    animate={{
                                        x: [0, 20, 0], // Emoji will move left and right
                                        y: [0, -20, 0], // Emoji will move up and down
                                    }}
                                    transition={{
                                        loop: Infinity,
                                        duration: 2,
                                        ease: "easeInOut",
                                    }}
                                    className="text-yellow-500"
                                >
                                    🛍️
                                </motion.span>
                            </motion.div>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order Confirmed!</h2>
                            <p className="text-gray-700 mb-4">
                                Thank you for your purchase, <strong>{billingInfo.username}</strong>!
                            </p>
                            <p className="text-gray-700">Your order will be delivered to:</p>
                            <p className="text-gray-700 font-semibold">{billingInfo.address}</p>

                            <motion.div
                                animate={{
                                    x: [0, -50, 20, 0], 
                                    rotate: [0, 45, 0], 
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 1.5,
                                }}
                                className="mt-4 text-4xl text-green-500"
                            >
                                🚚
                            </motion.div>

                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 1.5,
                                }}
                                className="mt-4 text-5xl text-red-500"
                            >
                                🎁
                            </motion.div>

                            <Link href="/">
                                <button
                                    onClick={handleCloseConfirmation}
                                    className="mt-6 px-6 py-3 bg-[#01B5DA] text-white rounded-md hover:bg-[#1F2937] block mx-auto"
                                >
                                    Close
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CheckoutPage;