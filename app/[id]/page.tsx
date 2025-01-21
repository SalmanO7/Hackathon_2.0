"use client";
import { useCart } from "@/context/Context";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import Navbar from "../pages/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";


interface ICartType {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  tags: [];
  imageUrl: string;
}

const Page = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ICartType | null>(null); // Initialize with null
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const { addToCart, addToWishlist } = useCart();

  const handleBuyNow = () => {
    router.push(`/checkout?productId=${product}`);
  };


  useEffect(() => {
    if (!id) return; // Avoid fetching if `id` is not available
    const fetchProduct = async () => {
      try {
        const productData: ICartType =
          await client.fetch(`*[_type == "product" && _id == "${id}"]{
          _id,
          title,
          description,
          price,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags
        }[0]`);

        console.log("Fetched product data:", productData); // Log fetched data for debugging
        setProduct(productData);
      } catch (err) {
        setError("Failed to load product details. Please try again later.");
        console.error("Error fetching product:", err); // Log the error
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (product: ICartType) => {
    addToCart(product);
    toast.success(`${product.title} add in your cart 😀`, {
      position: "bottom-right", // Position to bottom-right
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleAddToWishlist = (product: ICartType) => {
    addToWishlist(product);
    toast.success(`${product.title} added in your wishlist ☺️`, {
      position: "bottom-right", // Position to bottom-right
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };


  const toggleImageModal = () => {
    setIsImageOpen(!isImageOpen);
  };


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
        <nav className="text-sm flex justify-start gap-x-1 sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[80px] text-gray-500 mb-6 px-10 md:pb-4">
          <Link href="/">Home</Link> /{" "}
          <span className="text-black font-semibold">Shop</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 sm:gap-y-44 gap-8">
          <div className="flex flex-col justify-center items-center sm:items-start pt-10">
            <div className="col-span-3 flex justify-center items-center sm:items-start px-5 sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[80px]">
              <div className="w-full flex items-center justify-center">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="pt-14 text-base md:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-yellow-500 mb-2 flex items-center">
              ★★★★☆{" "}
              <span className="text-sm text-gray-500 ml-2">(150 Reviews)</span>
            </p>
            <div>
              {product.discountPercentage > 0 ? (
                <p className=" text-green-800 font-semibold">
                  ${product.price}{" "}
                  <span className="text-gray-300">
                    {product.discountPercentage}%
                  </span>
                </p>
              ) : (
                <p className=" text-green-800 font-semibold">
                  ${product.price}
                </p>
              )}
              <div className="text-gray-500">
                Availability: <span className="text-blue-500">in stock</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              {product.description.split(" ").slice(0, 100).join(" ")}
              {product.description.split(" ").length > 100 ? "..." : ""}
            </p>
            <p className="flex justify-start items-center flex-wrap gap-3 uppercase">
              {product.tags.map((tag) => {
                return (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded-xl"
                  >
                    #{tag}
                  </span>
                );
              })}
            </p>

            <div className="border-b border-2 my-6"></div>

            <div className="mb-6">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-blue-500"></div>
                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-red-500"></div>
                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-blue-500"></div>
                <div className="w-8 h-8 rounded-full bg-black border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-blue-500"></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handleBuyNow}
                className="w-2/6 sm:w-3/6 md:w-auto xs:px-6 lg:px-8 py-3  bg-[#01B5DA] text-white rounded-md hover:bg-[#1F2937]">
                Buy Now
              </button>
              <button
                onClick={() => handleAddToWishlist(product)}
                className="w-10  px-3 py-3 border rounded-full bg-white hover:bg-gray-100"
              >
                <BiHeart />
              </button>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-10  px-3 py-3 border rounded-full bg-white hover:bg-gray-100"
              >
                <IoCartOutline />
              </button>
              <button
                onClick={toggleImageModal}
                className="w-10 md:w-auto px-3 py-3 border rounded-full bg-white hover:bg-gray-100">
                <IoEyeOutline />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isImageOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="relative bg-white p-2 rounded-md">
            <button
              onClick={toggleImageModal}
              className="absolute top-0 right-0 p-1 px-4 m-1 text-white bg-[#01B5DA] rounded-full"
            >
              X
            </button>
            <Image src={product.imageUrl} alt={product.title} width={400} height={400} />
          </div>
        </div>
      )}
    </div>

  );
};

export default Page;
