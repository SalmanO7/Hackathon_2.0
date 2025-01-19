import Image from "next/image";
import React from "react";
import CardImg1 from "@/public/assets/product-cover-5 (10).png";
import CardImg2 from "@/public/assets/product-cover-5 (11).png";
import CardImg3 from "@/public/assets/product-cover-5 (12).png";
import CardImg4 from "@/public/assets/product-cover-5 (13).png";
import CardImg5 from "@/public/assets/product-cover-5 (9).png";
import IconImg1 from "@/public/assets/col-md-2.png";
import IconImg2 from "@/public/assets/fa-brands-2.png";
import IconImg3 from "@/public/assets/fa-brands-3.png";
import IconImg4 from "@/public/assets/fa-brands-4.png";
import IconImg5 from "@/public/assets/fa-brands-5.png";
import IconImg6 from "@/public/assets/fa-brands-6.png";

const ProductCards = () => {
  return (
    <div className="bg-gray-50 h-[100%] mt-10 px-10 sm:px-15 md:px-[60px] lg:px-[50px] xl:px-[90px] 2xl:px-[120px]">
      <h2 className="uppercase py-10 text-xl font-semibold">
        BestSeller Products
      </h2>
      <div className="border my-5"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-x-5 gap-8">
        <div className="bg-white flex flex-col justify-center gap-2 items-start p-4">
          <Image src={CardImg1} alt="Cover img" />
          <div className="flex flex-col justify-start items-start pl-4 gap-2 py-2">
            <h2 className="font-semibold">Graphic</h2>
            <h4 className="text-gray-500">Engish Department</h4>
            <p className="text-gray-300">
              $16.48 <span className="text-green-800 font-semibold">$6.58</span>
            </p>
            <div className="flex justify-center items-start gap-1 ">
              <span className="bg-red-500 w-1 p-2 rounded-full"></span>
              <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
              <span className="bg-black w-1 p-2 rounded-full"></span>
              <span className="bg-green-500 w-1 p-2 rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="flex bg-white flex-col justify-center gap-2 items-start p-4">
          <Image src={CardImg3} alt="Cover img" />
          <div className="flex flex-col justify-start items-start pl-4 gap-2 py-2">
            <h2 className="font-semibold">Graphic</h2>
            <h4 className="text-gray-500">Engish Department</h4>
            <p className="text-gray-300">
              $16.48 <span className="text-green-800 font-semibold">$6.58</span>
            </p>
            <div className="flex justify-center items-start gap-1 ">
              <span className="bg-red-500 w-1 p-2 rounded-full"></span>
              <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
              <span className="bg-black w-1 p-2 rounded-full"></span>
              <span className="bg-green-500 w-1 p-2 rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white justify-center gap-2 items-start p-4">
          <Image src={CardImg5} alt="Cover img" />
          <div className="flex flex-col justify-start items-start pl-4 gap-2 py-2">
            <h2 className="font-semibold">Graphic</h2>
            <h4 className="text-gray-500">Engish Department</h4>
            <p className="text-gray-300">
              $16.48 <span className="text-green-800 font-semibold">$6.58</span>
            </p>
            <div className="flex justify-center items-start gap-1 ">
              <span className="bg-red-500 w-1 p-2 rounded-full"></span>
              <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
              <span className="bg-black w-1 p-2 rounded-full"></span>
              <span className="bg-green-500 w-1 p-2 rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white justify-center gap-2 items-start p-4">
          <Image src={CardImg4} alt="Cover img" />
          <div className="flex flex-col justify-start items-start pl-4 gap-2 py-2">
            <h2 className="font-semibold">Graphic</h2>
            <h4 className="text-gray-500">Engish Department</h4>
            <p className="text-gray-300">
              $16.48 <span className="text-green-800 font-semibold">$6.58</span>
            </p>
            <div className="flex justify-center items-start gap-1 ">
              <span className="bg-red-500 w-1 p-2 rounded-full"></span>
              <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
              <span className="bg-black w-1 p-2 rounded-full"></span>
              <span className="bg-green-500 w-1 p-2 rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white justify-center gap-2 items-start p-4">
          <Image src={CardImg3} alt="Cover img" />
          <div className="flex flex-col justify-start items-start pl-4 gap-2 py-2">
            <h2 className="font-semibold">Graphic</h2>
            <h4 className="text-gray-500">Engish Department</h4>
            <p className="text-gray-300">
              $16.48 <span className="text-green-800 font-semibold">$6.58</span>
            </p>
            <div className="flex justify-center items-start gap-1 ">
              <span className="bg-red-500 w-1 p-2 rounded-full"></span>
              <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
              <span className="bg-black w-1 p-2 rounded-full"></span>
              <span className="bg-green-500 w-1 p-2 rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white justify-center gap-2 items-start p-4">
          <Image src={CardImg2} alt="Cover img" />
          <div className="flex flex-col justify-start items-start pl-4 gap-2 py-2">
            <h2 className="font-semibold">Graphic</h2>
            <h4 className="text-gray-500">Engish Department</h4>
            <p className="text-gray-300">
              $16.48 <span className="text-green-800 font-semibold">$6.58</span>
            </p>
            <div className="flex justify-center items-start gap-1 ">
              <span className="bg-red-500 w-1 p-2 rounded-full"></span>
              <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
              <span className="bg-black w-1 p-2 rounded-full"></span>
              <span className="bg-green-500 w-1 p-2 rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white justify-center gap-2 items-start p-4">
          <Image src={CardImg5} alt="Cover img" />
          <div className="flex flex-col justify-start items-start pl-4 gap-2 py-2">
            <h2 className="font-semibold">Graphic</h2>
            <h4 className="text-gray-500">Engish Department</h4>
            <p className="text-gray-300">
              $16.48 <span className="text-green-800 font-semibold">$6.58</span>
            </p>
            <div className="flex justify-center items-start gap-1 ">
              <span className="bg-red-500 w-1 p-2 rounded-full"></span>
              <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
              <span className="bg-black w-1 p-2 rounded-full"></span>
              <span className="bg-green-500 w-1 p-2 rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white justify-center gap-2 items-start p-4">
          <Image src={CardImg4} alt="Cover img" />
          <div className="flex flex-col justify-start items-start pl-4 gap-2 py-2">
            <h2 className="font-semibold">Graphic</h2>
            <h4 className="text-gray-500">Engish Department</h4>
            <p className="text-gray-300">
              $16.48 <span className="text-green-800 font-semibold">$6.58</span>
            </p>
            <div className="flex justify-center items-start gap-1 ">
              <span className="bg-red-500 w-1 p-2 rounded-full"></span>
              <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
              <span className="bg-black w-1 p-2 rounded-full"></span>
              <span className="bg-green-500 w-1 p-2 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-y-48 gap-x-10 py-16 p-20 gap-10 ">
        <Image
          src={IconImg1}
          alt="Img"
          className="w-[2000px] h-[100px]"
        />
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

export default ProductCards;
