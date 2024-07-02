import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiDownloadLine } from "react-icons/ri";
import FactsSection from "../components/about/FactsSection";
import ServiceCards from "../components/services/ServiceCards";
import Certificats from "../components/about/Certificats";
import Location from "../components/home/Location";

const Services = () => {
  return (
    <div>
      <div className="mx-auto mb-10 max-w-[1440px] px-4 md:mb-12 md:px-5 lg:mb-24 lg:px-4">
        <div className="mb-5 flex items-center gap-2 py-5">
          <Link to="/" className="text-sm font-normal text-[#7A7687]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
          <p className="text-sm font-normal">Услуги</p>
        </div>
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <ServiceCards />
      </div>
      <div className="mx-auto max-w-[1440px] px-4 pb-[60px] md:px-5 md:pb-[120px] lg:px-4 lg:pb-[135px] xl:pb-[150px]">
        <FactsSection />
      </div>
      <div className="mx-auto grid max-w-[1440px] px-4 pb-[60px] md:grid-cols-2 md:px-5 md:pb-[120px] lg:px-4 lg:pb-[135px] xl:pb-[150px]">
        <h3 className="order-1 mb-8 text-lg font-medium leading-[120%] md:mb-7 md:text-xl lg:mb-0 lg:w-4/5 lg:text-3xl">
          Вы сможете <span className="text-[#088269]">оставить заявку</span> на
          услуги и скачать бланк для заполнения
        </h3>
        <div className="order-2 mb-6 grid w-full grid-cols-1 gap-[10px] md:order-3 md:col-span-2 md:grid-cols-2 lg:order-2 lg:col-span-1 lg:mb-6 lg:justify-end">
          <div className="flex items-center justify-between rounded-[10px] border border-[E5E2EE] p-5 md:p-[22px]">
            <p className="font-semibold md:text-base lg:text-lg">
              Бланк для заполнения
            </p>
            <RiDownloadLine className="h-[30px] w-[30px] rounded-[5px] border border-[#D5D1E1] p-[5px]" />
          </div>
          <div className="flex items-center justify-between rounded-[10px] border border-[E5E2EE] p-5 md:p-[22px]">
            <p className="font-semibold md:text-base lg:text-lg">
              Бланк для заполнения
            </p>
            <RiDownloadLine className="h-[30px] w-[30px] rounded-[5px] border border-[#D5D1E1] p-[5px]" />
          </div>
        </div>
        <div className="hidden lg:order-3 lg:block"></div>
        <div className="order-3 flex justify-center md:order-2 md:justify-end lg:order-4">
          <button className="flex h-8 items-center rounded-[50px] bg-[#088269] px-5 text-xs font-semibold leading-[138%] text-[#F8F7F3] lg:h-10 lg:px-[30px] lg:text-lg lg:leading-normal">
            Оставить заявку
          </button>
        </div>
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

export default Services;
