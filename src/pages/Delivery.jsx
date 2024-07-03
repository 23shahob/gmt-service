import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import DeliveryInformation from "../components/delivery/DeliveryInformation";
import ConvenientInformation from "../components/delivery/ConvenientInformation";
import DeliveryRules from "../components/delivery/DeliveryRules";
import AccordionSection from "../components/home/AccordionSection";
import PickUpSection from "../components/delivery/PickUpSection";
import CargoDocuments from "../components/delivery/CargoDocuments";
import Consultation from "../components/delivery/Consultation";
import FooterTop from "../components/home/FooterTop";

const Delivery = () => {
  return (
    <div>
      <div className="mx-auto mb-10 max-w-[1440px] px-4 md:mb-12 md:px-5 lg:mb-24 lg:px-4">
        <div className="mb-5 flex items-center gap-2 py-5">
          <Link to="/" className="text-sm font-normal text-[#7A7687]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
          <p className="text-sm font-normal">Доставка</p>
        </div>
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <DeliveryInformation />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <ConvenientInformation />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <DeliveryRules />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <AccordionSection />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <PickUpSection />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <CargoDocuments />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <Consultation />
      </div>
      <div>
        <FooterTop />
      </div>
    </div>
  );
};

export default Delivery;
