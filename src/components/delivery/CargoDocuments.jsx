import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import { FiPlus } from "react-icons/fi";

const CargoDocuments = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#E5E4ED]">
      <div className="mx-auto max-w-[1440px] justify-between px-4 py-14 lg:flex md:px-5 md:py-12 lg:px-4 lg:py-24">
        <div className="mb-10 md:mb-8 lg:mb-0 md:w-2/3 lg:w-2/6">
          <h3 className="mb-3 text-lg font-medium leading-[120%] md:mb-5 md:text-xl lg:mb-6 lg:text-[30px]">
            Документы, необходимые для получения груза
          </h3>
          <p className="text-xs font-medium leading-[118%] md:text-sm lg:text-base">
            По копиям доверенностей и доверенностям с незаполненными
            обязательными реквизитами отгрузка не производится
          </p>
        </div>
        <div className="w-full transition duration-700 ease-in-out md:w-4/5 lg:w-1/2">
          {[
            "Юридические лица",
            "Индивидуальные предприниматели",
            "Физические лица",
          ].map((title, index) => (
            <div
              key={index}
              className="border-t border-[#D5D1E1] transition duration-300 ease-in-out"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between py-4 focus:outline-none lg:py-6"
              >
                <span className="text-base text-left font-semibold leading-[136%] lg:text-lg lg:leading-normal">
                  {title}
                </span>
                {activeIndex === index ? (
                  <span className="flex h-[27px] w-[27px] items-center justify-center rounded-[40px] border border-[#088269] bg-[#088269] transition duration-300 ease-in-out lg:h-8 lg:w-8">
                    <AiOutlineClose className="text-white" />
                  </span>
                ) : (
                  <span className="flex h-[27px] w-[27px] items-center justify-center rounded-[40px] border border-[#D5D1E1] transition duration-300 ease-in-out lg:h-8 lg:w-8">
                    <FiPlus className="text-black" />
                  </span>
                )}
              </button>
              {activeIndex === index && (
                <div className="transition duration-300 ease-in-out">
                  <p className="pb-5 text-[12px] font-medium opacity-80 md:pb-8 md:text-sm md:leading-[118%] lg:pb-10 lg:text-[16px] lg:leading-[140%]">
                    Но синтетическое тестирование, в своём классическом
                    представлении, допускает внедрение поэтапного и
                    последовательного развития общества. В рамках спецификации
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CargoDocuments;
