// "use client";

// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Navbar from "../pages/Navbar";

// const CheckoutPage = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const productId = searchParams.get("productId");

//   if (!productId) {
//     return (
//       <div className="p-6 max-w-md mx-auto">
//         <h1 className="text-2xl font-bold mb-4 text-red-500">Error: No product selected</h1>
//         <p>Please select a product to proceed to checkout.</p>
//       </div>
//     );
//   }

//   // Initialize form data state
//   const [formData, setFormData] = useState<{
//     name: string;
//     email: string;
//     phone: string;
//     address: string;
//   }>({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const userId = Math.random().toString(36).substring(2, 15);
//     const purchaseData = {
//       userId,
//       productId,
//       ...formData,
//     };

//     try {
//       const response = await fetch("/api/savePurchase", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(purchaseData),
//       });

//       if (response.ok) {
//         alert("Purchase tracked successfully!");
//         router.push("/"); 
//       } else {
//         alert(`Failed to track purchase. Status: ${response.status}`);
//       }
//     } catch (error) {
//       console.error("Error tracking purchase:", error);
//       alert("There was an error with your purchase. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="p-6 max-w-md mx-auto">
//         <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block font-medium">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block font-medium">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//             <label htmlFor="phone" className="block font-medium">Phone Number:</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div>
//             <label htmlFor="address" className="block font-medium">Address:</label>
//             <textarea
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//               className="w-full p-2 border rounded"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//           >
//             Confirm Purchase
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CheckoutPage;
