"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { GoFileSymlinkFile } from "react-icons/go";

const AdminHome = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await client.fetch(
          `*[_type == "product"] | order(_createdAt desc)[0..6]{
            _id, title, price, "imageUrl": productImage.asset->url
          }`
        );

        const ordersData = await client.fetch(
          `*[_type == "order"] | order(date desc)[0..3]{
            _id,
            user { name, email, contact, address },
            products[] { title, price, quantity, "imageUrl": imageUrl },
            totalAmount,
            date
          }`
        );

        setProducts(productsData);
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen pb-28">
      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Admin Dashboard
        </h2>

        {loading ? (
          <p className="text-center text-lg text-gray-600">Loading data...</p>
        ) : (
          <>
            <div className="my-8 mb-20">
              <h3 className="text-2xl font-semibold mb-4">Latest Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                <Link href={"/admin/add-product"} className="flex pt-12 gap-7 items-center flex-col  border p-4 rounded-lg shadow-lg bg-white">
                  <h1 className="font-medium text-xl">Add Product</h1>
                  <GoFileSymlinkFile className="text-6xl text-gray-600" />
                </Link>
                {products.map((product: any) => (
                  <div
                    key={product._id}
                    className="border p-4 rounded-lg shadow-lg bg-white"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h4 className="text-lg font-semibold mt-2">
                      {product.title}
                    </h4>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                ))}
              </div>

              <Link
                href={"/admin/all-products"}
                className="bg-[#01B5DA] text-white w-full rounded-md font-semibold hover:bg-gray-800 transition-all shadow-md px-5 py-2 mt-6"
              >
                View More
              </Link>
            </div>

            <h3 className="text-2xl font-semibold mb-4 ">Latest Orders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
              {orders.length > 0 ? (
                orders.map((order: any, index) => (
                  <div
                    key={index}
                    className="border-b bg-white rounded-lg p-4 mb-4 shadow-lg"
                  >
                    <h4 className="text-lg font-semibold">
                      Order by {order.user?.name || "Unknown"}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Email: {order.user?.email}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Contact: {order.user?.contact}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Address: {order.user?.address}
                    </p>
                    <ul className="mt-2 space-y-3">
                      {order.products.map((product: any, index: any) => (
                        <li
                          key={index}
                          className="flex items-center justify-between border p-3 rounded-md bg-gray-50"
                        >
                          <div className="flex items-center">
                            <img
                              src={product.imageUrl}
                              alt={product.title}
                              className="w-12 h-12 object-cover rounded-md mr-4"
                            />
                            <span>{product.title}</span>
                          </div>
                          <span className="text-gray-600">
                            ${product.price} x {product.quantity}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-lg font-semibold text-gray-800 mt-2">
                      Total: ${order.totalAmount}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(order.date).toLocaleString()}
                    </p>
                  </div>
                ))
              ) : (
                <p>No recent orders.</p>
              )}
            </div>
            <Link
              href={"/admin/orders"}
              className="text-center bg-[#01B5DA] text-white w-full rounded-md font-semibold hover:bg-gray-800 transition-all shadow-md px-5 py-2 "
            >
              View More
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminHome;
