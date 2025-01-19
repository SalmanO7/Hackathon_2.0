import Image from "next/image";
import React from "react";
import HeroImg1 from "@/public/assets/heroMain.png";
import HeroImg2 from "@/public/assets/hero2.png";
import HeroImg3 from "@/public/assets/hero1.png";
import HeroImg4 from "@/public/assets/hero3.png";
import HeroImg5 from "@/public/assets/hero4.png";
import CardImg1 from "@/public/assets/img1.png";
import CardImg2 from "@/public/assets/img2.png";
import CardImg3 from "@/public/assets/img3.png";
import CardImg4 from "@/public/assets/img4.png";
import CardImg5 from "@/public/assets/img5.png";
import CardImg6 from "@/public/assets/img6.jpg";
import CardImg7 from "@/public/assets/img7.jpg";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const AboutProducts = () => {
  return (
    <div className="px-10 sm:px-15 md:px-[60px] lg:px-[50px] xl:px-[90px] 2xl:px-[120px]">
      <div className="flex pt-8 flex-col justify-center items-center gap-2  ">
        <p className="uppercase text-gray-500 font-semibold">What We Do</p>
        <h2 className="font-bold text-xl lg:text-2xl xl:text-3xl">
          Innovation tailored for you
        </h2>
        <nav className="text-sm font-semibold mb-6 px-10 md:pb-16">
          Home / <span className="text-gray-500">Team</span>
        </nav>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <div>
          <Image src={HeroImg1} alt="Img" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Image src={HeroImg2} alt="img" />
          </div>
          <div>
            <Image src={HeroImg3} alt="img" />
          </div>
          <div>
            <Image src={HeroImg4} alt="img" />
          </div>
          <div>
            <Image src={HeroImg5} alt="img" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-2 pt-16 pb-20">
          <h2 className="font-semibold text-xl xl:text-2xl">Meet Our Team</h2>
          <p className="w-3/5 text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-20 p-5">
          <div className="flex flex-col justify-center items-center gap-3 ">
            <Image src={CardImg2} alt="img" className="w-full" />
            <div className="flex flex-col gap-2 justify-center items-center py-3">
              <h2 className="font-semibold">UserName</h2>
              <h4 className="font-semibold text-gray-500">Profession</h4>
              <div className="flex justify-center items-start gap-3 text-xl">
                <FaInstagram />
                <FaFacebookSquare />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <Image src={CardImg4} alt="img" className="w-full" />
            <div className="flex flex-col gap-2 justify-center items-center py-3">
              <h2 className="font-semibold">UserName</h2>
              <h4 className="font-semibold text-gray-500">Profession</h4>
              <div className="flex justify-center items-start gap-3 text-xl">
                <FaInstagram />
                <FaFacebookSquare />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <Image src={CardImg5} alt="img" className="w-full" />
            <div className="flex flex-col gap-2 justify-center items-center py-3">
              <h2 className="font-semibold">UserName</h2>
              <h4 className="font-semibold text-gray-500">Profession</h4>
              <div className="flex justify-center items-start gap-3 text-xl">
                <FaInstagram />
                <FaFacebookSquare />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <Image src={CardImg3} alt="img" className="w-full" />
            <div className="flex flex-col gap-2 justify-center items-center py-3">
              <h2 className="font-semibold">UserName</h2>
              <h4 className="font-semibold text-gray-500">Profession</h4>
              <div className="flex justify-center items-start gap-3 text-xl">
                <FaInstagram />
                <FaFacebookSquare />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <Image src={CardImg6} alt="img" className="w-full" />
            <div className="flex flex-col gap-2 justify-center items-center py-3">
              <h2 className="font-semibold">UserName</h2>
              <h4 className="font-semibold text-gray-500">Profession</h4>
              <div className="flex justify-center items-start gap-3 text-xl">
                <FaInstagram />
                <FaFacebookSquare />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <Image src={CardImg7} alt="img" className="w-full" />
            <div className="flex flex-col gap-2 justify-center items-center py-3">
              <h2 className="font-semibold">UserName</h2>
              <h4 className="font-semibold text-gray-500">Profession</h4>
              <div className="flex justify-center items-start gap-3 text-xl">
                <FaInstagram />
                <FaFacebookSquare />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <Image src={CardImg2} alt="img" className="w-full" />
            <div className="flex flex-col gap-2 justify-center items-center py-3">
              <h2 className="font-semibold">UserName</h2>
              <h4 className="font-semibold text-gray-500">Profession</h4>
              <div className="flex justify-center items-start gap-3 text-xl">
                <FaInstagram />
                <FaFacebookSquare />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <Image src={CardImg3} alt="img" className="w-full" />
            <div className="flex flex-col gap-2 justify-center items-center py-3">
              <h2 className="font-semibold">UserName</h2>
              <h4 className="font-semibold text-gray-500">Profession</h4>
              <div className="flex justify-center items-start gap-3 text-xl">
                <FaInstagram />
                <FaFacebookSquare />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 ">
            <Image src={CardImg6} alt="img" className="w-full" />
            <div className="flex flex-col gap-2 justify-center items-center py-3">
              <h2 className="font-semibold">UserName</h2>
              <h4 className="font-semibold text-gray-500">Profession</h4>
              <div className="flex justify-center items-start gap-3 text-xl">
                <FaInstagram />
                <FaFacebookSquare />
                <FaTwitter />
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default AboutProducts;
