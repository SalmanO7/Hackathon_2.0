"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Navbar from "../pages/Navbar";


const AdminDashboard = () => {
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await client.fetch(`
          *[_type == "order"]{
            _id,
            user {
              name,
              email,
              contact,
              address
            },
            products[] {
              productId,
              title,
              price,
              quantity,
              imageUrl
            },
            totalAmount,
            date
          }
        `);
                setOrders(data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    const handleDelete = async (orderId: string) => {
        try {
            const res = await client.delete(orderId);
            console.log("Order deleted:", res);

            setOrders((prevOrders) =>
                prevOrders.filter((order) => order._id !== orderId)
            );

            alert("Order deleted successfully");
        } catch (error) {
            console.error("Error deleting order:", error);
            alert("Failed to delete the order. Please try again.");
        }
    };

    return (
        <div>
            <Navbar />
            {orders && orders.length > 0 ? (
                orders
                    .slice()
                    .sort(
                        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
                    )
                    .map((order: any) => (
                        <div
                            key={order._id}
                            className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-3xl mx-auto mt-8"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    Order by {order.user?.name || "Unknown User"}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {new Date(order.date).toLocaleString()}
                                </p>
                                <button
                                    onClick={() => handleDelete(order._id)}
                                    className="bg-[#1F2937] text-white px-4 py-2 rounded-md hover:bg-[#01B5DA]"
                                >
                                    Delete
                                </button>
                            </div>

                            <div className="mb-4">
                                <p className="text-gray-700">
                                    Email:{" "}
                                    <span className="font-medium">{order.user?.email}</span>
                                </p>
                                <p className="text-gray-700">
                                    Contact:{" "}
                                    <span className="font-medium">{order.user?.contact}</span>
                                </p>
                                <p className="text-gray-700">
                                    Address:{" "}
                                    <span className="font-medium">{order.user?.address}</span>
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Products
                                </h3>
                                <ul className="space-y-4">
                                    {(order.products || []).map((product: any, index: any) => (
                                        <li
                                            key={index}
                                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm"
                                        >
                                            <div className="flex items-center">
                                                <img
                                                    src={product.imageUrl}
                                                    alt={product.title}
                                                    className="w-16 h-16 object-cover rounded-md mr-4"
                                                />
                                                <p className="text-gray-700 font-medium">
                                                    {product.title}
                                                </p>
                                            </div>
                                            <p className="text-gray-600">
                                                ${product.price} x{product.quantity}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Total Amount */}
                            <div className="flex items-center justify-between mt-4 border-t pt-4">
                                <p className="text-lg font-semibold text-gray-800">
                                    Total Amount
                                </p>
                                <p className="text-xl text-green-600">${order.totalAmount}</p>
                            </div>
                        </div>
                    ))
            ) : (
                <div className="text-center text-xl text-gray-500">
                    <p>No orders available</p>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
