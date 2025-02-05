'use client';
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/app/pages/Navbar";
import dynamic from "next/dynamic";


export default function Home() {

    const DynamicComponentWithNoSSR = dynamic(
        () => import('../components/payment/StripePayment'),
        { ssr: false }
    )
    return (
        <div className="bg-[#F6F7F9]">
            <Navbar />
            <div className="pt-16">
                <DynamicComponentWithNoSSR />
            </div>
        </div>
    );
}
