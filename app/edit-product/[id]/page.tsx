"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { useParams, useRouter } from "next/navigation";

const EditProduct = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [discountPercentage, setDiscountPercentage] = useState("0");
  const [isNew, setIsNew] = useState(false);
  const [productImage, setProductImage] = useState<File | null>(null);
  const [productImageUrl, setProductImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const productData = await client.fetch(
          `*[_type == "product" && _id == $id][0]{
            _id,
            title,
            description,
            price,
            tags,
            discountPercentage,
            isNew,
            "imageUrl": productImage.asset->url
          }`,
          { id }
        );

        if (productData) {
          setProduct(productData);
          setTitle(productData.title);
          setDescription(productData.description);
          setPrice(String(productData.price));
          setTags(productData.tags || []);
          setDiscountPercentage(String(productData.discountPercentage || "0"));
          setIsNew(productData.isNew || false);
          setProductImageUrl(productData.imageUrl || null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product || !id) {
      alert("Product data is missing.");
      return;
    }

    try {
      let imageAssetId = productImage
        ? await handleImageUpload(productImage)
        : null;

      await client
        .patch(id)
        .set({
          title,
          description,
          price: Number(price),
          tags,
          discountPercentage: Number(discountPercentage),
          isNew,
          ...(imageAssetId && {
            productImage: {
              _type: "image",
              asset: { _type: "reference", _ref: imageAssetId },
            },
          }),
        })
        .commit();

      setSuccessMessage("Product updated successfully!");
      router.push("/all-products");
    } catch (error) {
      alert("Failed to update product.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProductImage(file);
      setProductImageUrl(URL.createObjectURL(file));
    }
  };

  if (loading) return <p className="text-center text-lg">Loading product...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Product</h2>
      {successMessage && (
        <p className="text-green-600 font-medium">{successMessage}</p>
      )}

      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
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
          <label className="block text-gray-700 font-medium mb-2">Price</label>
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
          {productImageUrl && (
            <img
              src={productImageUrl}
              alt="Product"
              className="w-40 h-40 object-cover mb-2 rounded-md border"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
