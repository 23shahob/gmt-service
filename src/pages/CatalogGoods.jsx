import React, { useEffect } from "react";
import Draeger1 from "../assets/images/draeger1.png";
import Draeger2 from "../assets/images/draeger2.png";
import CatalogProductView from "../components/catalog/CatalogProductView";
import Brends from "../components/home/Brends";
import AccordionSection from "../components/home/AccordionSection";
import Location from "../components/home/Location";

const CatalogGoods = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="mx-auto mb-[60px] max-w-[1440px] px-4 pt-10 md:mb-[120px] md:px-5 lg:mb-[150px] lg:px-4">
        <h2 className="mb-7 text-[28px] font-medium leading-[105%] md:text-[34px] md:leading-[110%] lg:mb-10 lg:text-5xl">
          Медецинское оборудование Draeger
        </h2>
        <div className="mb-6 grid grid-cols-1 gap-[10px] md:grid-cols-2 lg:mb-10">
          <img
            className="h-[215px] w-full rounded-[10px] object-cover lg:h-[389px]"
            src={Draeger1}
            alt="Catalog Img"
          />
          <img
            className="h-[215px] w-full rounded-[10px] object-cover lg:h-[389px]"
            src={Draeger2}
            alt="Catalog Img"
          />
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="hidden lg:block"></div>
          <div className="md:w-4/5 lg:w-full">
            <p className="mb-[10px] text-xs font-medium leading-[118%] md:text-sm lg:mb-5 lg:text-base lg:leading-[140%]">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров
              и ЛОР комбайнов. Переход на полностью цифровую платформу
              при диагностике и лечении заболеваний также стал серьёзным
              испытанием для большинства больниц и частных клиник.{" "}
            </p>
            <p className="text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров
              и ЛОР комбайнов. Переход на полностью цифровую платформу
              при диагностике и лечении заболеваний также стал серьёзным
              испытанием для большинства больниц и частных клиник.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <CatalogProductView />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <Brends />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <AccordionSection />
      </div>
      <div className="mb-[60px] md:mb-[120px] lg:mb-[150px]">
        <Location />
      </div>
    </div>
  );
};

export default CatalogGoods;
