// "use client";
// import { useEffect, useState } from "react";
// import convertToSubCurrency from "@/app/lib/ConvertToSubCurrency";
// import CheckoutPage from "@/app/components/payment/CheckoutPage";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { useCart } from "@/context/Context"; // Import Cart Context
// import { useSearchParams } from "next/navigation";

// // Validate the Stripe publishable key
// const STRIPE_PUBLIC_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
// if (!STRIPE_PUBLIC_KEY) {
//     throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
// }

// const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

// const StripePayment = () => {
//     const { cartItems, subtotal, setCartItems } = useCart(); // Get cart data from context
//     const [loading, setLoading] = useState(true);
//     const [billingInfo, setBillingInfo] = useState({
//         username: "",
//         email: "",
//         phone: "",
//         address: "",
//     });
//     const searchParams = useSearchParams();
//     const subtotalFromParams = parseFloat(searchParams.get("subtotal") || "0");

//     useEffect(() => {
//         if (!cartItems || cartItems.length === 0) {
//             const savedCart = localStorage.getItem("cartItems");
//             setCartItems(savedCart ? JSON.parse(savedCart) : []);
//         }
//     }, [cartItems, setCartItems]);

//     const handlePaymentSuccess = async (paymentIntent: any) => {
//         try {
//             const orderData = {
//                 items: cartItems,
//                 totalAmount: subtotal,
//                 paymentIntent: paymentIntent.id,
//                 createdAt: new Date(),
//                 user: billingInfo, // Pass billing information here
//             };

//             const response = await fetch("/api/save-purchase", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(orderData),
//             });

//             const data = await response.json();
//             if (data.success) {
//                 console.log("✅ Order saved in Sanity:", data);
//             } else {
//                 console.error("❌ Error saving order:", data.message);
//             }
//         } catch (error) {
//             console.error("❌ Payment processing error:", error);
//         }
//     };

//     if (loading || subtotal <= 0) {
//         return <h1 className="text-2xl font-bold pl-8 py-8">Loading...</h1>;
//     }

//     return (
//         <div>
//             <h1 className="text-2xl font-bold pl-8 py-8">
//                 Total Payment: ${subtotal.toFixed(2)}
//             </h1>

//             <Elements
//                 stripe={stripePromise}
//                 options={{
//                     mode: "payment",
//                     amount: convertToSubCurrency(subtotal),
//                     currency: "usd",
//                 }}
//             >
//                 <CheckoutPage 
//                     amount={subtotal} 
//                     billingInfo={billingInfo} 
//                     setBillingInfo={setBillingInfo} 
//                     onPaymentSuccess={handlePaymentSuccess} 
//                 />
//             </Elements>
//         </div>
//     );
// };

// export default StripePayment;
