"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function AboutNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <h1 className="text-lg font-bold">Bandage</h1>

        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-blue-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="/product">Products</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="/price">Pricing</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <button className="text-blue-600">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Become a member
          </button>
        </div>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex justify-center items-center gap-5 px-10 py-2 bg-gray-100">
          <Link
            href="/"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/product"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Product
          </Link>
          <Link
            href="/price"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
