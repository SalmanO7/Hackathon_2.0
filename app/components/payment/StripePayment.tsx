"use client"
import convertToSubCurrency from '@/app/lib/ConvertToSubCurrency';
import CheckoutPage from '@/app/components/payment/CheckoutPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined')
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {
    const amount = 49.99
    return (
        <div>
            <h1 className='text-2xl font-bold text-center'>Muhammad Salman has requested $ {amount}</h1>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: 'payment',
                    amount: convertToSubCurrency(amount),
                    currency: 'usd'
                }}
            >
                <CheckoutPage amount={amount} />
            </Elements>

        </div>
    )
}

export default StripePayment
