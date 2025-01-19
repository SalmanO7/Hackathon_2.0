import React from "react";
import HeroSection from "../components/Home/HeroSection";
import HeroSectionSecond from "../components/Home/HeroSectionSecond";
import HeroSectionThird from "../components/Home/HeroSectionThird";
import HeroSectionFourth from "../components/Home/HeroSectionFourth";
import HeroSectionFifth from "../components/Home/HeroSectionFifth";
import HeroSectionSixth from "../components/Home/HeroSectionSixth";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <HeroSectionSecond />
      <HeroSectionThird />
      <HeroSectionFourth />
      <HeroSectionFifth />
      <HeroSectionSixth />
    </div>
  );
};

export default Home;
