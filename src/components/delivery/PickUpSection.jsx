import React from "react";

const PickUpSection = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <h2 className="mb-2 text-lg font-medium leading-[120%] md:mb-3 md:w-1/2 md:text-xl lg:mb-10 lg:text-3xl">
        Вы сможете забрать оборудование{" "}
        <span className="text-[#088269]">самостоятельно</span> из нашего офиса
      </h2>
      <div className="relative mb-6 rounded-[10px] border border-[#E5E2EE] lg:mb-10">
        <iframe
          className="h-[208px] w-full rounded-[10px] md:h-[264px] lg:h-[389px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.6097804603199!2d69.20378307237195!3d41.28543031743791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1719776352557!5m2!1sru!2s"
        ></iframe>
        <button className="absolute bottom-4 right-4 rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold leading-[138%] text-[#F8F7F3] md:leading-[140%] lg:bottom-5 lg:right-5 lg:px-[30px] lg:py-[11px] lg:text-sm">
          Построить маршрут
        </button>
      </div>
      <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2">
        <div className="flex w-full flex-col rounded-[10px] border border-[#E5E2EE] bg-white p-6">
          <h4 className="mb-[10px] text-xs font-semibold leading-[118%] md:text-[16px] md:leading-[136%] lg:mb-4 lg:text-xl">
            Контакты
          </h4>
          <a
            className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:text-[16px] lg:leading-[140%]"
            href="tel: +7 (000) 000-00-00"
          >
            +7 (000) 000-00-00
          </a>
          <a
            className="text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:text-[16px] lg:leading-[140%]"
            href="mailto: info@mail.ru"
          >
            info@mail.ru
          </a>
        </div>
        <div className="flex w-full flex-col rounded-[10px] border border-[#E5E2EE] bg-white p-6">
          <h4 className="mb-[10px] text-xs font-semibold leading-[118%] md:text-[16px] md:leading-[136%] lg:mb-4 lg:text-xl">
            Режим работы
          </h4>
          <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:text-[16px] lg:leading-[140%]">
            пн-пт: 09:00-19:00
          </p>
          <p className="text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:text-[16px] lg:leading-[140%]">
            сб-вс: выходной
          </p>
        </div>
      </div>
    </div>
  );
};

export default PickUpSection;
