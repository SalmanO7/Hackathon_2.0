"use client"
import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { CiUser } from "react-icons/ci";

const AdminNavbar = () => {
  const { user } = useUser();
  return (
    <nav className="py-4 px-6 flex justify-between bg-white shadow-md">
      <Link href="/" className="font-serif font-semibold">Ease Store</Link>
      <div className="flex gap-4">
        <Link href={"/"} className="hover:underline">Home</Link>
        <Link href={"/admin"} className="hover:underline">Admin Home</Link>
        <Link href="/admin/add-product" className="mr-4 hover:underline">
          Add Product
        </Link>
        <Link href={"/admin/all-products"} className="hover:underline">View Stock</Link>
        <Link href="/admin/orders" className="hover:underline">
          Purchase Products
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <SignedOut>
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white">
            <CiUser className="text-xl" />
          </button>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-2">
            <div className="text-sm">
              <span className="font-medium block">{user?.username}</span>
              {/* <span className="text-gray-500 text-xs block">{user?.}</span> */}
            </div>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8 rounded-full",
                },
              }}
            />
          </div>
        </SignedIn>
      </div>

    </nav>
  );
};

export default AdminNavbar;
