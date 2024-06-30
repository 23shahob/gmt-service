import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AboutTopSection from "../components/about/AboutTopSection";

const About = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1440px] md:px-5 lg:px-4">
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
    </div>
  );
};

export default About;
