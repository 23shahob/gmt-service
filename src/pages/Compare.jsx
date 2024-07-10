import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartReducer";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoBarChartOutline } from "react-icons/io5";
import { removeFromCompare } from "../redux/compare/CompareReducer";
import { addToWishlist } from "../redux/wishlist/wishlistReducer";

const Compare = () => {
  const compare = useSelector((state) => state.compare);
  const dispatch = useDispatch();

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

  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <div className="mt-24 justify-between lg:flex">
        <h3 className="mb-5 text-xl font-medium leading-[120%] lg:mb-10 lg:text-5xl lg:leading-[110%]">
          Сравнение товаров
        </h3>
        {compare.items.length < 1 && (
          <div className="w-1/2">
            <h3 className="mb-3 text-lg font-medium leading-[120%] md:mb-5 md:text-xl lg:mb-6 lg:text-3xl">
              Не добавлено товаров к сравнению
            </h3>
            <p className="mb-8 w-3/5 text-xs font-medium leading-[118%] text-[#7A7687] md:mb-6 md:text-sm lg:text-base">
              Вы можете перейти на главную страницу или воспользоваться
              каталогом товаров
            </p>
            <div className="flex gap-4">
              <Link to="/">
                <button className="rounded-[50px] border border-[#D5D1E1] px-5 py-2 text-xs font-semibold leading-[138%] text-[#088269] transition duration-300 ease-in-out hover:border-[#088269]">
                  На главную
                </button>
              </Link>
              <Link to="/catalog">
                <button className="rounded-[50px] bg-[#088269] px-5 py-2 text-xs font-semibold leading-[138%] text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E]">
                  В каталог
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="mb-10 grid grid-cols-2 gap-[10px] md:mb-20 md:grid-cols-3 lg:mb-10">
        {compare.items.map((item) => (
          <div key={item.id} className="rounded-[10px] border border-[#E5E2EE]">
            <div className="relative h-44 rounded-t-[10px] border-b border-[#E5E2EE] bg-white p-5 lg:h-72">
              <span
                className={`absolute left-2 top-2 rounded-[76px] border px-2 py-1 text-[12px] font-semibold lg:left-4 lg:top-4 lg:text-sm ${filterStock(item.stock)}`}
              >
                {item.stock}
              </span>
              <div className="absolute right-2 top-2 flex gap-[6px] lg:right-4 lg:top-4 lg:gap-[10px]">
                <button
                  onClick={() => dispatch(removeFromCompare(item))}
                  className="transition duration-300 ease-in-out hover:text-[#088269]"
                >
                  <IoBarChartOutline className="h-5 w-5 text-[#088269] lg:h-6 lg:w-6" />
                </button>
                <button
                  onClick={() => dispatch(addToWishlist(item))}
                  className="transition duration-300 ease-in-out hover:text-[#088269]"
                >
                  <FaRegHeart className="h-5 w-5 lg:h-6 lg:w-6" />
                </button>
              </div>
              <Link to={`/product/${item.id}`}>
                <img
                  className="h-full w-full object-contain"
                  src={item.img}
                  alt="Product Img"
                />
              </Link>
            </div>
            <div className="px-[10px] py-3 lg:px-4 lg:py-5">
              <Link to={`/product/${item.id}`}>
                <p className="mb-1 text-base font-semibold leading-[134%] lg:mb-2 lg:text-lg lg:leading-normal">
                  {item.title}
                </p>
              </Link>
              <div className="mb-4 lg:mb-7">
                <p className="mb-[2px] text-[10px] font-normal leading-[130%] text-[#7A7687] lg:mb-1 lg:text-xs lg:leading-normal">
                  Артикул: 213134
                </p>
                <p className="text-[10px] font-normal leading-[130%] text-[#7A7687] lg:text-xs lg:leading-normal">
                  В наличии
                </p>
              </div>
              <p className="mb-3 text-base font-semibold leading-[134%] lg:mb-4 lg:text-lg lg:leading-normal">
                {item.price.toFixed(3) + " руб."}
              </p>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="w-full rounded-[50px] border border-[#D5D1E1] py-2 text-xs font-semibold leading-[138%] text-[#088269] transition duration-300 ease-in-out hover:border-[#088269] lg:py-3 lg:text-sm lg:leading-normal"
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compare;
