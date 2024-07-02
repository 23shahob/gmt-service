import React from "react";

const DeliveryRules = () => {
  return (
    <div className="mx-auto max-w-[1440px] justify-between px-4 md:px-5 lg:flex lg:px-4">
      <div className="md:w-5/6 lg:w-1/3">
        <h3 className="mb-3 text-lg font-medium leading-[120%] md:mb-5 md:text-xl lg:mb-6 xl:w-7/12">
          Правила получения товара в пункте выдачи
        </h3>
        <p className="mb-12 text-[12px] font-medium leading-[118%] md:mb-8 md:text-sm lg:mb-0">
          Учитывая стремительное развитие мировых медицинских технологий, врачи
          в Российской Федерации и соседних странах столкнулись с вызовом,
          требующим обновления приборов.
        </p>
      </div>
      <div className="md:w-5/6 lg:w-1/2">
        <ul>
          <li>
            <h3 className="border-t border-[#7A7687] py-4 text-[16px] font-semibold leading-[134%] md:pb-2 md:pt-6 md:leading-[136%] lg:pb-4 lg:text-lg">
              Подготовить документы
            </h3>
            <p className="mb-4 text-[12px] font-medium leading-[118%] opacity-80 md:mb-6 md:text-sm lg:text-[16px]">
              Предварительно ознакомиться с условиями выдачи грузов на сайте и
              подготовьте нужные документы
            </p>
          </li>
          <li>
            <h3 className="border-t border-[#7A7687] py-4 text-[16px] font-semibold leading-[134%] md:pb-2 md:pt-6 md:leading-[136%] lg:pb-4 lg:text-lg">
              Проверка упаковки
            </h3>
            <p className="mb-4 text-[12px] font-medium leading-[118%] opacity-80 md:mb-6 md:text-sm lg:text-[16px]">
              При получении необходимо внимательно осмотреть упаковку груза на
              наличие механических повреждений и нарушений целостности упаковки
            </p>
          </li>
          <li>
            <h3 className="border-t border-[#7A7687] py-4 text-[16px] font-semibold leading-[134%] md:pb-2 md:pt-6 md:leading-[136%] lg:pb-4 lg:text-lg">
              Проверка товара
            </h3>
            <p className="mb-4 text-[12px] font-medium leading-[118%] opacity-80 md:mb-6 md:text-sm lg:text-[16px]">
              Вскрыть каждую упаковку и проверите товар по количеству согласно
              накладной поставщика и на наличие повреждений товара внутри тары
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryRules;
