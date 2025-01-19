import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="bg-gray-800 text-white border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="text-sm hidden md:inline">📞 (225) 555-0118</span>
            <span className="text-sm  hidden md:inline">
              📧 michelle.rivera@example.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm  hidden sm:inline">Follow Us</span>
            <div className="flex items-center space-x-2">
              <FaInstagram />
              <FaYoutube />
              <FaFacebookSquare />
              <FaTwitter />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
