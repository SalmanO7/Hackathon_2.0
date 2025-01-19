import Image from "next/image";
import React from "react";
import AboutHeroImg from "@/public/assets/aboutimg.png"

const AboutHeroFour = () => {
  return (
    <div>
      <section className="pt-24 flex justify-center items-center bg-white py-12 px-10 sm:px-15 md:px-[60px] lg:px-[50px] xl:px-[90px] 2xl:px-[120px]">
        <div className="bg-blue-600 flex flex-col md:flex-row justify-between items-center gap-y-10 gap-8">
          <div className="text-white flex flex-col justify-center pl-16 py-6 md:py-0  items-start ">
            <h2 className="text-white font-semibold uppercase">Work WIth US</h2>
            <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold mt-2">
              ABOUT US
            </h1>
            <p className="text-gray-50 mt-4">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="mt-6 border border-white text-white px-6 py-2 rounded-md">
              Button
            </button>
          </div>

          <div className="relative w-full  md:w-2/5">
            <Image
              src={AboutHeroImg} // Replace with your image URL
              alt="Shopping Woman"
              className="relative z-10"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHeroFour;
