import React from "react";
import { Link, NavLink } from "react-router-dom";

import SiteLogo from "../assets/images/site_logo.svg";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdStats } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

import { Dropdown, Space } from "antd";
import AllCategories from "./AllCategories";
import HeaderBottom from "./header/HeaderBottom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  const items = [
    {
      key: "1",
      label: (
        <Link to="#" className="text-[12px] font-normal">
          Вакансии
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="#" className="text-[12px] font-normal">
          Отзывы
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to="#" className="text-[12px] font-normal">
          Сертификаты
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link to="#" className="text-[12px] font-normal">
          Партнерские программы
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link to="#" className="text-[12px] font-normal">
          Оптовые продажи
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link to="#" className="text-[12px] font-normal">
          Лизинг
        </Link>
      ),
    },
  ];

  return (
    <header>
      <div className="mx-auto hidden max-w-[1440px] items-center justify-between px-4 md:flex md:px-5 lg:px-4">
        <ul className="flex items-center md:gap-[10px] md:gap-y-[5px] lg:gap-5 lg:py-[10px]">
          <li className="text-[12px] font-medium leading-normal text-[#7A7687] transition duration-300 ease-in-out hover:text-[#07745E]">
            {/* <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottom"
                >
                  
                </Dropdown>
              </Space>
            </Space> */}
            <NavLink className="hover:text-[#07745E]" to="/about">
              О компании
            </NavLink>
          </li>
          <li className="font-medium leading-normal text-[#7A7687] transition duration-300 ease-in-out hover:text-[#07745E] md:text-[10px] lg:text-[12px]">
            <NavLink to="/delivery">Доставка</NavLink>
          </li>
          <li className="font-medium leading-normal text-[#7A7687] transition duration-300 ease-in-out hover:text-[#07745E] md:text-[10px] lg:text-[12px]">
            <NavLink to="/payment">Оплата</NavLink>
          </li>
          <li className="font-medium leading-normal text-[#7A7687] transition duration-300 ease-in-out hover:text-[#07745E] md:text-[10px] lg:text-[12px]">
            <NavLink to="/guarantee">Гарантии</NavLink>
          </li>
          <li className="font-medium leading-normal text-[#7A7687] transition duration-300 ease-in-out hover:text-[#07745E] md:text-[10px] lg:text-[12px]">
            <NavLink to="/blog">Блог</NavLink>
          </li>
        </ul>
        <div className="flex font-medium leading-normal text-[#7A7687] md:gap-[25px] md:text-[10px] lg:gap-[45px] lg:text-[12px]">
          <a
            className="transition duration-300 ease-in-out hover:text-[#07745E]"
            href="mailto: info@mail.ru"
          >
            info@mail.ru
          </a>
          <a
            className="transition duration-300 ease-in-out hover:text-[#07745E]"
            href="#"
          >
            г. Москва, ул. Московская, д. 35
          </a>
        </div>
      </div>
      <hr className="h-[1px] border-none bg-[#E5E2EE]" />
      <div className="mx-auto max-w-[1440px] items-center justify-between px-4 md:flex md:h-[52px] md:px-5 lg:h-[93px] lg:px-4">
        <div className="mb-4 mt-3 block items-center md:flex md:gap-8 lg:gap-10">
          <div className="flex items-center justify-between">
            <div className="mb-3 md:mb-0">
              <Link to="/">
                <img
                  className="md:h-[30px] md:w-[73px] lg:h-10 lg:w-24"
                  src={SiteLogo}
                  alt="Site Logo"
                />
              </Link>
            </div>
            <div className="flex gap-5 md:hidden">
              <FiPhone className="h-6 w-6" />
              <RxHamburgerMenu className="h-6 w-6" />
            </div>
          </div>
          <div className="relative flex h-[34px] w-full rounded-[50px] bg-[#D5D1E1] px-[2px] py-[1px] md:h-8 md:w-[403px] lg:h-[41px] lg:w-[614px]">
            <div className="flex h-full w-full gap-3 rounded-[50px] bg-white md:w-[360px] lg:w-[565px]">
              <div className="relative flex items-center gap-1 rounded-[50px] bg-[#EFEFEF] px-[10px] md:px-[15px] md:py-[7px] lg:py-[10px]">
                <AllCategories text={"Все категории"} />
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <path
                      d="M3.61295 5C3.08724 5 2.80628 5.7043 3.15283 6.15415L5.85526 9.66728C5.93566 9.77179 6.03477 9.85555 6.14596 9.91293C6.25714 9.97031 6.37782 10 6.49991 10C6.622 10 6.74268 9.97031 6.85387 9.91293C6.96505 9.85555 7.06416 9.77179 7.14456 9.66728L9.84748 6.15415C10.1935 5.7043 9.91258 5 9.38736 5H3.61246H3.61295Z"
                      fill="#7A7687"
                    />
                  </svg>
                </i>
              </div>
              <input
                className="h-full rounded-[50px] text-sm font-normal leading-normal text-[#7A7687] outline-none lg:w-[185px]"
                type="search"
                placeholder="Поиск"
              />
            </div>
            <span className="absolute right-[14px] top-1 flex items-center lg:top-2">
              <i className="md:h-[17px] md:w-[17px] lg:h-6 lg:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.2489 2C11.8169 1.99983 13.3524 2.44648 14.6756 3.28763C15.9989 4.12878 17.055 5.3296 17.7203 6.74941C18.3856 8.16922 18.6326 9.74922 18.4322 11.3043C18.2318 12.8594 17.5924 14.3252 16.5889 15.53L22.2789 21.22C22.3776 21.3117 22.4498 21.4283 22.4878 21.5575C22.5258 21.6868 22.5283 21.8239 22.4949 21.9544C22.4615 22.0849 22.3936 22.204 22.2982 22.2992C22.2028 22.3943 22.0835 22.462 21.9529 22.495C21.8225 22.5284 21.6856 22.5261 21.5564 22.4882C21.4272 22.4504 21.3107 22.3785 21.2189 22.28L15.5289 16.59C14.5107 17.4378 13.3034 18.0278 12.0089 18.3103C10.7145 18.5928 9.37106 18.5594 8.09227 18.2128C6.81349 17.8663 5.63697 17.2169 4.66223 16.3195C3.6875 15.4222 2.94322 14.3033 2.49237 13.0574C2.04151 11.8116 1.89734 10.4755 2.07204 9.16216C2.24674 7.84883 2.73517 6.59688 3.49603 5.51224C4.25689 4.42759 5.26779 3.54214 6.44321 2.93079C7.61864 2.31944 8.92401 2.00017 10.2489 2ZM3.49891 10.25C3.49891 11.1364 3.67351 12.0142 4.01273 12.8331C4.35194 13.6521 4.84915 14.3962 5.47594 15.023C6.10274 15.6498 6.84685 16.147 7.6658 16.4862C8.48475 16.8254 9.36249 17 10.2489 17C11.1353 17 12.0131 16.8254 12.832 16.4862C13.651 16.147 14.3951 15.6498 15.0219 15.023C15.6487 14.3962 16.1459 13.6521 16.4851 12.8331C16.8243 12.0142 16.9989 11.1364 16.9989 10.25C16.9989 8.45979 16.2878 6.7429 15.0219 5.47703C13.756 4.21116 12.0391 3.5 10.2489 3.5C8.4587 3.5 6.74181 4.21116 5.47594 5.47703C4.21007 6.7429 3.49891 8.45979 3.49891 10.25Z"
                    fill="#7A7687"
                  />
                </svg>
              </i>
            </span>
          </div>
        </div>
        <div className="hidden flex-col xl:flex">
          <span className="text-[12px] font-medium leading-normal text-[#7A7687]">
            Пн-Пт с 09:00-19:00
          </span>
          <span className="text-[12px] font-medium leading-normal text-[#7A7687]">
            Сб-Вс - выходной
          </span>
        </div>
        <ul className="hidden items-center md:flex md:gap-[15px] lg:gap-[25px]">
          <li className="group flex cursor-pointer flex-col items-center justify-center">
            <FaRegUser className="mb-1 transition duration-300 ease-in-out group-hover:text-[#07745E] md:h-5 md:w-5 lg:h-6 lg:w-6" />
            <span className="hidden text-[12px] font-medium leading-normal text-[#7A7687] transition duration-300 ease-in-out group-hover:text-[#07745E] xl:block">
              Войти
            </span>
          </li>
          <li className="group flex cursor-pointer flex-col items-center justify-center">
            <FaRegHeart className="mb-1 transition duration-300 ease-in-out group-hover:text-[#07745E] md:h-5 md:w-5 lg:h-6 lg:w-6" />
            <span className="hidden text-[12px] font-medium leading-normal text-[#7A7687] transition duration-300 ease-in-out group-hover:text-[#07745E] xl:block">
              Избранное
            </span>
          </li>
          <li className="group flex cursor-pointer flex-col items-center justify-center">
            <IoMdStats className="mb-1 transition duration-300 ease-in-out group-hover:text-[#07745E] md:h-5 md:w-5 lg:h-6 lg:w-6" />
            <span className="hidden text-[12px] font-medium leading-normal text-[#7A7687] transition duration-300 ease-in-out group-hover:text-[#07745E] xl:block">
              Сравнить
            </span>
          </li>
          <li className="group flex cursor-pointer flex-col items-center justify-center">
            <MdOutlineShoppingCart className="mb-1 transition duration-300 ease-in-out group-hover:text-[#07745E] md:h-5 md:w-5 lg:h-6 lg:w-6" />
            <span className="hidden text-[12px] font-medium leading-normal text-[#7A7687] transition duration-300 ease-in-out group-hover:text-[#07745E] xl:block">
              Корзина
            </span>
          </li>
        </ul>
      </div>
      <hr className="h-[1px] border-none bg-[#E5E2EE]" />
      <HeaderBottom />
      <hr className="h-[1px] border-none bg-[#E5E2EE]" />
    </header>
  );
};

export default Header;
