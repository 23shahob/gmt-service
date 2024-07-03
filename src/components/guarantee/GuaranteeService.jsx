import React from "react";
import Guarantee1 from "../../assets/images/guarentee1.svg";
import Guarantee2 from "../../assets/images/guarentee2.svg";
import Guarantee3 from "../../assets/images/guarentee3.svg";
import Guarantee4 from "../../assets/images/guarentee4.svg";

const GuaranteeService = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <h3 className="mb-6 text-lg font-medium leading-[120%] md:mb-8 md:text-xl lg:mb-10 lg:text-3xl">
        Перечень гарантийных услуг
      </h3>
      <div className="mb-6 lg:mb-10 grid grid-cols-2 gap-[10px] md:grid-cols-4">
        <div className="flex h-40 flex-col items-center justify-center rounded-[10px] border border-[#E5E2EE] p-5 md:h-44 lg:h-80">
          <img
            className="mb-3 md:h-12 md:w-[41px] lg:h-[79px] lg:w-[68px]"
            src={Guarantee1}
            alt="Guarantee Service"
          />
          <p className="text-center text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]">
            Установка, настройка и пуско-наладка медтехники
          </p>
        </div>
        <div className="flex h-40 flex-col items-center justify-center rounded-[10px] border border-[#E5E2EE] p-5 md:h-44 lg:h-80">
          <img
            className="mb-3 md:h-[42px] md:w-[45px] lg:h-[62px] lg:w-[65px]"
            src={Guarantee2}
            alt="Guarantee Service"
          />
          <p className="text-center text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]">
            Сервисное обслуживание медицинской техники любой комплектации
          </p>
        </div>
        <div className="flex h-40 flex-col items-center justify-center rounded-[10px] border border-[#E5E2EE] p-5 md:h-44 lg:h-80">
          <img
            className="mb-3 md:h-[45px] md:w-8 lg:h-[68px] lg:w-[50px]"
            src={Guarantee3}
            alt="Guarantee Service"
          />
          <p className="text-center text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]">
            Гарантийное и постгарантийное обслуживание
          </p>
        </div>
        <div className="flex h-40 flex-col items-center justify-center rounded-[10px] border border-[#E5E2EE] p-5 md:h-44 lg:h-80">
          <img
            className="mb-3 md:h-9 md:w-[38px] lg:h-[55px] lg:w-[62px]"
            src={Guarantee4}
            alt="Guarantee Service"
          />
          <p className="text-center text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]">
            Диагностика и проведение профилактических работ
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <button className="rounded-[50px] border border-[#D5D1E1] px-5 py-2 text-xs font-semibold text-[#088269] transition duration-300 ease-in-out hover:border-[#088269] md:leading-[140%] lg:px-[30px] lg:py-[11px] lg:text-sm lg:leading-normal">
          Гарантийный случай
        </button>
        <button className="rounded-[50px] bg-[#088269] px-5 py-2 text-xs font-semibold text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E] md:leading-[140%] lg:px-[30px] lg:py-[11px] lg:text-sm lg:leading-normal">
          Замена товара
        </button>
      </div>
    </div>
  );
};

export default GuaranteeService;
