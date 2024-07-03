import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ManufacturerProducts from "../components/manufacturers/ManufacturerProducts";
import Products from "../components/home/Products";
import HomeStaticSection from "../components/home/HomeStaticSection";
import CompanyNews from "../components/home/CompanyNews";
import AccordionSection from "../components/home/AccordionSection";
import Location from "../components/home/Location";
import FooterTop from "../components/home/FooterTop";

const Manufacturers = () => {
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
  return (
    <div>
      <div className="mx-auto mb-5 max-w-[1440px] px-4 md:px-5 lg:px-4">
        <div className="mb-5 flex items-center gap-2 py-5">
          <Link to="/" className="text-sm font-normal text-[#7A7687]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
          <p className="text-sm font-normal">Производители</p>
        </div>
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <ManufacturerProducts />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <Products />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <HomeStaticSection />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <CompanyNews />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <AccordionSection />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <Location />
      </div>
      <div>
        <FooterTop />
      </div>
    </div>
  );
};

export default Manufacturers;
