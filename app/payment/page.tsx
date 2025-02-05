'use client';
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/app/pages/Navbar";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";




interface FormData {
    name: string;
    phoneNumber: string;
    address: string;
    city: string;
}

export default function Home() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phoneNumber: "",
        address: "",
        city: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Display a success notification
        toast.success("Rental booking successful!");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof FormData) => {
        setFormData({ ...formData, [field]: e.target.value });
    };
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
