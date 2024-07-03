import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import PaymentTopSection from "../components/payment/PaymentTopSection";
import RefundRules from "../components/payment/RefundRules";
import DeliveryTerms from "../components/payment/DeliveryTerms";
import Location from "../components/home/Location";

const Payment = () => {
  return (
    <div>
      <div className="mx-auto mb-10 max-w-[1440px] px-4 md:mb-12 md:px-5 lg:mb-24 lg:px-4">
        <div className="mb-5 flex items-center gap-2 py-5">
          <Link to="/" className="text-sm font-normal text-[#7A7687]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
          <p className="text-sm font-normal">Оплата</p>
        </div>
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <PaymentTopSection />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <RefundRules />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <DeliveryTerms />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <Location />
      </div>
    </div>
  );
};

export default Payment;
