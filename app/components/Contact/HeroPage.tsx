import Image from "next/image";
import React from "react";
import AboutHeroImg from "@/public/assets/heroimg1.png";
import IconImg from "@/public/assets/icons.png";

const HeroPage = () => {
  return (
    <div>
      <div className="pt-10 md:pt-5 flex flex-col md:flex-row justify-around items-center gap-y-10 gap-8 px-5 sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[100px]">
        <div className="flex flex-col justify-self-center items-start gap-3">
          <h2 className="text-gray-700 font-semibold uppercase">Contact us</h2>
          <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold mt-2">
            Get in touch today!
          </h1>
          <p className="text-gray-600 mt-4">
            We know how large objects will act, but things on a small scale
          </p>
          <h2 className="xl:text-xl font-bold">Phone ; +451 215 215 </h2>
          <h2 className="xl:text-xl font-bold">Fax : +451 215 215</h2>
          <Image src={IconImg} className="w-2/4" alt="Icon Img" />
          <button className="mt-6 bg-blue-600 text-white px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-md">
            Get Quote Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-4/5 sm:w-3/5 md:w-2/5 ">
          <Image
            src={AboutHeroImg}
            alt="Shopping Woman"
            className="relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
