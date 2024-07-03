import React from "react";
import StockProducts from "./StockProducts";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const StockTopSection = () => {
  return (
    <div className="grid grid-cols-4 gap-[10px]">
      <div className="hidden h-60 rounded-[10px] border border-[#E5E2EE] px-4 md:block lg:px-5">
        <p className="border-b border-[#E5E2EE] py-4 text-sm font-medium leading-[118%]">
          Категории
        </p>
        <ul className="flex flex-col gap-y-3 py-5">
          <li className="flex cursor-pointer items-center justify-between transition duration-300 ease-in-out hover:text-[#088269]">
            <p className="text-xs font-normal lg:text-sm">Группы товаров</p>
            <MdOutlineKeyboardArrowRight className="h-[13px] w-[13px]" />
          </li>
          <li className="flex cursor-pointer items-center justify-between transition duration-300 ease-in-out hover:text-[#088269]">
            <p className="text-xs font-normal lg:text-sm">Мониторы</p>
            <MdOutlineKeyboardArrowRight className="h-[13px] w-[13px]" />
          </li>
          <li className="flex cursor-pointer items-center justify-between transition duration-300 ease-in-out hover:text-[#088269]">
            <p className="text-xs font-normal lg:text-sm">Лампы</p>
            <MdOutlineKeyboardArrowRight className="h-[13px] w-[13px]" />
          </li>
          <li className="flex cursor-pointer items-center justify-between transition duration-300 ease-in-out hover:text-[#088269]">
            <p className="text-xs font-normal lg:text-sm">Кровати</p>
            <MdOutlineKeyboardArrowRight className="h-[13px] w-[13px]" />
          </li>
          <li className="flex cursor-pointer items-center justify-between transition duration-300 ease-in-out hover:text-[#088269]">
            <p className="text-xs font-normal lg:text-sm">Рентгены</p>
            <MdOutlineKeyboardArrowRight className="h-[13px] w-[13px]" />
          </li>
        </ul>
      </div>
      <div className="col-span-4 md:col-span-3">
        <StockProducts />
      </div>
    </div>
  );
};

export default StockTopSection;
