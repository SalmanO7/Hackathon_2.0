import dynamic from 'next/dynamic'
import React from 'react'

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