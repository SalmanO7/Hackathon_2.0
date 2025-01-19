import React from "react";
import ProductImg1 from "@/public/assets/unsplash_QANOF9iJlFs.png";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

const ProductSecondSection = () => {
  return (
    <>
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-14 px-5 sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[80px]">
        <div>
          <Image src={ProductImg1} alt="img" />
        </div>
        <div className="text-xs md:text-sm flex flex-col justify-start items-start px-6 gap-4 text-gray-600">
          <h2 className="text-base md:text-xl font-semibold">
            the quick fox jumps over
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            repudiandae iste eaque nostrum enim! Incidunt explicabo, fugit
            vitae.
          </p>
          <p>
            molestias optio reprehenderit incidunt nesciunt eligendi distinctio
            repudiandae iste eaque nostrum enim! Incidunt explicabo, fugit
            vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            molestias optio reprehenderit incidunt nesciunt eligendi distinctio
            repudiandae iste eaque nostrum enim! Incidunt explicabo, fugit
            vitae.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start px-6 gap-4 text-gray-600">
          <div className="text-xs md:text-sm">
            <h2 className="text-base md:text-xl font-semibold py-2 ">
              the quick fox jumps over
            </h2>
            <p className="flex text-gray-600 justify-start items-center gap-5">
              <MdArrowForwardIos className="text-xl md:text-xl" />
              <span>the quick fox jumps over</span>
            </p>
            <p className="flex text-gray-600 justify-start items-center gap-5">
              <MdArrowForwardIos className="text-xl md:text-xl" />
              <span>the quick fox jumps over</span>
            </p>
            <p className="flex text-gray-600 justify-start items-center gap-5">
              <MdArrowForwardIos className="text-xl md:text-xl" />
              <span>the quick fox jumps over</span>
            </p>
            <p className="flex text-gray-600 justify-start items-center gap-5">
              <MdArrowForwardIos className="text-xl md:text-xl" />
              <span>the quick fox jumps over</span>
            </p>
          </div>
          <div className="text-xs md:text-sm">
            <h2 className="text-base md:text-xl font-semibold py-2">
              the quick fox jumps over
            </h2>
            <p className="flex text-gray-600 justify-start items-center gap-5">
              <MdArrowForwardIos className="text-xl md:text-xl" />
              <span>the quick fox jumps over</span>
            </p>
            <p className="flex text-gray-600 justify-start items-center gap-5">
              <MdArrowForwardIos className="text-xl md:text-xl" />
              <span>the quick fox jumps over</span>
            </p>
            <p className="flex text-gray-600 justify-start items-center gap-5">
              <MdArrowForwardIos className="text-xl md:text-xl" />
              <span>the quick fox jumps over</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSecondSection;
