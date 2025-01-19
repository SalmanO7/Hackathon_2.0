import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import ArrowImg from "@/public/assets/Arrow 2.png";
import Image from "next/image";

const HeroPageSecond = () => {
  return (
    <div className="pt-20 px-5 sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[100px]">
      <div className="flex flex-col justify-center items-center">
        <p className="uppercase text-gray-500 font-bold">Visit Our Office</p>
        <h1 className="text-xl text-center font-bold text-gray-900 lg:text-2xl">
          We Help Small businesses with big ideas
        </h1>
      </div>
      <div className="pt-16  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-12 ">
        <div className="flex  flex-col justify-center items-center gap-1">
          <FiPhone className="text-6xl text-blue-500 py-1" />
          <p className="font-semibold text-sm text-gray-600">
            georgia.young@example.com
          </p>
          <p className="font-semibold text-sm text-gray-600">
            georgia.young@ple.com
          </p>
          <h2 className="text-base font-bold py-3">Get Support</h2>
          <button className="border border-blue-500 px-3 py-2 text-blue-500 font-semibold rounded-3xl">
            Submit Request
          </button>
        </div>
        <div className="bg-gray-800 py-24 text-white flex flex-col justify-center items-center gap-1">
          <FaLocationDot className="text-6xl text-blue-500 py-1" />
          <p className="font-semibold text-sm text-white">
            georgia.young@example.com
          </p>
          <p className="font-semibold text-sm text-white">
            georgia.young@ple.com
          </p>
          <h2 className="text-base font-bold py-2">Get Support</h2>
          <button className="border border-blue-500 px-3 py-2 text-blue-500 font-semibold rounded-3xl">
            Submit Request
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <IoIosMail className="text-6xl text-blue-500 py-1" />
          <p className="font-semibold text-sm text-gray-600">
            georgia.young@example.com
          </p>
          <p className="font-semibold text-sm text-gray-600">
            georgia.young@ple.com
          </p>
          <h2 className="text-base font-bold py-2">Get Support</h2>
          <button className="border border-blue-500 px-3 py-2 text-blue-500 font-semibold rounded-3xl">
            Submit Request
          </button>
        </div>
      </div>

      <div className="pt-28 flex flex-col justify-center items-center text-center gap-4">
        <Image src={ArrowImg} alt="img" className="w-1/5 md:w-2/12 lg:w-1/12 pr-10" />
        <p className="uppercase text-gray-900">We Can't wait to meet you</p>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
          Let's Talk
        </h1>
        <button className="bg-blue-400 text-white px-4 py-3 rounded-lg shadow-md">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default HeroPageSecond;
