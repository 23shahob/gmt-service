import React from "react";

const DeliveryInformation = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <h1 className="mb-7 text-[28px] font-medium md:text-[34px] lg:mb-10 lg:text-5xl lg:leading-[110%]">
        Информация о доставке
      </h1>
      <div className="relative mb-6 rounded-[10px] border border-[#E5E2EE] lg:mb-10">
        <iframe
          className="h-[208px] rounded-[10px] w-full md:h-[264px] lg:h-[389px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.6097804603199!2d69.20378307237195!3d41.28543031743791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1719776352557!5m2!1sru!2s"
          //   width="600"
          //   height="450"
        ></iframe>
        <button className="absolute bottom-4 right-4 rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold leading-[138%] text-[#F8F7F3] md:leading-[140%] lg:bottom-5 lg:right-5 lg:px-[30px] lg:py-[11px] lg:text-sm">
          Пункт выдачи
        </button>
      </div>
      <div className="flex lg:justify-end">
        <p className="text-[12px] font-medium leading-[118%] md:w-4/5 md:text-sm lg:w-5/12 lg:text-[16px] lg:leading-[140%]">
          Учитывая стремительное развитие мировых медицинских технологий, врачи
          в Российской Федерации и соседних странах столкнулись с вызовом,
          требующим обновления приборов в различных направлениях, от установок
          компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.
          Переход на полностью цифровую платформу при диагностике и лечении
          заболеваний также стал серьёзным испытанием для большинства больниц
          и частных клиник.{" "}
        </p>
      </div>
    </div>
  );
};

export default DeliveryInformation;
