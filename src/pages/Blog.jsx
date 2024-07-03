import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CategoryList from "../components/blog/CategoryList";
import BlogData from "../components/blog/BlogData";
import FooterTop from "../components/home/FooterTop";

const Blog = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
        <div className="mb-10 flex items-center gap-2 py-5 md:mb-12 lg:mb-24">
          <Link to="/" className="text-sm font-normal text-[#7A7687]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
          <p className="text-sm font-normal">Каталог</p>
        </div>
        <div className="flex justify-between">
          <h3 className="font mb-4 text-[28px] leading-[105%] md:mb-5 md:text-[34px] lg:mb-10 lg:text-5xl">
            Блог
          </h3>
          <div className="relative block w-[236px] transition duration-700 ease-in-out lg:hidden">
            <div
              onClick={() => setOpen((prev) => !prev)}
              className="mb-2 flex cursor-pointer items-center justify-between rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3] px-4 py-3 transition duration-300 ease-in-out"
            >
              <h4 className="text-sm font-medium leading-[140%]">
                Направления
              </h4>
              <MdOutlineKeyboardArrowRight
                className={`transition duration-300 ease-in-out ${open ? "rotate-90" : "-rotate-90"}`}
              />
            </div>
            <ul
              className={`absolute z-10 w-full flex-col gap-y-3 rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3] p-4 transition duration-300 ease-in-out ${open ? "hidden" : "flex"}`}
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
                  <span className="text-xs font-normal">
                    Оториноларингология
                  </span>
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
        <div className="grid grid-cols-4 gap-[10px] pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
          <div className="hidden lg:block">
            <CategoryList />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <BlogData />
          </div>
        </div>
      </div>
      <div>
        <FooterTop />
      </div>
    </div>
  );
};

export default Blog;
