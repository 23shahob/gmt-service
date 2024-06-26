import React, { useState } from "react";
import { Link } from "react-router-dom";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#088269] py-[100px]">
      <div className="mx-auto flex max-w-[1440px] justify-between text-[#f8f7f3]">
        <div className="text-[30px] font-medium leading-[120%]">
          Информация о компании
        </div>
        <div>
          {[
            "О компании",
            "Преимущества сотрудников",
            "Достижения компании",
            "Карьерный рост",
          ].map((title, index) => (
            <div key={index} className="w-[650px] border-y border-[#f8f7f3]">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between py-6 focus:outline-none"
              >
                <span>{title}</span>
                {activeIndex === index ? (
                  <span className="flex h-8 w-8 items-center justify-center rounded-[40px] border border-[#F8F7F3] bg-white transition duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M14.9487 14.9497L5.0492 5.05025M14.9487 5.05025L5.0492 14.9497"
                        stroke="#202020"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-[40px] border border-[#F8F7F3] transition duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 3V17M3 10H17"
                        stroke="#F8F7F3"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                )}
              </button>
              {activeIndex === index && (
                <div className="">
                  <p className="mb-10 font-medium leading-[140%]">
                    Но синтетическое тестирование, в своём классическом
                    представлении, допускает внедрение поэтапного и
                    последовательного развития общества. В рамках спецификации
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены
                  </p>
                  <p className="pb-4">
                    {" "}
                    <Link to="#">Подробнее ↗</Link>
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

export default Accordion;
