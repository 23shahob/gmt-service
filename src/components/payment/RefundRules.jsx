import React from "react";

const RefundRules = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <h1 className="mb-5 text-[28px] font-semibold leading-[105%] md:text-[34px] md:leading-[110%] lg:mb-10 lg:text-5xl">
        Порядок возврата денежных средств
      </h1>
      <p className="mb-6 text-xs font-medium leading-[118%] md:mb-10 md:w-4/5 md:text-sm lg:w-4/5 lg:text-base lg:leading-[140%] xl:w-1/2">
        Учитывая стремительное развитие мировых медицинских технологий, врачи
        в Российской Федерации и соседних странах столкнулись с вызовом,
        требующим обновления приборов в различных направлениях, от установок
        компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.
      </p>
      <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-[10px] border border-[#E5E2EE] bg-white p-4 md:p-5 lg:p-[30px]">
          <h3 className="text-base font-semibold leading-[134%] lg:text-lg lg:leading-normal">
            При оплате наличными
          </h3>
          <ul className="flex list-decimal flex-col gap-y-2 p-4 lg:gap-y-1">
            <li className="text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:text-base lg:leading-[140%]">
              Также как постоянное обеспечение нашей деятельности требует
              определения
            </li>
            <li className="text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:text-base lg:leading-[140%]">
              Требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии
            </li>
          </ul>
        </div>
        <div className="rounded-[10px] border border-[#E5E2EE] bg-white p-4 md:p-5 lg:p-[30px]">
          <h3 className="text-base font-semibold leading-[134%] lg:text-lg lg:leading-normal">
            При оплате банковской картой
          </h3>
          <ul className="flex list-decimal flex-col gap-y-2 p-4 lg:gap-y-1">
            <li className="text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:text-base lg:leading-[140%]">
              Также как постоянное обеспечение нашей деятельности требует
              определения
            </li>
            <li className="text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:text-base lg:leading-[140%]">
              Также как постоянное обеспечение нашей
            </li>
            <li className="text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:text-base lg:leading-[140%]">
              Требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RefundRules;
