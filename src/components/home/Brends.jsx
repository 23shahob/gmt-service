import React from "react";
import BrendCarousel from "./BrendCarousel";

const Brends = () => {
  return (
    <div>
      <div className="mx-auto mb-6 max-w-[1440px] px-4 md:px-5 lg:px-4">
        <h2 className="mb-[10px] text-lg font-medium leading-[120%] md:text-xl lg:mb-6 lg:text-[30px]">
          Бренды
        </h2>
        <p className="text-[12px] font-medium opacity-50 md:text-sm md:leading-[118%] lg:text-[16px] lg:leading-[140%]">
          Эксклюзивные поставщики
        </p>
      </div>
      <div className="mx-auto flex max-w-[1440px] px-4 md:px-5 lg:px-4">
        <BrendCarousel />
      </div>
    </div>
  );
};

export default Brends;
