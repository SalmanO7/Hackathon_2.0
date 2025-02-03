"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Navbar from "../../pages/Navbar";
import { v4 as uuidv4 } from "uuid";
import AdminNavbar from "../../pages/AdminNavbar";

const AdminDashboard = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [productImage, setProductImage] = useState<File | null>(null);
  const [addingProduct, setAddingProduct] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await client.fetch(`
                    *[_type == "order"]{
                        _id,
                        user {
                            name,
                            email,
                            contact,
                            address
                        },
                        products[] {
                            productId,
                            title,
                            price,
                            quantity,
                            imageUrl
                        },
                        totalAmount,
                        date
                    }
                `);
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId: string) => {
    try {
      await client.delete(orderId);
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== orderId)
      );
      alert("Order deleted successfully");
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Failed to delete the order. Please try again.");
    }
  };

  const handleImageUpload = async (file: File) => {
    try {
      const asset = await client.assets.upload("image", file);
      return asset._id; 
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
      return null;
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !price || !productImage) {
      alert("Please fill in all required fields.");
      return;
    }

    setAddingProduct(true);

    try {
      const imageAssetId = await handleImageUpload(productImage);
      if (!imageAssetId) {
        setAddingProduct(false);
        return;
      }

      const newProduct = {
        _type: "product",
        title,
        description,
        price: Number(price),
        tags,
        dicountPercentage: discountPercentage ? Number(discountPercentage) : 0,
        isNew,
        productImage: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imageAssetId,
          },
        },
      };

      const response = await client.create(newProduct);
      console.log("Product added:", response);

      setTitle("");
      setDescription("");
      setPrice("");
      setTags([]);
      setDiscountPercentage("");
      setIsNew(false);
      setProductImage(null);

      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    } finally {
      setAddingProduct(false);
    }
  };

  return (
    <div>
      <AdminNavbar />

      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Add New Product
        </h2>
        <form
          onSubmit={handleAddProduct}
          className="bg-white shadow-md rounded-lg p-6 mb-8"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Product Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={tags.join(", ")}
              onChange={(e) =>
                setTags(e.target.value.split(",").map((tag) => tag.trim()))
              }
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Discount Percentage
            </label>
            <input
              type="number"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              New Product Badge
            </label>
            <input
              type="checkbox"
              checked={isNew}
              onChange={(e) => setIsNew(e.target.checked)}
              className="w-5 h-5"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Product Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setProductImage(e.target.files ? e.target.files[0] : null)
              }
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            disabled={addingProduct}
            className="bg-[#1F2937] text-white px-6 py-2 rounded-md hover:bg-[#01B5DA]"
          >
            {addingProduct ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
