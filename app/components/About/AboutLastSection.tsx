import Image from "next/image";
import React from "react";
import Icons from "@/public/assets/icons.png";

const AboutLastSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-xl font-bold md:text-2xl">
          Start your 14 days free trial
        </h1>
        <p className="w-2/3 text-gray-500 text-center py-2">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="bg-blue-500 py-3 px-4 rounded-md text-gray-100">
          Try it free now
        </button>
        <div className="flex justify-center items-center py-5">
          <Image src={Icons} alt="icons" className="w-2/4" />
        </div>
      </div>
    </div>
  );
};

export default AboutLastSection;
