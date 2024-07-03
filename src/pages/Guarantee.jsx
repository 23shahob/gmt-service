import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import GuaranteeRule from "../components/guarantee/GuaranteeRule";
import GuaranteeService from "../components/guarantee/GuaranteeService";
import Attention from "../components/guarantee/Attention";
import Location from "../components/home/Location";

const Guarantee = () => {
  return (
    <div>
      <div className="mx-auto mb-10 max-w-[1440px] px-4 md:mb-12 md:px-5 lg:mb-24 lg:px-4">
        <div className="mb-5 flex items-center gap-2 py-5">
          <Link to="/" className="text-sm font-normal text-[#7A7687]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
          <p className="text-sm font-normal">Гарантии</p>
        </div>
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <GuaranteeRule />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <GuaranteeService />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <Attention />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <Location />
      </div>
    </div>
  );
};

export default Guarantee;
