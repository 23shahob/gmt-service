import React from "react";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Реанимация
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Хирургия
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Офтальмология
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Лабораторная диагностика
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Акушерство
      </Link>
    ),
    key: "4",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Гинекология
      </Link>
    ),
    key: "5",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Гистология
      </Link>
    ),
    key: "6",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Косметология
      </Link>
    ),
    key: "7",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Оториноларингология
      </Link>
    ),
    key: "8",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Рентгенология и томография
      </Link>
    ),
    key: "9",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Стерилизация
      </Link>
    ),
    key: "10",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Физиотерапия и реабилитация
      </Link>
    ),
    key: "11",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Функциональная диагностика
      </Link>
    ),
    key: "12",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Эндоскопия
      </Link>
    ),
    key: "13",
  },
  { type: "divider" },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Новинки
      </Link>
    ),
    key: "15",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Распродажи
      </Link>
    ),
    key: "16",
  },
  {
    label: (
      <Link className="lg:text-sm md:text-[12px] font-normal" to="#">
        Кабинеты под ключ
      </Link>
    ),
    key: "17",
  },
];

const AllCategories = ({ text }) => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space className="cursor-pointer">
        <span className="font-semibold leading-normal text-[12px] lg:text-sm">
          {text}
        </span>
      </Space>
    </a>
  </Dropdown>
);
export default AllCategories;
