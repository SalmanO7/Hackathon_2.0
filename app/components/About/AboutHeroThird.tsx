import Image from "next/image";
import React from "react";
import IconImg1 from "@/public/assets/col-md-2.png";
import IconImg2 from "@/public/assets/fa-brands-2.png";
import IconImg3 from "@/public/assets/fa-brands-3.png";
import IconImg4 from "@/public/assets/fa-brands-4.png";
import IconImg5 from "@/public/assets/fa-brands-5.png";
import IconImg6 from "@/public/assets/fa-brands-6.png";

const AboutHeroThird = () => {
  return (
    <div className="pt-20 px-10 sm:px-15 md:px-[60px] lg:px-[50px] xl:px-[90px] 2xl:px-[120px]">
      <div className="flex  flex-col justify-center items-center gap-2 pb-10">
        <h2 className="font-bold text-xl xl:text-2xl">
          Big Companies Are Here
        </h2>
        <p className="w-3-5 text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
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
      </div>{" "}
    </div>
  );
};

export default AboutHeroThird;
