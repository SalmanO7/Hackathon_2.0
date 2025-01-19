import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/shop-hero-1-product-slide-1.jpg')",
      }}
    >
      <div className="text-white h-screen flex flex-col justify-center md:pb-10  xl:pb-14 2xl:pb-28 items-start md:items-start  gap-6 px-6 sm:px-10 md:px-20 xl:px-32">
        <p className="uppercase text-sm">Summer 2020</p>
        <h2 className="text-base sm:text-2xl md:text-4xl font-bold">
          New Collection
        </h2>
        <p className="text-sm sm:text-base xl:text-lg">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
