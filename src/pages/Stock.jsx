import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import StockTopSection from "../components/stock/StockTopSection";
import OfficeTools from "../components/home/OfficeTools";
import Products from "../components/home/Products";
import Brends from "../components/home/Brends";
import Location from "../components/home/Location";
import FooterTop from "../components/home/FooterTop";

const Stock = () => {
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
          <p className="text-sm font-normal">Акции</p>
        </div>
        <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
          <StockTopSection />
        </div>
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <OfficeTools />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <Products />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <Brends />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[150px]">
        <Location />
      </div>
      <div>
        <FooterTop />
      </div>
    </div>
  );
};

export default Stock;
