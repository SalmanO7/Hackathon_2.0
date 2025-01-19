import React from "react";
import ProductPage from "../components/Shop/ProductSection";
import ProductSecondSection from "../components/Shop/ProductSecondSection";
import ProductCards from "../components/Shop/ProductCards";
import Navbar from "./Navbar";

const ProductComp = () => {
  return (
    <>
      <Navbar />
      <ProductPage />
      <ProductSecondSection />
      <ProductCards />
    </>
  );
};

export default ProductComp;
