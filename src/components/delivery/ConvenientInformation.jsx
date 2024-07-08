import React from "react";
import Symbol1 from "../../assets/images/svg/symbol1.svg";
import Symbol2 from "../../assets/images/svg/symbol2.svg";
import Symbol3 from "../../assets/images/svg/symbol3.svg";
import Symbol4 from "../../assets/images/svg/symbol4.svg";

const ConvenientInformation = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <h1 className="mb-6 font-medium md:mb-8 md:text-xl lg:mb-10 lg:text-[30px] lg:leading-[120%]">
        С нами выгодно и удобно
      </h1>
      <div className="grid grid-cols-2 items-center gap-[10px] sm:grid-cols-4">
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-[10px] border border-[#E5E2EE] md:h-[175px] md:w-[175px] lg:h-80 lg:w-full">
          <img
            className="mb-5 md:mb-6 md:h-11 md:w-9 lg:mb-8 lg:h-16 lg:w-14"
            src={Symbol1}
            alt="Symbol"
          />
          <p className="text-[12px]md:text-sm text-center font-medium lg:text-[16px] lg:leading-[140%]">
            Собственный склад с продукцией
          </p>
        </div>
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-[10px] border border-[#E5E2EE] md:h-[175px] md:w-[175px] lg:h-80 lg:w-full">
          <img
            className="mb-5 md:mb-6 md:h-11 md:w-9 lg:mb-8 lg:h-16 lg:w-14"
            src={Symbol2}
            alt="Symbol"
          />
          <p className="text-center text-[12px] font-medium md:text-sm lg:text-[16px] lg:leading-[140%]">
            Доставка по всей России
          </p>
        </div>
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-[10px] border border-[#E5E2EE] md:h-[175px] md:w-[175px] lg:h-80 lg:w-full">
          <img
            className="mb-5 md:mb-6 md:h-11 md:w-9 lg:mb-8 lg:h-16 lg:w-14"
            src={Symbol3}
            alt="Symbol"
          />
          <p className="text-center text-[12px] font-medium md:text-sm lg:text-[16px] lg:leading-[140%]">
            Весь товар сертифицирован
          </p>
        </div>
        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-[10px] border border-[#E5E2EE] md:h-[175px] md:w-[175px] lg:h-80 lg:w-full">
          <img
            className="mb-5 md:mb-6 md:h-11 md:w-9 lg:mb-8 lg:h-16 lg:w-14"
            src={Symbol4}
            alt="Symbol"
          />
          <p className="text-center text-[12px] font-medium md:text-sm lg:text-[16px] lg:leading-[140%]">
            Безопасные способы оплаты
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConvenientInformation;
