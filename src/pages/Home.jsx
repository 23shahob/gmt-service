import React, { useEffect } from "react";
import Carousel from "../components/home/Carousel";
import Accordion from "../components/home/Accordion";
import Location from "../components/home/Location";
import FooterTop from "../components/home/FooterTop";
import HomeStaticSection from "../components/home/HomeStaticSection";
import Clients from "../components/home/Clients";
import Brends from "../components/home/Brends";
import CompanyNews from "../components/home/CompanyNews";
import OfficeTools from "../components/home/OfficeTools";
import PopularCategory from "../components/home/PopularCategory";
import Products from "../components/home/Products";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // <div className="pt-[223px]">
    <div>
      <div>
        <div className="md:pb-[70px] lg:pb-[100px]">
          <Carousel />
        </div>
        <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
          <PopularCategory />
        </div>
        <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
          <OfficeTools />
        </div>
        <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
          <HomeStaticSection />
        </div>
        <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
          <Products />
        </div>
        <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
          <Clients />
        </div>
        <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
          <Brends />
        </div>
        <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
          <Accordion />
        </div>
        <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
          <CompanyNews />
        </div>
        <div className="pb-[60px] md:pb-[120px] lg:pb-[150px]">
          <Location />
        </div>
        <div><FooterTop /></div>
      </div>
    </div>
  );
};

export default Home;
