"use client";
import { useCart } from "@/context/Context";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../pages/Navbar";

const CheckoutPage = () => {
    const { cartItems } = useCart();
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

    const handleConfirmOrder = () => {
        if (!billingInfo.username || !billingInfo.email || !billingInfo.phone || !billingInfo.address) {
            alert("Please fill in all billing information!");
            return;
        }

        setShowConfirmation(true);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <>
            <Navbar />
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
                                src={item.product.imageUrl} // Assuming the product has an `imageUrl` property
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

                {/* Payment Button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleConfirmOrder}
                        className="px-6 py-3 bg-[#01B5DA] text-white rounded-md hover:bg-[#1F2937]"
                    >
                        Confirm Order
                    </button>
                </div>

                {showConfirmation && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn"
                        onClick={handleCloseConfirmation} // Close the confirmation pop-up when clicked outside
                    >
                        <div
                            className="bg-white p-6 rounded-md shadow-lg transform transition-transform scale-100 animate-bounceIn"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicked inside the pop-up
                        >
                            <h2 className="text-lg font-semibold mb-4 text-center">Order Confirmed!</h2>
                            <p className="text-gray-700 text-center mb-4">
                                Thank you for your purchase, {billingInfo.username}!
                            </p>
                            <p className="text-gray-700 text-center">Your order will be delivered to:</p>
                            <p className="text-gray-700 text-center font-semibold">{billingInfo.address}</p>
                            <Link href="/">
                                <button
                                    onClick={handleCloseConfirmation}
                                    className="mt-6 px-6 py-2 bg-[#01B5DA] text-white rounded-md hover:bg-[#1F2937] block mx-auto"
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
