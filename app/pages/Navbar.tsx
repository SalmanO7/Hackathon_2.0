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
        <div className="container mx-auto flex items-center justify-around px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-bold text-gray-900">
            <Link href="/">Bandage</Link>
          </h1>

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
              Contact{" "}
            </Link>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Pages
            </a>
          </div>

          <div className="flex items-center justify-end gap-4">
            <div className="flex justify-center text-blue-500 items-center">
              <CiUser className="hidden xl:block text-[16px] text-blue-500" />
              <h4>Login / Register</h4>
            </div>
            <a
              href="#"
              className="text-sm font-semibold  hover:text-gray-900 pr-2"
            ></a>
            <div className=" justify-center hidden xl:flex items-center gap-4 text-blue-500">
              <IoSearchOutline className="text-xl" />
              <IoCartOutline className="text-xl" />
              <FaRegHeart className="text-[16px]" />
            </div>
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
        )}
      </nav>
    </>
  );
};

export default Navbar;
