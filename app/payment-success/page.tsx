"use client"
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar"

const PaymentSuccess = ({ searchParams }: any) => {

    const amount = parseFloat(searchParams.amount || "100");

    return (
        <div className="text-center w-full">
            <Navbar />
            <h1 className="text:2xl sm:text:3xl md:text:4xl lg:text-5xl mt-16">Thank you for purchasing $ {amount}</h1>
            <Footer />
        </div>
    )
}

export default PaymentSuccess
