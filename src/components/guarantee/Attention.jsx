import React from "react";

const Attention = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <div className="justify-between rounded-[10px] bg-[#088269] px-5 py-10 md:flex">
        <h3 className="mb-5 text-lg font-medium leading-[120%] text-[#F8F7F3] md:mb-0 md:text-xl lg:w-1/5 lg:text-lg">
          Внимание!
        </h3>
        <div className="md:w-3/5">
          <p className="mb-3 text-xs font-medium leading-[118%] text-[#F8F7F3] md:mb-5 md:text-sm lg:text-base">
            Рассмотрение заявки на замену товара осуществляется в срок до 30
            дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при
            условии предоставления документов, перечисленных в договоре.
          </p>
          <p className="text-xs font-medium leading-[118%] text-[#F8F7F3] md:text-sm lg:text-base">
            Оформление гарантийного случая осуществляется согласно Гражданскому
            кодексу РФ, при условии предоставления документов, перечисленных в
            договоре и при наличии заявления с указанием причины возврата,
            оформленного надлежащим образом.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Attention;
