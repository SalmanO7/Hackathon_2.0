import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutHeroSecond from "../components/About/AboutHeroSecond";
import AboutHeroThird from "../components/About/AboutHeroThird";
import AboutHeroFour from "../components/About/AboutHeroFour";
import AboutLastSection from "../components/About/AboutLastSection";
import AboutNavbar from "../pages/AboutNavbar";

const about = () => {
  return (
    <>
      <AboutNavbar />
      <AboutHero />
      <AboutHeroSecond />
      <AboutHeroThird />
      <AboutHeroFour />
      <AboutLastSection />
    </>
  );
};

export default about;
