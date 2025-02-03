"use client";
import Header from "@/app/components/Header";
import { useCart } from "@/context/Context";
import { client } from "@/sanity/lib/client";
import { SignedIn, SignedOut, useClerk, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoSearchOutline, IoClose } from "react-icons/io5";
import { useUser } from "@clerk/nextjs";

interface IProduct {
  _id: string;
  title: string;
  price: number;
  description: string;
  dicountPercentage: number;
  imageUrl: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<IProduct[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const { cartItems, wishlist } = useCart();
  const { openSignIn } = useClerk();
  const { user, isLoaded } = useUser(); // Get Clerk user info
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    if (!isLoaded) return;

    if (user?.publicMetadata?.role === "salman_admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [isLoaded, user]);

  const getData = async () => {
    const data = await client.fetch(
      `*[_type == "product"]{
        _id,
        title,
        price,
        dicountPercentage,
        description,
        "imageUrl": productImage.asset->url
      }`
    );
    setAllProducts(data);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const results = allProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results.slice(0, 3));
    } else {
      setFilteredResults([]);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredResults([]);
    setIsSearchActive(false);
  };

  const toggleSearchBar = () => {
    setIsSearchActive((prevState) => !prevState);
    if (isSearchActive) {
      clearSearch();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-bold text-gray-900">
            <Link href="/" className="font-serif">Ease Store</Link>
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
              Contact
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-gray-900">
              {isAdmin ? "Dashboard" : ""}
            </Link>
          </div>

          <div className="flex items-center gap-4 text-blue-500">
            <div className="">
              <IoSearchOutline
                className="text-xl cursor-pointer"
                onClick={toggleSearchBar}
              />
              {isSearchActive && (
                <div className="absolute top-20 right-16 xs:right-[22%] md:right-[17%] w-60 px-4 py-2 mt-8 rounded-md bg-white shadow-md border border-gray-300 z-20">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full p-1 focus:outline-none"
                  />

                  {searchQuery && (
                    <IoClose
                      className="absolute right-2 text-xl top-3 text-gray-500 cursor-pointer"
                      onClick={clearSearch}
                    />
                  )}
                </div>
              )}
            </div>

            <Link href="/cart">
              <div className="relative">
                <IoCartOutline className="text-xl" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full bg-[#1F2937] hover:bg-[#01B5DA]">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>

            <Link href="/wishlist">
              <div className="relative">
                <FaRegHeart className="text-lg" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full bg-[#1F2937] hover:bg-[#01B5DA]">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </Link>
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
                    userButtonAvatarBox: "w-8 h-8 rounded-full",
                  },
                }}
              />
            </SignedIn>
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
              <Link
                href="/admin"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                {isAdmin ? "Dashboard" : ""}
              </Link>
            </div>
          </div>
        )}
      </nav>


      {searchQuery && filteredResults.length > 0 && (
        <div className="absolute top-44 left-0 w-full bg-white shadow-md z-10">
          <div className="flex flex-col items-start pl-10 sm:pl-44 py-4 gap-3">
            {filteredResults.map((product) => (
              <Link
                key={product._id}
                href={`/${product._id}`}
                className="text-gray-700 hover:text-blue-600"
              >
                <div className="flex items-center">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-10 h-10 mr-2"
                  />
                  <span>{product.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
