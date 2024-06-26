import React from "react";
import BrendCarousel from "./BrendCarousel";

const Brends = () => {
  return (
    <div className="py-[150px]">
      <div className="mx-auto flex max-w-[1440px]">
        <div className="mb-6">
          <h2 className="mb-6 text-[30px] font-medium leading-[120%]">
            Бренды
          </h2>
          <p className="font-medium leading-[140%] opacity-50">
            Эксклюзивные поставщики
          </p>
        </div>
        <BrendCarousel />
      </div>
    </div>
  );
};

export default Brends;
