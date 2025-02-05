"use client";
import convertToSubCurrency from "@/app/lib/ConvertToSubCurrency";
import CheckoutPage from "@/app/components/payment/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "@/context/Context";
import { useSearchParams } from "next/navigation";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const StripePayment = () => {
    const searchParams = useSearchParams();
    const price = parseFloat(searchParams.get("amount") || "10"); 
    const { subtotal } = useCart();

    const validAmount = subtotal && !isNaN(subtotal) && subtotal > 0 ? subtotal : price;
    return (
        <div>
            <h1 className="text-2xl font-bold text-center">
                Muhammad Salman has requested ${validAmount}
            </h1>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: "payment",
                    amount: convertToSubCurrency(validAmount),
                    currency: "usd",
                }}
            >
                <CheckoutPage amount={validAmount} />
            </Elements>
        </div>
    );
};

export default StripePayment;
