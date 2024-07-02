import React from 'react'

const FactsSection = () => {
  return (
    <div className="block justify-between lg:flex">
      <div className="mb-7 md:w-7/12 lg:mb-0 lg:w-1/3">
        <h1 className="mb-[10px] text-lg font-medium md:mb-5 md:text-xl lg:mb-6 lg:text-[30px] lg:leading-[120%]">
          Цифры и факты
        </h1>
        <p className="mb-8 text-[12px] font-medium leading-[118%] opacity-50 md:text-sm lg:text-[16px] lg:leading-[140%]">
          Мы работаем на результат и продаём только качественную продукцию
        </p>
      </div>
      <div className="md:w-7/12 lg:w-1/2">
        <ul>
          <li className="mb-5 flex items-center border-b border-[#D5D1E1] pb-[10px] lg:pb-5">
            <span className="w-1/2 text-[28px] font-medium leading-[105%] text-[#088269] lg:text-5xl lg:leading-[110%]">
              7 лет
            </span>
            <span className="w-1/2 text-[12px] font-medium leading-[118%] md:text-[34px] md:text-sm lg:text-[16px] lg:leading-[140%]">
              на рынке
            </span>
          </li>
          <li className="mb-5 flex items-center border-b border-[#D5D1E1] pb-[10px] lg:pb-5">
            <span className="w-1/2 text-[28px] font-medium leading-[105%] text-[#088269] lg:text-5xl lg:leading-[110%]">
              964+
            </span>
            <span className="w-1/2 text-[12px] font-medium leading-[118%] md:text-[34px] md:text-sm lg:text-[16px] lg:leading-[140%]">
              оригинальной продукции со всего мира
            </span>
          </li>
          <li className="mb-5 flex items-center border-b border-[#D5D1E1] pb-[10px] lg:pb-5">
            <span className="w-1/2 text-[28px] font-medium leading-[105%] text-[#088269] lg:text-5xl lg:leading-[110%]">
              23+
            </span>
            <span className="w-1/2 text-[12px] font-medium leading-[118%] md:text-[34px] md:text-sm lg:text-[16px] lg:leading-[140%]">
              международных сертификатов качества
            </span>
          </li>
          <li className="mb-5 flex items-center border-b border-[#D5D1E1] pb-[10px] lg:pb-5">
            <span className="w-1/2 text-[28px] font-medium leading-[105%] text-[#088269] lg:text-5xl lg:leading-[110%]">
              2452+
            </span>
            <span className="w-1/2 text-[12px] font-medium leading-[118%] md:text-[34px] md:text-sm lg:text-[16px] lg:leading-[140%]">
              товаров всегда в наличии{" "}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FactsSection