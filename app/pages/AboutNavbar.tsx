"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function AboutNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Name */}
        <h1 className="text-lg font-bold text-gray-900">
          <Link href="/">Bandage</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {["Home", "Products", "Pricing", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login & Member Buttons for Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-blue-600 font-medium hover:underline transition">
            Login
          </button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition">
            Become a Member
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
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
        <div className="md:hidden bg-gray-100 border-t border-gray-200">
          <ul className="flex flex-col items-center gap-4 py-4">
            {["Home", "Products", "Pricing", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-700 font-medium hover:text-blue-600 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <button className="text-blue-600 font-medium hover:underline transition">
                Login
              </button>
            </li>
            <li>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition">
                Become a Member
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
