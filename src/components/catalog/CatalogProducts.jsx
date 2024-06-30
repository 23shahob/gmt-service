import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CatalogData } from "../../assets/data/data";

const CatalogProducts = () => {
  return (
    <div className="mx-auto flex max-w-[1440px] gap-[10px] md:px-5 lg:px-4">
      <div className="h-[595px] hidden sm:block grid-cols-1 rounded-[10px] border border-[#E5E2EE] p-4 md:w-[236px] lg:w-80">
        <h2 className="mb-5 border-b border-[#E5E2EE] pb-4 font-medium leading-[140%]">
          Направления
        </h2>
        <ul className="flex flex-col gap-y-3">
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Реанимация
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Хирургия
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Офтальмология
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Лабораторная диагностика
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Акушерство и Гинекология
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Гистология
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Косметология
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Оториноларингология
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Рентгенология и томография
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Стерилизация
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Физиотерапия и реабилитация
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Функциональная диагностика
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Эндоскопия
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Новинки
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Распродажи
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
          <li>
            <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
              <span className="font-normal md:text-[12px] lg:text-sm">
                Новинки
              </span>
              <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-[10px] md:gap-[10px] lg:grid-cols-3 lg:gap-5">
        {CatalogData.map((product) => (
          <div
            key={product.id}
            className="rounded-[10px] border border-[#E5E2EE] w-[168px] bg-[#F8F7F3] md:h-[216px] md:w-[236px] xl:h-[304px] xl:w-80"
          >
            <div className="w-full rounded-t-[10px] border-b h-[108px] border-[#E5E2EE] md:h-[152px] xl:h-56">
              <img
                className="h-full w-full rounded-t-[10px]"
                src={product.img}
                alt="Product Img"
              />
            </div>
            <div className="md:px-4 px-2 py-2 md:py-4 xl:px-6 xl:py-8">
              <p className="font-medium leading-[140%] md:text-sm lg:text-[16px]">
                {product.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogProducts;
