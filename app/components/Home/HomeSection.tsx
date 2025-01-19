import Image from "next/image";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import CardImg1 from "@/public/assets/col-md-4 (2).png";
import CardImg2 from "@/public/assets/card-item.png";
import CardImg3 from "@/public/assets/col-md-4 (3).png";
import CardImg4 from "@/public/assets/col-md-4.png";
import { TfiMenu } from "react-icons/tfi";
import { CiBoxList } from "react-icons/ci";
import IconImg1 from "@/public/assets/col-md-2.png";
import IconImg2 from "@/public/assets/fa-brands-2.png";
import IconImg3 from "@/public/assets/fa-brands-3.png";
import IconImg4 from "@/public/assets/fa-brands-4.png";
import IconImg5 from "@/public/assets/fa-brands-5.png";
import IconImg6 from "@/public/assets/fa-brands-6.png";
import Footer from "@/app/pages/Footer";

const HomeSection = () => {
  return (
    <div className="px-5 sm:px-10 md:px-[70px] lg:px-[50px] xl:px-[90px] 2xl:px-[120px]">
      <div className="flex justify-between items-center py-10 px-10">
        <h2 className="text-base md:text-xl lg:text-2xl font-semibold">Shop</h2>
        <h3 className="flex justify-center items-center gap-3">
          Home <MdArrowForwardIos className="text-xl md:text-xl" />
          <span className="text-gray-400">Shop</span>
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 gap-2 ">
          <Image src={CardImg1} alt="Img" />
          <Image src={CardImg2} alt="Img" />
          <Image src={CardImg3} alt="Img" />
          <Image src={CardImg4} alt="Img" />
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-y-10 gap-10 py-10">
        <h4>Showing all 12 results</h4>
        <div className="flex justify-center items-center gap-4">
          <p>Views:</p>
          <TfiMenu />
          <CiBoxList />
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="border bg-gray-200 px-4 py-2 rounded-md text-xs sm:text-sm md:text-base">
            Popularity
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-xs sm:text-sm md:text-base">
            Filter
          </button>
        </div>
      </div>

      <div className="w-full  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-y-48 gap-x-10 pt-16 px-20 gap-10 ">
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

export default HomeSection;
