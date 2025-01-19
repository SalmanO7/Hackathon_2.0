import Image from "next/image";
import React from "react";
import { FiToggleLeft } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import IconImg1 from "@/public/assets/col-md-2.png";
import IconImg2 from "@/public/assets/fa-brands-2.png";
import IconImg3 from "@/public/assets/fa-brands-3.png";
import IconImg4 from "@/public/assets/fa-brands-4.png";
import IconImg5 from "@/public/assets/fa-brands-5.png";
import IconImg6 from "@/public/assets/fa-brands-6.png";

const PriceHome = () => {
  return (
    <div className="bg-gray-100 px-5 sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[100px]">
      <div className="flex pt-8 flex-col justify-center items-center gap-2  ">
        <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl">Pricing</h2>
        <h4 className="uppercase text-xs md:text-sm w-3/4 md:w-2/4 text-gray-500 font-semibold text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </h4>

        <nav className="text-sm font-semibold mb-6 px-10 md:pb-8">
          Home / <span className="text-gray-500">Team</span>
        </nav>
      </div>
      <div className="flex justify-center items-center gap-5">
        <h2 className="text-xl font-semibold">Monthly</h2>
        <FiToggleLeft className="text-4xl text-blue-500 border-blue-500" />
        <h2 className="text-xl font-semibold">Yearly</h2>
        <div className="border border-blue-400 bg-blue-300 rounded-2xl">
          <h2 className="text-blue-800 py-2 px-4 text-sm font-bold">
            Save 25%
          </h2>
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] gap-y-12">
          <div className="border flex flex-col justify-center items-center gap-2 border-blue-500 rounded-lg shadow-lg bg-white p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Premium</h3>
            <p className="text-gray-600">Organize across all apps by hand</p>
            <h4 className="text-3xl text-blue-600 font-bold mb-4 flex justify-start items-start">
              19.99
              <span className="text-lg flex flex-col justify-center items-start">
                <h2>$</h2>
                <h4>Per Month</h4>
              </span>
            </h4>
            <ul className="flex flex-col justify-center items-start gap-3">
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-green-500 text-white  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4 className="text-sm md:text-base">
                  Unlimited product updates
                </h4>
              </li>
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-green-500 text-white  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4 className="text-sm md:text-base">
                  Unlimited product updates
                </h4>
              </li>
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-green-500 text-white  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4 className="text-sm md:text-base">
                  Unlimited product updates
                </h4>
              </li>
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-gray-600-500 text-green  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4 className="text-sm md:text-base">1GB Cloud storage</h4>
              </li>
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-gray-600-500 text-green  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4 className="text-sm md:text-base">
                  Email & community support
                </h4>
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 m-5">
              Try for free
            </button>
          </div>

          {/* Standard Plan */}
          <div className="border bg-gray-800 text-white flex flex-col justify-center items-center gap-2 border-blue-500 rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Premium</h3>
            <p className="text-white">Organize across all apps by hand</p>
            <h4 className="text-3xl text-blue-600 font-bold mb-4 flex justify-start items-start">
              19.99
              <span className="text-lg flex flex-col justify-center items-start">
                <h2>$</h2>
                <h4>Per Month</h4>
              </span>
            </h4>
            <ul className="flex flex-col justify-center items-start gap-3">
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-green-500 text-white  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4 className="text-white text-sm md:text-base">
                  Unlimited product updates
                </h4>
              </li>
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-green-500 text-white  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4 className="text-white text-sm md:text-base">
                  Unlimited product updates
                </h4>
              </li>
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-green-500 text-white  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4 className="text-white text-sm md:text-base">
                  Unlimited product updates
                </h4>
              </li>
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-gray-600-500 text-green  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4 className="text-white text-sm md:text-base">
                  1GB Cloud storage
                </h4>
              </li>
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-gray-600-500 text-green  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4 className="text-white text-sm md:text-base">
                  Email & community support
                </h4>
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 m-5">
              Try for free
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border flex flex-col justify-center items-center gap-2 border-blue-500 rounded-lg shadow-lg bg-white p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Premium</h3>
            <p className="text-gray-600">Organize across all apps by hand</p>
            <h4 className="text-3xl text-blue-600 font-bold mb-4 flex justify-start items-start">
              19.99
              <span className="text-lg flex flex-col justify-center items-start">
                <h2>$</h2>
                <h4>Per Month</h4>
              </span>
            </h4>
            <ul className="flex flex-col justify-center items-start gap-3">
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-green-500 text-white  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4>Unlimited product updates</h4>
              </li>
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-green-500 text-white  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4>Unlimited product updates</h4>
              </li>
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-green-500 text-white  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4>Unlimited product updates</h4>
              </li>
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-gray-600-500 text-green  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4>1GB Cloud storage</h4>
              </li>
              <li className="text-gray-700 flex justify-center items-center gap-3">
                <div className="flex justify-center items-center border p-1 bg-gray-600-500 text-green  rounded-full">
                  <TiTick className="text-xl" />
                </div>
                <h4>Email & community support</h4>
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 m-5">
              Try for free
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-center text-xl text-gray-500 pt-28">
        Trusted By Over 4000 Big Companies
      </h2>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-y-48 gap-x-10 py-16 p-20 gap-10 ">
        <Image src={IconImg1} alt="Img" className="w-[2000px] md:h-[100px]" />
        <Image
          src={IconImg2}
          alt="Img"
          className="w-[150px] md:w-[170px] xl:w-[200px]"
        />
        <Image
          src={IconImg3}
          alt="Img"
          className="w-[150px] md:w-[170px] xl:w-[200px]"
        />
        <Image
          src={IconImg4}
          alt="Img"
          className="w-[150px] md:w-[170px] xl:w-[200px]"
        />
        <Image
          src={IconImg5}
          alt="Img"
          className="w-[150px] md:w-[170px] xl:w-[200px]"
        />
        <Image
          src={IconImg6}
          className="w-[150px] md:w-[170px] xl:w-[200px]"
          alt="Img"
        />
      </div>
    </div>
  );
};

export default PriceHome;
