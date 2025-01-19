import Image from "next/image";
import React from "react";
import HeroSectionFifthImg from "@/public/assets/none.png";

const HeroSectionFifth = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="w-full flex flex-col-reverse sm:flex-row justify-center items-center gap-y-10 md:gap-10">
        <Image
          src={HeroSectionFifthImg}
          className="sm:ml-9 md:ml-16 lg:ml-28 xl:ml-40 w-3/4 sm:w-1/4 "
          alt="Hero Img"
        />
        <div className="flex flex-col items-center md:items-start justify-center mt-16 gap-6">
          <p className="uppercase text-gray-400">summer 2020</p>
          <h2 className="text-gray-900 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
           Part of the Neural Universe
          </h2>
          <p className="text-gray-600 text-[11px] w-4/5 md:text-sm">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <button className="uppercase text-sm border border-green-500 bg-green-500 text-white rounded-md py-2 px-4">
              Buy Now
            </button>
            <button className="uppercase text-sm border border-green-500  text-green-500 rounded-md py-2 px-4">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionFifth;
