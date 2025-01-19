import Image from "next/image";
import React from "react";
import CardImg1 from "@/public/assets/unsplash_hHdHCfAifHU.png";
import CardImg2 from "@/public/assets/unsplash_dEGu-oCuB1Y.png";
import CardImg3 from "@/public/assets/unsplash_tVEqStC2uz8.png";
import { BsStopwatch } from "react-icons/bs";
import { GrLineChart } from "react-icons/gr";
import { MdArrowForwardIos } from "react-icons/md";

const HeroSectionSixth = () => {
  return (
    <div className="mt-28 ">
      <div className="flex justify-center items-center flex-col gap-2">
        <p className="text-sm text-blue-500">Practice Advice</p>
        <h1 className="text-xl md:text-2xl font-semibold">Featured Posts</h1>
        <p className="text-xs text-gray-500 text-center">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 sm::grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-7 px-6 sm:px-10 md:px-20 xl:px-32">
          <div className="flex flex-col justify-center items-center bg-gray-50 p-3">
            <div className="relative">
              <Image src={CardImg1} alt="Card img" className="" />
              <span className=" text-white bg-red-500 text-xs absolute top-3 left-2 p-[1px] px-[3px]">
                NEW
              </span>
            </div>
            <div className="flex justify-center flex-col items-start gap-4 p-6">
              <div className="flex justify-start items-center text-xs gap-4">
                <span className="text-blue-500">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h2 className="text-xl">Loudest à la Madison #1 (L'integral)</h2>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="w-full flex justify-between items-center">
                <p className="flex justify-center items-center gap-1 text-xs">
                  <BsStopwatch className="text-blue-500" />
                  22 April 2021
                </p>
                <p className="flex justify-center items-center gap-1 text-xs">
                  <GrLineChart className="text-green-500" />
                  10 comments
                </p>
              </div>
              <div className="flex justify-start">
                <button className="flex justify-center items-center">
                  Learn More{" "}
                  <MdArrowForwardIos className="text-blue-500 text-lg" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-50 p-3">
            <div className="relative">
              <Image src={CardImg2} alt="Card img" className="" />
              <span className=" text-white bg-red-500 text-xs absolute top-3 left-2 p-[1px] px-[3px]">
                NEW
              </span>
            </div>
            <div className="flex justify-center flex-col items-start gap-4 p-6">
              <div className="flex justify-start items-center text-xs gap-4">
                <span className="text-blue-500">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h2 className="text-xl">Loudest à la Madison #1 (L'integral)</h2>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="w-full flex justify-between items-center">
                <p className="flex justify-center items-center gap-1 text-xs">
                  <BsStopwatch className="text-blue-500" />
                  22 April 2021
                </p>
                <p className="flex justify-center items-center gap-1 text-xs">
                  <GrLineChart className="text-green-500" />
                  10 comments
                </p>
              </div>
              <div className="flex justify-start">
                <button className="flex justify-center items-center">
                  Learn More{" "}
                  <MdArrowForwardIos className="text-blue-500 text-lg" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-50 p-3">
            <div className="relative">
              <Image src={CardImg3} alt="Card img" className="" />
              <span className=" text-white bg-red-500 text-xs absolute top-3 left-2 p-[1px] px-[3px]">
                NEW
              </span>
            </div>
            <div className="flex justify-center flex-col items-start gap-4 p-6">
              <div className="flex justify-start items-center text-xs gap-4">
                <span className="text-blue-500">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h2 className="text-xl">Loudest à la Madison #1 (L'integral)</h2>
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="w-full flex justify-between items-center">
                <p className="flex justify-center items-center gap-1 text-xs">
                  <BsStopwatch className="text-blue-500" />
                  22 April 2021
                </p>
                <p className="flex justify-center items-center gap-1 text-xs">
                  <GrLineChart className="text-green-500" />
                  10 comments
                </p>
              </div>
              <div className="flex justify-start">
                <button className="flex justify-center items-center">
                  Learn More{" "}
                  <MdArrowForwardIos className="text-blue-500 text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSixth;
