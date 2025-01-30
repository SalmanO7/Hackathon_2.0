"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SignedIn, SignedOut, useClerk, UserButton } from "@clerk/nextjs";
import { CiUser } from "react-icons/ci";
import { useUser } from "@clerk/nextjs";

export default function AboutNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openSignIn } = useClerk();
  const { user, isLoaded } = useUser(); 
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    if (!isLoaded) return;

    if (user?.publicMetadata?.role === "salman_admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [isLoaded, user]);



  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-lg font-bold text-gray-900">
          <Link href="/">Bandage</Link>
        </h1>

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
          <li>
            <Link href="/admin" className="text-gray-700 hover:text-gray-900">
              {isAdmin ? "Dashboard" : ""}
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
            Become a Member
          </button>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-8 h-8 rounded-full",
              },
            }}
          />
        </div>

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
              <Link
                href="/admin"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                {isAdmin ? "Dashboard" : ""}
              </Link>
            </li>
            <li>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                Become a Member
              </button>
            </li>
            <SignedOut>
              <button
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white"
                onClick={() => openSignIn()}
              >
                <CiUser className="text-xl" />
              </button>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8 rounded-full", // Customize avatar appearance
                  },
                }}
              />
            </SignedIn>
          </ul>
        </div>
      )}
    </nav>
  );
}
