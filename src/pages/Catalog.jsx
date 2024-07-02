import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import OfficeTools from "../components/home/OfficeTools";
import HomeStaticSection from "../components/home/HomeStaticSection";
import Products from "../components/home/Products";
import Clients from "../components/home/Clients";
import Brends from "../components/home/Brends";
import AccordionSection from "../components/home/AccordionSection";
import CompanyNews from "../components/home/CompanyNews";
import FooterTop from "../components/home/FooterTop";
import Location from "../components/home/Location";
import CatalogProducts from "../components/catalog/CatalogProducts";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mx-auto max-w-[1440px] md:px-5 lg:px-4">
        <div className="flex items-center gap-2 py-5">
          <Link to="/" className="text-sm font-normal text-[#7A7687]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
          <p className="text-sm font-normal">Каталог</p>
        </div>
      </div>
      <div className="pb-[150px]">
        <CatalogProducts />
      </div>
      <div className="pb-[150px]">
        <OfficeTools />
      </div>
      <div className="pb-[150px]">
        <HomeStaticSection />
      </div>
      <div className="pb-[150px]">
        <Products />
      </div>
      <div className="pb-[150px]">
        <Clients />
      </div>
      <div className="pb-[150px]">
        <Brends />
      </div>
      <div className="pb-[150px]">
        <AccordionSection />
      </div>
      <div className="pb-[150px]">
        <CompanyNews />
      </div>
      <div className="pb-[150px]">
        <Location />
      </div>
      <div>
        <FooterTop />
      </div>
    </div>
  );
};

export default Catalog;
