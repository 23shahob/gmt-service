import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CarouselData } from "../assets/data/CarouselData";
import HomeStaticSection from "../components/home/HomeStaticSection";
import AccordionSection from "../components/home/AccordionSection";
import Location from "../components/home/Location";
import FooterTop from "../components/home/FooterTop";

const TurnKey = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <div className="mx-auto mb-10 max-w-[1440px] px-4 md:mb-12 md:px-5 lg:mb-24 lg:px-4">
        <div className="flex items-center gap-2 py-5">
          <Link to="/" className="text-sm font-normal text-[#7A7687]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
          <p className="text-sm font-normal">Кабинеты под ключ</p>
        </div>
      </div>
      <div className="mx-auto mb-[60px] max-w-[1440px] px-4 md:mb-[120px] md:px-5 lg:mb-[150px] lg:px-4">
        <h1 className="mb-5 text-[28px] font-medium leading-[105%] md:mb-8 md:text-[34px] md:leading-[110%] lg:mb-10 lg:text-5xl">
          Кабинеты под ключ
        </h1>
        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
          {CarouselData.map((data) => (
            <div
              key={data.id}
              className="rounded-[10px] border border-[#E5E2EE]"
            >
              <div className="h-44 rounded-t-[10px] border-b border-[#E5E2EE] bg-white sm:h-48 lg:h-80">
                <img
                  className="h-full w-full rounded-t-[10px] object-cover"
                  src={data.image}
                  alt="Product Img"
                />
              </div>
              <div className="p-4 lg:p-5">
                <p className="text-base font-semibold leading-[134%]">
                  {data.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <HomeStaticSection />
      </div>
      <div className="mx-auto mb-[60px] max-w-[1440px] px-4 md:mb-[120px] md:px-5 lg:mb-[150px] lg:px-4">
        <div className="block justify-between rounded-[10px] border border-[#E5E2EE] bg-white p-5 md:flex lg:p-10">
          <h2 className="mb-7 text-lg font-medium md:mb-0 md:w-5/12 md:text-xl lg:text-3xl lg:leading-[120%]">
            Закажите у нас комплексное оснащение
          </h2>
          <div className="md:w-1/2">
            <form action="">
              <input
                required
                className="mb-5 w-full border-b border-[#7A7687] pb-[10px] text-xs outline-none lg:mb-11 lg:text-sm"
                type="tel"
                placeholder="Ваш телефон"
              />
              <div className="flex w-full justify-between gap-5">
                <button className="rounded-[50px] bg-[#088269] px-5 py-2 text-xs font-semibold leading-[138%] text-[#F8F7F3] hover:bg-[#07745E] lg:px-[30px] lg:py-3 lg:text-xs">
                  Заказать
                </button>
                <p className="w-4/5 text-[10px] font-medium leading-[120%] text-[#7A7687] md:text-xs">
                  Нажимая «Отправить», я соглашаюсь c обработкой персональных
                  данных на условиях{" "}
                  <span className="text-[#088269]">
                    Политики конфиденциальности.
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <AccordionSection />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <Location />
      </div>
      <div>
        <FooterTop />
      </div>
    </div>
  );
};

export default TurnKey;
