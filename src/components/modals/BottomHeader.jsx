import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiMenuSearchLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import RegistrationForm from "./RegistrationForm";

const BottomHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.user);
  const { authUser } = isAuthenticated;

  const handleUser = () => {
    if (!authUser) {
      setModalOpen(true);
    } else {
      window.location.href = "/personal";
    }
  };

  return (
    <div className="block border-t border-[#E5E2EE] px-4 py-3 md:hidden">
      <div className="w-full">
        <ul className="flex justify-between">
          <Link to="/">
            <li className="flex flex-col items-center justify-center">
              <AiOutlineHome className="mb-1 h-6 w-6" />
              <p className="text-xs font-medium text-[#7A7687]">Главная</p>
            </li>
          </Link>
          <Link to="/catalog">
            <li className="flex flex-col items-center justify-center">
              <RiMenuSearchLine className="mb-1 h-6 w-6" />
              <p className="text-xs font-medium text-[#7A7687]">Каталог</p>
            </li>
          </Link>
          <Link to="/cart">
            <li className="flex flex-col items-center justify-center">
              <MdOutlineShoppingCart className="mb-1 h-6 w-6" />
              <p className="text-xs font-medium text-[#7A7687]">Корзина</p>
            </li>
          </Link>
          <Link to="/wishlist">
            <li className="flex flex-col items-center justify-center">
              <FaRegHeart className="mb-1 h-6 w-6" />
              <p className="text-xs font-medium text-[#7A7687]">Избранное</p>
            </li>
          </Link>
          <Link to="/personal">
            <li
              onClick={handleUser}
              className="flex flex-col items-center justify-center"
            >
              <FaRegUser className="mb-1 h-6 w-6" />
              <p className="text-xs font-medium text-[#7A7687]">Войти</p>
            </li>
          </Link>
        </ul>
      </div>
      {modalOpen && <RegistrationForm onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default BottomHeader;
