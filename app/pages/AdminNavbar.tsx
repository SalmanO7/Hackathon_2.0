"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { CiUser } from "react-icons/ci";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Importing menu icons

const AdminNavbar = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-6 flex justify-between items-center bg-white shadow-md">
      {/* Logo */}
      <Link href="/" className="font-serif font-semibold text-lg">
        Ease Store
      </Link>

      {/* Hamburger Menu - Visible only on mobile */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4">
        <Link href={"/"} className="hover:underline">Home</Link>
        <Link href={"/admin"} className="hover:underline">Dashboard</Link>
        <Link href="/admin/add-product" className="hover:underline">
          Add Product
        </Link>
        <Link href={"/admin/all-products"} className="hover:underline">Stock</Link>
        <Link href="/admin/orders" className="hover:underline">
          Sales
        </Link>
      </div>

      {/* User Info */}
      <div className="hidden md:flex items-center gap-3">
        <SignedOut>
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white">
            <CiUser className="text-xl" />
          </button>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">{user?.username}</span>
            <UserButton
              appearance={{
                elements: { userButtonAvatarBox: "w-8 h-8 rounded-full" },
              }}
            />
          </div>
        </SignedIn>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link href={"/"} className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href={"/admin"} className="hover:underline" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link href="/admin/add-product" className="hover:underline" onClick={() => setIsOpen(false)}>Add Product</Link>
          <Link href={"/admin/all-products"} className="hover:underline" onClick={() => setIsOpen(false)}>Stock</Link>
          <Link href="/admin/orders" className="hover:underline" onClick={() => setIsOpen(false)}>Sales</Link>

          {/* User Section in Mobile Menu */}
          <SignedOut>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white">
              <CiUser className="text-2xl" />
            </button>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-2">
              <span className="font-medium">{user?.username}</span>
              <UserButton
                appearance={{
                  elements: { userButtonAvatarBox: "w-10 h-10 rounded-full" },
                }}
              />
            </div>
          </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
