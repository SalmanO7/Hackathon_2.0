import React from "react";
import PriceHome from "../components/Price/PriceHome";
import PriceFAQ from "../components/Price/PriceFAQ";
import AboutNavbar from "../pages/AboutNavbar";

const pricing = () => {
  return (
    <>
      <AboutNavbar />
      <PriceHome />
      <PriceFAQ />
    </>
  );
};

export default pricing;
