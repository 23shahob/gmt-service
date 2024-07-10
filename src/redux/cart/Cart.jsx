import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";

import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./cartReducer";
import { IoBarChartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { addToWishlist } from "../wishlist/wishlistReducer";
import { addToCompare } from "../compare/CompareReducer";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalCount = cart.items.reduce((acc, item) => acc + item.amount, 0);

  const filterStock = (stock) => {
    switch (stock) {
      case "Новинка":
        return "text-[#088269] bg-[#E1EFE6] border-[#088269]";
      case "Хит продаж":
        return "text-[#59599A] bg-[#E6E6FD] border-[#59599A]";

      default:
        return "text-[#AD7B00] bg-[#FFE095] border-[#AD7B00]";
    }
  };

  const handleCheckout = () => {
    if (cart.items.length > 0) {
      dispatch(clearCart());
    }
  };

  return (
    <div>
      <div className="mx-auto mb-5 max-w-[1440px] px-4 md:px-5 lg:px-4">
        <div className="mb-5 flex items-center gap-2 py-5">
          <Link to="/" className="text-sm font-normal text-[#7A7687]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
          <p className="text-sm font-normal">Корзина</p>
        </div>
      </div>
      <div className="mx-auto mb-[60px] max-w-[1440px] px-4 md:mb-[120px] md:px-5 lg:mb-[150px] lg:px-4">
        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-3">
            {cart.items.length === 0 ? (
              <h1 className="text-5xl font-semibold">
                Не добавлено товаров в Корзину😐
              </h1>
            ) : (
              <div>
                {cart.items.map((item) => (
                  <div
                    key={item.id}
                    className="relative mb-[10px] grid grid-cols-2 rounded-[10px] border border-[#E5E2EE] md:grid-cols-3"
                  >
                    <div className="relative col-span-1 h-48 rounded-l-[10px] border-r border-[#E5E2EE] bg-white p-5 md:h-52 lg:h-60">
                      <span
                        className={`absolute left-2 top-2 rounded-[76px] border px-2 py-1 text-[12px] font-semibold lg:left-4 lg:top-4 lg:text-sm ${filterStock(item.stock)}`}
                      >
                        {item.stock}
                      </span>
                      <div className="absolute right-2 top-2 flex gap-3 md:hidden md:gap-5">
                        <button
                          onClick={() => dispatch(addToCompare(item))}
                          className="transition duration-300 ease-in-out hover:text-[#088269]"
                        >
                          <IoBarChartOutline className="h-5 w-5 lg:h-6 lg:w-6" />
                        </button>
                        <button
                          onClick={() => dispatch(addToWishlist(item))}
                          className="transition duration-300 ease-in-out hover:text-[#088269]"
                        >
                          <FaRegHeart className="h-5 w-5 lg:h-6 lg:w-6" />
                        </button>
                      </div>
                      <img
                        className="h-full w-full object-contain"
                        src={item.img}
                        alt="Product Img"
                      />
                    </div>
                    <div className="px-3 py-2 md:col-span-2 md:px-0 md:py-0">
                      <div className="md:w-1/2 md:p-4 lg:p-5">
                        <h4 className="mb-1 mr-2 text-base font-semibold leading-[134%] md:mr-0 lg:mb-2 lg:text-lg lg:leading-normal">
                          {item.title}
                        </h4>
                        <p className="mb-[2px] text-[10px] font-normal leading-[130%] text-[#7A7687] lg:mb-1 lg:text-xs lg:leading-normal">
                          Артикул: 213134
                        </p>
                        <p className="text-[10px] font-normal leading-[130%] text-[#7A7687] lg:text-xs lg:leading-normal">
                          В наличии
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2">
                        <div className="py-4 md:p-4 md:py-0 lg:p-5">
                          <p className="mb-4 text-base font-semibold leading-[134%] md:mb-5 lg:mb-7 lg:text-lg lg:leading-normal">
                            {item.price.toFixed(3) + " руб."}
                          </p>
                          <div className="bottom-5 flex w-3/5 items-center justify-around rounded-[50px] border border-[#D5D1E1] py-2 md:w-4/5 lg:py-[11px]">
                            <button
                              onClick={() => dispatch(decreaseQuantity(item))}
                              className="px-2 md:px-4"
                            >
                              -
                            </button>
                            <span className="text-xs leading-[140%] text-[#088269] lg:text-sm lg:leading-normal">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => dispatch(increaseQuantity(item))}
                              className="px-2 text-[#088269] md:px-4"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="absolute right-2 top-2 flex gap-[6px] md:right-4 md:top-4 md:gap-4">
                          <div className="hidden md:flex md:gap-5">
                            <button
                              onClick={() => dispatch(addToCompare(item))}
                              className="transition duration-300 ease-in-out hover:text-[#088269]"
                            >
                              <IoBarChartOutline className="h-5 w-5 lg:h-6 lg:w-6" />
                            </button>
                            <button
                              onClick={() => dispatch(addToWishlist(item))}
                              className="transition duration-300 ease-in-out hover:text-[#088269]"
                            >
                              <FaRegHeart className="h-5 w-5 lg:h-6 lg:w-6" />
                            </button>
                          </div>
                          <button
                            onClick={() => dispatch(removeFromCart(item))}
                            className="transition duration-300 ease-in-out hover:text-[#088269]"
                          >
                            <IoMdClose className="h-5 w-5 lg:h-6 lg:w-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="h-[212px] rounded-[10px] border border-[#E5E2EE] bg-white px-5 md:col-span-1 lg:h-[237px]">
            <div className="mb-4 flex items-center justify-between border-b border-[#E5E2EE] py-4">
              <p className="text-xs font-semibold leading-[140%] lg:text-sm lg:leading-normal">
                Итого
              </p>
              <h3 className="text-xs font-semibold leading-[140%] lg:text-sm lg:leading-normal">
                {cart.total.toFixed(3)} руб.
              </h3>
            </div>
            <ul className="mb-5 flex flex-col gap-y-2">
              <li className="flex items-center justify-between">
                <p className="text-[10px] font-medium lg:text-xs">
                  Товары ({totalCount} шт)
                </p>
                <h3 className="text-[10px] font-medium lg:text-xs">
                  {cart.total.toFixed(3)} руб.
                </h3>
              </li>
              <li className="flex items-center justify-between">
                <p className="text-[10px] font-medium lg:text-xs">Скидка</p>
                <h3 className="text-[10px] font-medium lg:text-xs">0 руб.</h3>
              </li>
            </ul>
            <ul className="flex flex-col gap-y-1 lg:gap-y-[10px]">
              <li>
                {cart.items.length > 0 && (
                  <Link to="/">
                    <button
                      onClick={handleCheckout}
                      type="submit"
                      className="w-full rounded-[50px] bg-[#088269] px-5 py-2 text-xs font-semibold leading-[140%] text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E] lg:px-7 lg:text-sm lg:leading-normal"
                    >
                      Оформить заказ
                    </button>
                  </Link>
                )}
              </li>
              <li>
                <Link to="/payment">
                  <button
                    type="submit"
                    className="w-full rounded-[50px] border border-[#D5D1E1] px-5 py-2 text-xs font-semibold leading-[140%] transition duration-300 ease-in-out hover:border-[#088269] lg:px-7 lg:text-sm lg:leading-normal"
                  >
                    Задать вопрос
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
