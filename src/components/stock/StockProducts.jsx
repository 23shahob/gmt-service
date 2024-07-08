import React, { useState } from "react";
import { ProductsData } from "../../assets/data/data";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoBarChartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CiSliderHorizontal } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartReducer";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../redux/wishlist/wishlistReducer";

const StockProducts = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = ProductsData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Pagination
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(ProductsData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

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

  const dispatch = useDispatch();

  return (
    <div>
      <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-[5px] border border-[#E5E2EE] px-5 py-3 md:hidden">
        <CiSliderHorizontal className="h-[17px] w-[17px] text-gray-600" />
        <span className="text-xs font-medium leading-[118%]">Фильтр</span>
      </button>
      <div>
        <div className="mb-10 grid grid-cols-2 gap-[10px] md:mb-20 lg:mb-10 lg:grid-cols-3">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="rounded-[10px] border border-[#E5E2EE]"
            >
              <div className="relative h-44 rounded-t-[10px] border-b border-[#E5E2EE] bg-white p-5 lg:h-72">
                <span
                  className={`absolute left-2 top-2 rounded-[76px] border px-2 py-1 text-[12px] font-semibold lg:left-4 lg:top-4 lg:text-sm ${filterStock(item.stock)}`}
                >
                  {item.stock}
                </span>
                <div className="absolute right-2 top-2 flex gap-[6px] lg:right-4 lg:top-4 lg:gap-[10px]">
                  <button className="transition duration-300 ease-in-out hover:text-[#088269]">
                    <IoBarChartOutline className="h-5 w-5 lg:h-6 lg:w-6" />
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
        <ul className="inline-flex gap-1 -space-x-px transition duration-300 ease-in-out sm:gap-[5px]">
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              className={`flex h-6 w-6 items-center justify-center rounded-lg border text-sm font-semibold outline-none sm:h-8 sm:w-8 ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={currentPage === 1}
            >
              <MdOutlineKeyboardArrowRight className="h-[17px] w-[17px] rotate-180" />
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`flex h-6 w-6 items-center justify-center rounded-lg border text-sm font-semibold outline-none sm:h-8 sm:w-8 ${
                  number === currentPage
                    ? "bg-[#088269] text-white"
                    : "bg-white"
                }`}
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              className={`flex h-6 w-6 items-center justify-center rounded-lg border text-sm font-semibold outline-none sm:h-8 sm:w-8 ${
                currentPage === pageNumbers.length
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              disabled={currentPage === pageNumbers.length}
            >
              <MdOutlineKeyboardArrowRight className="h-[17px] w-[17px]" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StockProducts;
