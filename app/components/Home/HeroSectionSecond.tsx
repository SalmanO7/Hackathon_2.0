import Image from "next/image";
import React from "react";
import FilterImg1 from "@/public/assets/filter2.png";
import FilterImg2 from "@/public/assets/filter1.png";
import FilterImg4 from "@/public/assets/filter3.png";
import FilterImg3 from "@/public/assets/filter4.png";

const HeroSectionSecond = () => {
  return (
    <div className="bg-gray-100 max-w-full flex flex-col justify-center items-center p-10 px-5 sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[100px]">
      <h2 className="uppercase text-blue-950">edittor's pick</h2>
      <p className="text-sm text-gray-400 pb-10 text-center">
        Problems trying to resolve the conflict between{" "}
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-18 gap-y-6">
        <div>
          <Image src={FilterImg1} alt="Filter Img" />
          <div className="mt-[-60px]">
            <div className="bg-white opacity-90  px-6 py-2 text-xl font-semibold">
              <h2 className=" ">MEN</h2>
            </div>
          </div>
        </div>
        <div>
          <Image src={FilterImg2} alt="Filter Img" />
          <div className="bg-white mt-[-60px] opacity-90  px-6 py-2 text-xl font-semibold">
            <h2>WOMEN</h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 gap-y-4">
          <div>
            <Image src={FilterImg3} alt="Filter Img" />
            <div className="bg-white mt-[-60px] opacity-90 px-4 py-2 text-xl font-semibold">
              <h2>ACCESSORIES</h2>
            </div>
          </div>
          <div className="mt-4">
            <Image src={FilterImg4} alt="Filter Img" />
            <div className="bg-white mt-[-60px] opacity-90 px-4 py-2 text-xl font-semibold">
              <h2>KIDS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSecond;
