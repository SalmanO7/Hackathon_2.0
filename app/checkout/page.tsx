"use client"
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/payment/StripePayment'),
    { ssr: true }
)

const CheckoutRoute = () => {
    return (
        <>
            <DynamicComponentWithNoSSR />
        </>
    )
}

export default CheckoutRoute