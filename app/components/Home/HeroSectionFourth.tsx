import Image from "next/image";
import React from "react";
import HeroImg from "@/public/assets/shop-hero-2-png-picture-1 (1).png";

const HeroSectionFourth = () => {
  return (
    <div className="w-full bg-[#23856D] text-white pt-12 mt-20">
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-10">
        <div className="flex flex-col items-center md:items-start justify-center gap-6">
          <p className="uppercase">summer 2020</p>
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Vita Classic Product
          </h2>
          <p className="text-[11px] md:text-sm px-5 md:px-0 md:pr-20">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <p className="text-xl font-semibold">$16.58</p>
            <button className="uppercase border border-green-500 bg-green-500 rounded-md py-1 px-2 md:py-2 md:px-4">Add To Cart</button>
          </div>
        </div>

        <Image src={HeroImg} className="w-3/4 mt-7 sm:mt-0 sm:w-1/4" alt="IMG" />
      </div>
    </div>
  );
};

export default HeroSectionFourth;
