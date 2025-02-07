"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ For navigation after order placement
import Navbar from "../pages/Navbar";
import Link from "next/link";
import { useCart } from "@/context/Context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutPage = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const { subtotal } = useCart();
    const [userData, setUserData] = useState({ name: "", email: "", address: "" });
    const router = useRouter(); // ✅ For navigation

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedCart = localStorage.getItem("cartItems");
            if (savedCart) {
                setCartItems(JSON.parse(savedCart));
            }
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const orderData = {
            _type: "order",
            _key: crypto.randomUUID(),
            user: {
                name: userData.name,
                email: userData.email,
                address: userData.address,
            },
            products: cartItems.map(item => ({
                _type: "product",
                _key: crypto.randomUUID(),
                productId: item.product._id,
                title: item.product.title,
                quantity: item.quantity,
                price: item.product.price,
                imageUrl: item.product.imageUrl,
            })),
            totalAmount: subtotal,
            date: new Date().toISOString(),
        };

        try {
            const response = await fetch("/api/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ orderData }),
            });

            if (response.ok) {
                toast.success("Order Confirmed and Published in Sanity!");
                localStorage.removeItem("cartItems");
                setCartItems([]);
                router.push(`/payment?amount=${subtotal.toFixed(2)}`);
            } else {
                toast.error("Failed to place order.");
            }
        } catch (error) {
            toast.error("Something went wrong.");
        }
    };

    return (
        <>
            <Navbar />
            <ToastContainer />
            <nav className="md:px-9 xl:pl-16 text-sm flex justify-start gap-x-1 sm:px-10 text-gray-500 mb-6 px-10 py-6 md:py-8">
                <Link href="/">Home</Link> / <Link href="/cart">Cart</Link> /
                <span className="text-black font-semibold"> Checkout</span>
            </nav>
            <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>
                {cartItems.length === 0 ? (
                    <div className="flex justify-center items-center pt-40 pb-16">
                        <p>Your cart is empty. <Link href="/" className="bg-gray-100 py-2 px-3 rounded-2xl">Shop Now</Link></p>
                    </div>
                ) : (
                    <div className="bg-white p-6 shadow-md rounded-md">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        {cartItems.map((item) => (
                            <div key={item.product._id} className="flex justify-between border-b py-4">
                                <div className="flex items-start gap-4">
                                    <img src={item.product.imageUrl} alt={item.product.title} width={50} height={50} className="rounded" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.product.title}</h3>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                                <span className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="flex justify-between mt-6 text-lg font-semibold">
                            <span>Total:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-6">
                            <h2 className="text-xl font-semibold mb-4">User Details</h2>
                            <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
                            <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
                            <input type="text" name="address" placeholder="Address" value={userData.address} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
                            <button type="submit" className="w-full px-4 py-2 bg-[#01B5DA] text-white rounded-md hover:bg-[#1F2937]">
                                Confirm Order
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default CheckoutPage;
