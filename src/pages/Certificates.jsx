import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import Products from "../components/home/Products";
import Location from "../components/home/Location";

const Certificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="pz-4 mx-auto mb-10 flex max-w-[1440px] items-center gap-2 py-5 md:mb-12 md:px-5 lg:mb-24 lg:px-4">
        <Link to="/" className="text-sm font-normal text-[#7A7687]">
          Главная
        </Link>
        <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
        <Link to="/about" className="text-sm font-normal text-[#7A7687]">
          О компании
        </Link>
        <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
        <p className="text-sm font-normal">Сертификаты</p>
      </div>
      <div className="mx-auto block max-w-[1440px] justify-between px-4 pb-[60px] md:px-5 md:pb-[120px] lg:flex lg:px-4 lg:pb-[135px] xl:pb-[150px]">
        <h1 className="mb-7 text-[28px] font-medium leading-[105%] md:mb-10 md:text-[34px] md:leading-[110%] lg:mb-0 lg:w-1/3 lg:text-5xl">
          Сертификаты
        </h1>
        <div className="border-t border-[#E1DFE7] lg:w-1/2">
          <div className="w-full transition duration-700 ease-in-out">
            {[
              "Медицинские инструменты",
              "Материалы для гинекологии и урологии",
              "Материалы для инъекционных процедур",
              "Перевязочные материалы",
            ].map((title, index) => (
              <div
                key={index}
                className="border-y border-[#f8f7f3] transition duration-300 ease-in-out"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between py-4 focus:outline-none lg:py-6"
                >
                  <span className="text-base font-semibold leading-[136%] lg:text-lg">
                    {title}
                  </span>
                  {activeIndex === index ? (
                    <span className="flex h-[27px] w-[27px] items-center justify-center rounded-[40px] border border-[#F8F7F3] bg-[#088269] transition duration-300 ease-in-out lg:h-8 lg:w-8">
                      <FiPlus className="rotate-45 text-white transition duration-300 ease-in-out" />
                    </span>
                  ) : (
                    <span className="flex h-[27px] w-[27px] items-center justify-center rounded-[40px] border border-[#E1DFE7] transition duration-300 ease-in-out lg:h-8 lg:w-8">
                      <FiPlus />
                    </span>
                  )}
                </button>
                {activeIndex === index && (
                  <div className="transition duration-300 ease-in-out">
                    <ul className="flex flex-col gap-y-2 lg:gap-y-[10px]">
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Инструменты медицинские хирургические РУ № РЗН 2015/3121
                        от 12 октября 2015 г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа
                        2016 г
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23
                        ноября 2018 г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября
                        2018 года
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23
                        ноября 2015 г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября
                        2012 г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Гигрометры ВИТ Свидетельство об утверждении{" "}
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017
                        г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.{" "}
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября
                        2018 г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18
                        марта 2020 г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Емкости-контейнеры РУ № ФСР 2012/13095 ч.1
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Электроды медицинские РУ № ФСЗ 2012/12612
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Инструменты хирургические РУ № ФСЗ 2012/12251 от 30 мая
                        2012 г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Изделие медицинское для инфуз.-трансфуз. РУ № ФСЗ
                        2011/11287 от 27 декабря 2011 г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Мундштуки картонные и адаптеры РУ № ФСР 2012/13317 от 27
                        августа 2019 г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Мундштуки картонные одноразовые РУ № ФСР 2012/13607 от
                        13 февраля 2018 г.
                      </li>
                      <li className="text-[10px] font-medium leading-[120%] text-[#088269] md:leading-normal lg:text-xs">
                        Анализатор паров этанола Alcotest РУ № РЗН 2016/5237 от
                        13 января 2017 г.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <Products />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <Location />
      </div>
    </div>
  );
};

export default Certificates;
