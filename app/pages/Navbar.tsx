"use client";
import Header from "@/app/components/Header";
import Link from "next/link";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Brand Name */}
          <h1 className="text-lg font-bold text-gray-900">
            <Link href="/">Bandage</Link>
          </h1>

          {/* Menu Links for md and above */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-gray-900">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/detail" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>

          {/* Icons Section - Always Visible */}
          <div className="flex items-center gap-4 text-blue-500">
            <IoSearchOutline className="text-xl" />
            <Link href="/cart">
              <IoCartOutline className="text-xl" />
            </Link>
            <Link href="/wishlist">
              <FaRegHeart className="text-lg" />
            </Link>
            <Link href="/login">
              <CiUser className="text-xl" />
            </Link>
          </div>

          {/* Menu Icon for md and below */}
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-100">
            <div className="flex flex-col items-center py-4 gap-3">
              <Link
                href="/"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                About
              </Link>
              <Link
                href="/detail"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
