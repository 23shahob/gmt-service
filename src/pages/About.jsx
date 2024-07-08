import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AboutTopSection from "../components/about/AboutTopSection";
import PartnerSection from "../components/about/PartnerSection";
import DoctorsSection from "../components/about/DoctorsSection";
import Clients from "../components/home/Clients";
import HomeStaticSection from "../components/home/HomeStaticSection";
import Brends from "../components/home/Brends";
import Certificats from "../components/about/Certificats";
import Location from "../components/home/Location";

const About = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
        <div className="mb-5 flex items-center gap-2 py-5">
          <Link to="/" className="text-sm font-normal text-[#7A7687]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
          <p className="text-sm font-normal">О компании</p>
        </div>
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <AboutTopSection />
      </div>
      <div>
        <PartnerSection />
      </div>
      <div>
        <DoctorsSection />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <Clients />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <HomeStaticSection />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <Brends />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <Certificats />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <Location />
      </div>
    </div>
  );
};

export default About;
