import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-36">
      <div className="flex max-w-full flex-col gap-y-10 py-8 bg-gray-50 md:flex-row justify-between items-center px-5 sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[100px]">
        <h1 className="text-2xl font-bold ">Bandage</h1>
        <div className="flex text-blue-500 text-xl justify-center items-center gap-3">
          <FaInstagram />
          <FaFacebookSquare />
          <FaTwitter />
        </div>
      </div>

      <div className="w-full mt-6 bg-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  pb-10 lg:grid-cols-5 gap-y-16 gap-2 text-sm px-5 sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[80px]">
        <div className="flex flex-col justify-start items-start gap-4 ">
          <h4 className="text-base font-semibold">Company Info</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are Hiring</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <h4 className="text-base font-semibold">Legal</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are Hiring</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <h4 className="text-base font-semibold">Fearures</h4>
          <p>BUsiness Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <h4 className="text-base font-semibold">Resources</h4>
          <p>IOS & Andriod</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <div>
            <h4 className="text-base font-semibold">Get in Touch</h4>
            <div className="flex justify-start items-center py-2  ">
              <input
                type="text"
                placeholder="Your Email"
                className="border  w-full border-blue-200 p-1 md:p-2 bg-gray-50"
              />
              <button className="bg-blue-500 py-1 md:py-2 p-1 md:p-3 rounded-sm border border-blue-200">
                Subscribe
              </button>
            </div>
            <p className="text-xs">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      <p className="py-10 max-w-full bg-gray-100 px-5 sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[100px]">
        Made With Love By Muhammad Salman All Right Reserved
      </p>
      <div className="bg-white py-10"></div>
    </div>
  );
};

export default Footer;
