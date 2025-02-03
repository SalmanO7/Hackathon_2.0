"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/app/pages/AdminNavbar";
import Image from "next/image";

const AllProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`*[_type == "product"]{
          _id,
          title,
          description,
          price,
          productImage {
            asset -> {
              url
            }
          }
        }`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId: string) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await client.delete(productId);
      setProducts((prevProducts) =>
        prevProducts.filter((p) => p._id !== productId)
      );
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete the product.");
    }
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div>
      <AdminNavbar />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">All Products</h2>

        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="p-4 border rounded-lg shadow-md bg-white"
              >
                <Image
                  width={300}
                  height={300}
                  src={product.productImage?.asset?.url}
                  alt={product.title}
                  className="h-40 w-full object-cover rounded-md"
                />
                <h4 className="font-semibold mt-2">{product.title}</h4>
                <p className="text-gray-600">
                  {product.description.slice(0, 200)}
                </p>
                <p className="font-bold text-lg">${product.price}</p>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => router.push(`/edit-product/${product._id}`)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
