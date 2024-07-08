import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CatalogData } from "../../assets/data/data";

const CatalogProducts = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <div className="flex justify-between">
        <h3 className="font mb-4 text-[28px] leading-[105%] md:mb-5 md:block md:text-[34px] lg:mb-10 lg:hidden lg:text-5xl">
          Популярные категории
        </h3>
        <div className="relative block w-[236px] transition duration-700 ease-in-out lg:hidden">
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="mb-2 flex cursor-pointer items-center justify-between rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3] px-4 py-3 transition duration-300 ease-in-out"
          >
            <h4 className="text-sm font-medium leading-[140%]">Направления</h4>
            <MdOutlineKeyboardArrowRight
              className={`transition duration-300 ease-in-out ${open ? "rotate-90" : "-rotate-90"}`}
            />
          </div>
          <ul
            className={`absolute w-full flex-col gap-y-3 rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3] p-4 transition duration-300 ease-in-out ${open ? "hidden" : "flex"}`}
          >
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">Реанимация</span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">Хирургия</span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">Офтальмология</span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">
                  Лабораторная диагностика
                </span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">
                  Акушерство и Гинекология
                </span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">Гистология</span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">Косметология</span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">Оториноларингология</span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">
                  Рентгенология и томография
                </span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">Стерилизация</span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">
                  Физиотерапия и реабилитация
                </span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">
                  Функциональная диагностика
                </span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
            <li>
              <Link className="flex justify-between transition duration-300 ease-in-out hover:text-[#088269]">
                <span className="text-xs font-normal">Эндоскопия</span>
                <MdOutlineKeyboardArrowRight className="md:h-[17px] md:w-[17px] lg:h-5 lg:w-5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[10px]">
        <div className="hidden rounded-[10px] border border-[#E5E2EE] lg:block lg:px-5">
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
        <div className="col-span-4 grid grid-cols-2 gap-[10px] sm:grid-cols-3 md:gap-[10px] lg:col-span-3 lg:gap-5">
          {CatalogData.map((product) => (
            <div
              key={product.id}
              className="rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3]"
            >
              <Link to={`/${product.title}`}>
                <div className="h-[154px] w-full rounded-t-[10px] border-b border-[#E5E2EE] xl:h-56">
                  <img
                    className="h-full w-full rounded-t-[10px] object-cover"
                    src={product.img}
                    alt="Product Img"
                  />
                </div>
                <div className="px-2 py-2 md:px-4 md:py-4 xl:px-6 xl:py-8">
                  <p className="text-[12px] font-medium leading-[140%] md:text-sm lg:text-[16px]">
                    {product.title}
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

export default CatalogProducts;
