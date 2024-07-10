import React from "react";
import { Link, NavLink } from "react-router-dom";
import SiteLogo from "../../assets/images/svg/site_logo.svg";
import { FiPhone } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const NavbarHamburger = ({ setOpenHamburger }) => {
  return (
    <div className="absolute top-0 z-50 block h-screen w-full bg-white px-4 md:hidden">
      <div className="flex items-center justify-between border-b border-[#E5E2EE] py-3">
        <div className="mb-3 md:mb-0">
          <Link to="/">
            <img
              className="h-[30px] w-[73px] lg:h-10 lg:w-24"
              src={SiteLogo}
              alt="Site Logo"
            />
          </Link>
        </div>
        <div className="flex gap-5 md:hidden">
          <FiPhone className="h-6 w-6" />
          <IoMdClose
            onClick={() => setOpenHamburger(false)}
            className="h-6 w-6 transition duration-300 ease-in-out"
          />
        </div>
      </div>
      <ul className="">
        <li className="border-b border-[#E5E2EE] py-3 text-xs font-medium leading-normal transition duration-300 ease-in-out hover:text-[#07745E]">
          <NavLink onClick={() => setOpenHamburger(false)} to="/about">
            О компании
          </NavLink>
        </li>
        <li className="border-b border-[#E5E2EE] py-3 text-xs font-medium leading-normal transition duration-300 ease-in-out hover:text-[#07745E]">
          <NavLink onClick={() => setOpenHamburger(false)} to="/delivery">
            Доставка
          </NavLink>
        </li>
        <li className="border-b border-[#E5E2EE] py-3 text-xs font-medium leading-normal transition duration-300 ease-in-out hover:text-[#07745E]">
          <NavLink onClick={() => setOpenHamburger(false)} to="/payment">
            Оплата
          </NavLink>
        </li>
        <li className="border-b border-[#E5E2EE] py-3 text-xs font-medium leading-normal transition duration-300 ease-in-out hover:text-[#07745E]">
          <NavLink onClick={() => setOpenHamburger(false)} to="/guarantee">
            Гарантии
          </NavLink>
        </li>
        <li className="border-b border-[#E5E2EE] py-3 text-xs font-medium leading-normal transition duration-300 ease-in-out hover:text-[#07745E]">
          <NavLink onClick={() => setOpenHamburger(false)} to="/blog">
            Блог
          </NavLink>
        </li>
        <li className="border-b border-[#E5E2EE] py-3 text-xs font-medium leading-normal transition duration-300 ease-in-out hover:text-[#07745E]">
          <NavLink
            onClick={() => setOpenHamburger(false)}
            to="/catalog"
            className="hover:text-[#07745E]"
          >
            Каталог
          </NavLink>
        </li>
        <li className="border-b border-[#E5E2EE] py-3 text-xs font-medium leading-normal transition duration-300 ease-in-out hover:text-[#07745E]">
          <NavLink onClick={() => setOpenHamburger(false)} to="/manufacturer">
            Производители
          </NavLink>
        </li>
        <li className="border-b border-[#E5E2EE] py-3 text-xs font-medium leading-normal transition duration-300 ease-in-out hover:text-[#07745E]">
          <NavLink onClick={() => setOpenHamburger(false)} to="/turnkey">
            Кабинеты под ключ
          </NavLink>
        </li>
        <li className="border-b border-[#E5E2EE] py-3 text-xs font-medium leading-normal transition duration-300 ease-in-out hover:text-[#07745E]">
          <NavLink onClick={() => setOpenHamburger(false)} to="/services">
            Услуги
          </NavLink>
        </li>
        <li className="border-b border-[#E5E2EE] py-3 text-xs font-medium leading-normal transition duration-300 ease-in-out hover:text-[#07745E]">
          <NavLink onClick={() => setOpenHamburger(false)} to="/stock">
            Акции
          </NavLink>
        </li>
        <li className="border-b border-[#E5E2EE] py-3 text-xs font-medium leading-normal transition duration-300 ease-in-out hover:text-[#07745E]">
          <NavLink onClick={() => setOpenHamburger(false)} to="/contact">
            Контакты
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarHamburger;
