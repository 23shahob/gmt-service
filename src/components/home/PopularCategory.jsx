import React from "react";
import { Link } from "react-router-dom";
import { CategoryData } from "../../assets/data/CategoryData";

const PopularCategory = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-lg font-medium leading-[120%] md:text-xl lg:text-[30px]">
          Популярные категории
        </h2>
        <Link to="/catalog">
          <button className="rounded-[50px] bg-[#088269] px-5 py-2 text-[#F8F7F3] outline-none transition duration-300 ease-in-out hover:bg-[#07745E] focus:outline-none md:text-[12px] lg:px-[30px] lg:py-[11px] lg:text-sm">
            Все категории
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-[10px] md:grid-cols-3 lg:grid-cols-4">
        <div className="grid grid-rows-2 gap-[10px]">
          {CategoryData.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3]"
            >
              <Link to={`/${item.title}`}>
                <div className="flex w-full items-center justify-center rounded-t-[10px] border-b border-[#E5E2EE] bg-white lg:h-[220px]">
                  <img
                    src={item.image}
                    alt="Slider Img"
                    className="h-full w-full rounded-t-[10px] object-contain"
                  />
                </div>
                <div className="px-4 py-4 lg:px-6 lg:py-5">
                  <p className="font-medium md:text-sm md:leading-[118%] lg:text-[16px] lg:leading-[140%]">
                    {item.text}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="grid grid-rows-1 gap-[10px]">
          {CategoryData.slice(2, 3).map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3]"
            >
              <Link to={`/${item.title}`}>
                <div className="flex h-[515px] w-full items-center justify-center rounded-t-[10px] border-b border-[#E5E2EE] bg-white">
                  <img
                    src={item.image}
                    alt="Slider Img"
                    className="h-full w-full rounded-t-[10px] object-contain"
                  />
                </div>
                <div className="px-4 py-4 lg:px-6 lg:py-5">
                  <p className="font-medium md:text-sm md:leading-[118%] lg:text-[16px] lg:leading-[140%]">
                    {item.text}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="grid grid-rows-2 gap-[10px]">
          {CategoryData.slice(3, 5).map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3]"
            >
              <Link to={`/${item.title}`}>
                <div className="flex h-[220px] w-full items-center justify-center rounded-t-[10px] border-b border-[#E5E2EE] bg-white">
                  <img
                    src={item.image}
                    alt="Slider Img"
                    className="h-full w-full rounded-t-[10px] object-contain"
                  />
                </div>
                <div className="px-4 py-4 lg:px-6 lg:py-5">
                  <p className="font-medium md:text-sm md:leading-[118%] lg:text-[16px] lg:leading-[140%]">
                    {item.text}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="grid gap-[10px] md:flex lg:grid lg:grid-rows-2">
          {CategoryData.slice(5, 7).map((item) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3]"
            >
              <Link to={`/${item.title}`}>
                <div className="flex h-[220px] w-full items-center justify-center rounded-t-[10px] border-b border-[#E5E2EE] bg-white">
                  <img
                    src={item.image}
                    alt="Slider Img"
                    className="h-full w-full rounded-t-[10px] object-contain"
                  />
                </div>
                <div className="px-4 py-4 lg:px-6 lg:py-5">
                  <p className="font-medium md:text-sm md:leading-[118%] lg:text-[16px] lg:leading-[140%]">
                    {item.text}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
