import React from "react";

import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

const items = [
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Реанимация
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Хирургия
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Офтальмология
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Лабораторная диагностика
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Акушерство
      </Link>
    ),
    key: "4",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Гинекология
      </Link>
    ),
    key: "5",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Гистология
      </Link>
    ),
    key: "6",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Косметология
      </Link>
    ),
    key: "7",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Оториноларингология
      </Link>
    ),
    key: "8",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Рентгенология и томография
      </Link>
    ),
    key: "9",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Стерилизация
      </Link>
    ),
    key: "10",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Физиотерапия и реабилитация
      </Link>
    ),
    key: "11",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Функциональная диагностика
      </Link>
    ),
    key: "12",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Эндоскопия
      </Link>
    ),
    key: "13",
  },
  { type: "divider" },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Новинки
      </Link>
    ),
    key: "15",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Распродажи
      </Link>
    ),
    key: "16",
  },
  {
    label: (
      <Link className="text-sm font-normal" to="#">
        Кабинеты под ключ
      </Link>
    ),
    key: "17",
  },
];

const HeaderBottom = () => {
  return (
    <div className="mx-auto x-4 hidden md:flex max-w-[1440px] items-center justify-between md:h-[52px] md:px-5 lg:h-[62px] lg:px-4">
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
            <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomLeft"
                >
                  <Link to="/catalog" className="hover:text-[#07745E]">
                    Каталог
                  </Link>
                </Dropdown>
              </Space>
            </Space>
          </li>
          <li className="font-semibold transition duration-300 ease-in-out hover:text-[#07745E] md:text-[12px] lg:text-sm">
            <Link to="#">Производители</Link>
          </li>
          <li className="font-semibold transition duration-300 ease-in-out hover:text-[#07745E] md:text-[12px] lg:text-sm">
            <Link to="#">Кабинеты под ключ</Link>
          </li>
          <li className="font-semibold transition duration-300 ease-in-out hover:text-[#07745E] md:text-[12px] lg:text-sm">
            <Link to="#">Услуги</Link>
          </li>
          <li className="font-semibold transition duration-300 ease-in-out hover:text-[#07745E] md:text-[12px] lg:text-sm">
            <Link to="#">Акции</Link>
          </li>
          <li className="font-semibold transition duration-300 ease-in-out hover:text-[#07745E] md:text-[12px] lg:text-sm">
            <Link to="#">Покупателям</Link>
          </li>
          <li className="font-semibold transition duration-300 ease-in-out hover:text-[#07745E] md:text-[12px] lg:text-sm">
            <Link to="#">Контакты</Link>
          </li>
        </ul>
      </div>
      <div className="group flex md:gap-[10px] lg:gap-3">
        <a
          className="flex items-center font-semibold leading-normal group-hover:text-[#07745E] md:gap-[3px] md:text-[12px] lg:gap-1 lg:text-sm"
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
          className="rounded-[50px] flex items-center bg-[#088269] py-[11px] transition duration-300 ease-in-out hover:bg-[#07745E] md:p-2 lg:px-[30px]"
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
