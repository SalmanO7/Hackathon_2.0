import React from "react";
import Link from "next/link";

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between">
      <h1 className="text-xl font-bold">Admin</h1>
      <div className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/admin"}>Admin Home</Link>
        <Link href="/add-product" className="mr-4 hover:underline">
          Add Product
        </Link>
        <Link href={"/all-products"}>View Stock</Link>
        <Link href="/orders" className="hover:underline">
          Purchase Products
        </Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
