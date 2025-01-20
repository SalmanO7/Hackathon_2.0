"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function AboutNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Name */}
        <h1 className="text-lg font-bold text-gray-900">
          <Link href="/">Bandage</Link>
        </h1>


        {/* Menu Links for md and above */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/price"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 font-medium hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Login and Member Button for md and above */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-blue-600 font-medium hover:underline">
            Login
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
            Become a Member
          </button>
        </div>

        {/* Hamburger Menu Icon for small devices */}
        <button
          className="block md:hidden text-gray-600"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="block md:hidden bg-gray-100 px-6 py-4">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link
                href="/"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/price"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
            <li>
              <button className="text-blue-600 font-medium hover:underline">
                Login
              </button>
            </li>
            <li>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                Become a Member
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
