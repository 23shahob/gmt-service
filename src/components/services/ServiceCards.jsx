import React from "react";
import Service1 from "../../assets/images/service1.png";
import Service2 from "../../assets/images/service2.png";
import Service3 from "../../assets/images/service3.png";
import Service4 from "../../assets/images/service4.png";
import Service5 from "../../assets/images/service5.png";
import Service6 from "../../assets/images/service6.png";
import Service7 from "../../assets/images/service7.png";
import Service8 from "../../assets/images/service8.png";

const ServiceCards = () => {
  const Cards = [
    { id: 1, img: Service1, title: "Апробация" },
    { id: 2, img: Service2, title: "Помощь в подборе оборудования" },
    { id: 3, img: Service3, title: "Помощь инженеров в настройке" },
    { id: 4, img: Service4, title: "Пуско-наладочные работы" },
    { id: 5, img: Service5, title: "Обучение работе с оборудованием" },
    { id: 6, img: Service6, title: "Подменный аппарат" },
    {
      id: 7,
      img: Service7,
      title:
        "Работа с учебными центрами повышения квалификации медицинского персонала",
    },
    {
      id: 8,
      img: Service8,
      title: "Организация обучения врачей на собственной территории",
    },
  ];
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <h1 className="mb-8 text-[28px] font-medium leading-[105%] md:text-[34px] md:leading-[110%] lg:mb-10 lg:text-5xl">
        Услуги
      </h1>
      <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
        {Cards.map((card) => (
          <div
            key={card.id}
            className="grid grid-cols-1 rounded-[10px] border border-[#E5E2EE] lg:grid-cols-2"
          >
            <div className="relative order-2 rounded-b-[10px] bg-white p-4 lg:order-1 lg:p-6">
              <h3 className="mb-[10px] text-base font-semibold leading-[134%] lg:mb-4 lg:text-lg">
                {card.title}
              </h3>
              <p className="mb-1 text-[10px] font-normal leading-[130%] text-[#7A7687] lg:text-xs">
                Описание услуги
              </p>
              <p className="mb-14 text-xs font-medium leading-[118%] text-[#7A7687] md:mb-[51px] lg:mb-[93px] lg:leading-[140%]">
                Также как постоянное информационно-пропагандистское обеспечение
                нашей деятельности требует определения и уточнения распределения
                внутренних резервов и ресурсов.{" "}
              </p>
              <button className="absolute bottom-6 left-6 rounded-[50px] border border-[#D5D1E1] px-5 py-2 text-xs font-semibold text-[#088269] lg:px-[30px] lg:py-[11px] lg:text-sm">
                Заказать
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <img
                className="h-52 w-full rounded-t-[10px] object-cover lg:h-full lg:rounded-r-[10px] lg:rounded-t-none"
                src={card.img}
                alt="Service Img"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
