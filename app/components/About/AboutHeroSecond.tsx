import Image from "next/image";
import React from "react";
import VideoImg from "@/public/assets/Video card (1).png";
import CardImg1 from "@/public/assets/card-item (1).png";
import CardImg2 from "@/public/assets/card-item (2).png";
import CardImg3 from "@/public/assets/col-md-4 (7).png";

const AboutHeroSecond = () => {
  return (
    <div className="px-10 sm:px-15 md:px-[60px] lg:px-[50px] xl:px-[90px] 2xl:px-[120px]">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-y-12 gap-4 py-20">
        <div className="flex flex-col justify-center items-start">
          <p className="text-red-500">Problems trying</p>
          <h2 className="text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam
            sit modi minima! Veritatis.
          </h2>
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, iure
          dolorum excepturi temporibus voluptates deleniti illo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">15K</h1>
          <p className="text-xs md:text-sm">Happy Customers</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">150K</h1>
          <p className="text-xs md:text-sm">Monthly Visitors</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">15</h1>
          <p className="text-xs md:text-sm">Counteries Worldwide</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">100+</h1>
          <p className="text-xs md:text-sm">Top Partners</p>
        </div>
      </div>

      <div>
        <Image src={VideoImg} alt="img" className="py-36" />
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-2 pb-20">
          <h2 className="font-semibold text-xl xl:text-2xl">Meet Our Team</h2>
          <p className="w-3/5 text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-20 p-5">
          <Image src={CardImg1} alt="img" />
          <Image src={CardImg2} alt="img" />
          <Image src={CardImg3} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSecond;
