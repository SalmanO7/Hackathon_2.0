import Image from "next/image";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import iconImg from "@/public/assets/icons.png";

const PriceFAQ = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-5 sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[100px]">
      <div className="flex justify-center items-center py-14 flex-col">
        <h2 className="text-lg xl:text-2xl font-bold">Pricing FAQs</h2>
        <h4 className="text-gray-500 text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </h4>
      </div>

      <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-16">
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-start items-center gap-8">
            <MdArrowForwardIos className="text-xl  sm:-ml-12  md:-ml-28 text-blue-600 md:text-xl" />
            <h2 className="text-xl font-semibold">
              the quick fox jumps over the lazy dog
            </h2>
          </div>
          <h4 className="text-gray-500 w-3/4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h4>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-start items-center gap-8">
            <MdArrowForwardIos className="text-xl sm:-ml-12 md:-ml-28 text-blue-600 md:text-xl" />
            <h2 className="text-xl font-semibold">
              the quick fox jumps over the lazy dog
            </h2>
          </div>
          <h4 className="text-gray-500 w-3/4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h4>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-start items-center gap-8">
            <MdArrowForwardIos className="text-xl sm:-ml-12 md:-ml-28 text-blue-600 md:text-xl" />
            <h2 className="text-xl font-semibold">
              the quick fox jumps over the lazy dog
            </h2>
          </div>
          <h4 className="text-gray-500 w-3/4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h4>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-start items-center gap-8">
            <MdArrowForwardIos className="text-xl sm:-ml-12 md:-ml-28 text-blue-600 md:text-xl" />
            <h2 className="text-xl font-semibold">
              the quick fox jumps over the lazy dog
            </h2>
          </div>
          <h4 className="text-gray-500 w-3/4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h4>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-start items-center gap-8">
            <MdArrowForwardIos className="text-xl sm:-ml-12 md:-ml-28 text-blue-600 md:text-xl" />
            <h2 className="text-xl font-semibold">
              the quick fox jumps over the lazy dog
            </h2>
          </div>
          <h4 className="text-gray-500 w-3/4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h4>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-start items-center gap-8">
            <MdArrowForwardIos className="text-xl sm:-ml-12 md:-ml-28 text-blue-600 md:text-xl" />
            <h2 className="text-xl font-semibold">
              the quick fox jumps over the lazy dog
            </h2>
          </div>
          <h4 className="text-gray-500 w-3/4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </h4>
        </div>
      </div>
      <div className="pt-28 flex flex-col justify-center items-center gap-2">
        <h1 className="text-xl font-bold lg:text-2xl">Start your 14 days free trial</h1>
        <h4 className="text-center text-sm w-3/4">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </h4>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 m-5">
          Try for free
        </button>
        <div className="w-2/4 md:w-1/4">
          <Image src={iconImg} alt="Img" />
        </div>
      </div>
    </div>
  );
};

export default PriceFAQ;
