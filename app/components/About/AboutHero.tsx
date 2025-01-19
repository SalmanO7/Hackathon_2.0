import React from "react";
import Image from "next/image";
import AboutHeroImg from "@/public/assets/none (3).png";

export default function AboutHero() {
  return (
    <section className="flex justify-center items-center bg-white py-12 px-10 sm:px-15 md:px-[60px] lg:px-[50px] xl:px-[90px] 2xl:px-[120px]">
      <div className="flex flex-col md:flex-row justify-around items-center gap-y-10 gap-8">
        <div className="flex flex-col justify-self-center items-start gap-3">
          <h2 className="text-gray-700 font-semibold">ABOUT COMPANY</h2>
          <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold mt-2">
            ABOUT US
          </h1>
          <p className="text-gray-600 mt-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md">
            Get Quote Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-4/5 sm:w-3/5 md:w-2/5">
          <div className="absolute -top-8 -left-8 bg-pink-100 w-40 h-40 rounded-full"></div>
          <Image
            src={AboutHeroImg} // Replace with your image URL
            alt="Shopping Woman"
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
