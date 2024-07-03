import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CategoryList = () => {
  return (
    <div className="rounded-[10px] border border-[#E5E2EE] lg:px-5">
      <h3 className="border-b border-[#E5E2EE] py-4 font-medium leading-[140%]">
        Направления
      </h3>
      <ul className="flex flex-col gap-y-3 py-5">
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
      </ul>
    </div>
  );
};

export default CategoryList;
