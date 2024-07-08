import React from "react";

import { Dropdown, Space } from "antd";
import { NavLink } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

const items = [
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Реанимация
      </NavLink>
    ),
    key: "0",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Хирургия
      </NavLink>
    ),
    key: "1",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Офтальмология
      </NavLink>
    ),
    key: "2",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Лабораторная диагностика
      </NavLink>
    ),
    key: "3",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Акушерство
      </NavLink>
    ),
    key: "4",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Гинекология
      </NavLink>
    ),
    key: "5",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Гистология
      </NavLink>
    ),
    key: "6",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Косметология
      </NavLink>
    ),
    key: "7",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Оториноларингология
      </NavLink>
    ),
    key: "8",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Рентгенология и томография
      </NavLink>
    ),
    key: "9",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Стерилизация
      </NavLink>
    ),
    key: "10",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Физиотерапия и реабилитация
      </NavLink>
    ),
    key: "11",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Функциональная диагностика
      </NavLink>
    ),
    key: "12",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Эндоскопия
      </NavLink>
    ),
    key: "13",
  },
  { type: "divider" },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Новинки
      </NavLink>
    ),
    key: "15",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Распродажи
      </NavLink>
    ),
    key: "16",
  },
  {
    label: (
      <NavLink className="text-sm font-normal" to="#">
        Кабинеты под ключ
      </NavLink>
    ),
    key: "17",
  },
];

const HeaderBottom = () => {
  return (
    <div className="x-4 mx-auto hidden max-w-[1440px] items-center justify-between md:flex md:h-[52px] md:px-5 lg:h-[62px] lg:px-4">
      <div className="flex items-center gap-[5px]">
        <i className="h-[17px] w-[17px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M1.78906 4.47266H14.3154M1.78906 8.49897H8.74813M1.78906 12.5253H12.2277"
              stroke="#202020"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </i>
        <ul className="flex items-center gap-[25px]">
          <li className="font-semibold transition duration-300 ease-in-out hover:text-[#07745E] md:text-[12px] lg:text-sm">
            {/* <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomLeft"
                >
                  <NavLink to="/catalog" className="hover:text-[#07745E]">
                    Каталог
                  </NavLink>
                </Dropdown>
              </Space>
            </Space> */}
            <NavLink to="/catalog" className="hover:text-[#07745E]">
              Каталог
            </NavLink>
          </li>
          <li className="font-semibold transition duration-300 ease-in-out hover:text-[#07745E] md:text-[12px] lg:text-sm">
            <NavLink to="/manufacturer">Производители</NavLink>
          </li>
          <li className="font-semibold transition duration-300 ease-in-out hover:text-[#07745E] md:text-[12px] lg:text-sm">
            <NavLink to="/turnkey">Кабинеты под ключ</NavLink>
          </li>
          <li className="font-semibold transition duration-300 ease-in-out hover:text-[#07745E] md:text-[12px] lg:text-sm">
            <NavLink to="/services">Услуги</NavLink>
          </li>
          <li className="font-semibold transition duration-300 ease-in-out hover:text-[#07745E] md:text-[12px] lg:text-sm">
            <NavLink to="/stock">Акции</NavLink>
          </li>
          <li className="font-semibold transition duration-300 ease-in-out hover:text-[#07745E] md:text-[12px] lg:text-sm">
            <NavLink to="/contact">Контакты</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex md:gap-[10px] lg:gap-3">
        <a
          className="flex items-center font-semibold leading-normal transition duration-300 ease-in-out hover:text-[#07745E] md:gap-[3px] md:text-[12px] lg:gap-1 lg:text-sm"
          href="#"
        >
          Москва
          <i className="h-[13px] w-[13px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M6.5 12C6.5 12 2 8.7 2 5.4C2 2.65 4.25 1 6.5 1C8.75 1 11 2.65 11 5.4C11 8.7 6.5 12 6.5 12ZM6.5 7.05C6.94755 7.05 7.37678 6.87616 7.69324 6.56673C8.00971 6.25729 8.1875 5.83761 8.1875 5.4C8.1875 4.96239 8.00971 4.54271 7.69324 4.23327C7.37678 3.92384 6.94755 3.75 6.5 3.75C6.05245 3.75 5.62322 3.92384 5.30676 4.23327C4.99029 4.54271 4.8125 4.96239 4.8125 5.4C4.8125 5.83761 4.99029 6.25729 5.30676 6.56673C5.62322 6.87616 6.05245 7.05 6.5 7.05V7.05Z"
                stroke="#202020"
              />
            </svg>
          </i>
        </a>
        <a
          className="hidden rounded-[50px] border border-[#D5D1E1] px-5 py-[11px] transition duration-300 ease-in-out hover:border-[#07745E] xl:block"
          href="tel:  +7(495)000-00-00"
        >
          <span className="text-sm font-semibold leading-normal">
            +7(495)000-00-00
          </span>
        </a>
        <a
          className="flex items-center rounded-[50px] bg-[#088269] py-[11px] transition duration-300 ease-in-out hover:bg-[#07745E] md:p-2 lg:px-[30px]"
          href="#"
        >
          <span className="hidden text-sm font-semibold leading-normal text-white lg:block">
            Заказать звонок
          </span>
          <FiPhone className="h-[17px] w-[17px] text-white lg:hidden" />
        </a>
        <a href="#"></a>
      </div>
    </div>
  );
};

export default HeaderBottom;
