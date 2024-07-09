import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Breadcrumb = ({breadCrumb}) => {
  return (
    <div className="mx-auto mb-5 max-w-[1440px] px-4 md:mb-12 md:px-5 lg:mb-24 lg:px-4">
      <div className="mb-5 flex items-center gap-2 py-5">
        <Link to="/" className="text-sm font-normal text-[#7A7687]">
          Главная
        </Link>
        <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
        <p className="text-sm font-normal">{breadCrumb}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
