import React, { useState } from "react";
import { CatalogData } from "../../assets/data/data";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BlogData = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = CatalogData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Pagination
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(CatalogData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div>
        <div className="mb-10 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-2 lg:mb-10 lg:grid-cols-1">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="rounded-[10px] border shadow-md lg:flex lg:h-[304px]"
            >
              <div className="w-full lg:w-5/12">
                <img
                  className="h-full w-full rounded-t-[10px] object-cover lg:rounded-l-[10px] lg:rounded-tl-[10px] lg:rounded-t-none"
                  src={item.img}
                  alt="Product Img"
                />
              </div>
              <div className="relative w-full p-4 lg:w-7/12 lg:p-8">
                <h3 className="mb-1 text-base font-semibold leading-[134%] lg:mb-0 lg:text-lg lg:leading-normal">
                  {item.title}
                </h3>
                <p className="mb-[10px] text-[10px] font-normal leading-[130%] text-[#7A7687] md:mb-4 md:leading-normal lg:mb-6 lg:text-xs">
                  14.03.2023
                </p>
                <p className="mb-16 text-xs font-medium leading-[118%] text-[#7A7687] md:mb-20 md:text-sm lg:mb-10">
                  Обеспечение нашей деятельности требует определения и уточнения
                  распределения внутренних резервов и ресурсов. Каждый из нас
                  понимает очевидную вещь.
                </p>
                <button className="absolute bottom-4 left-4 rounded-[50px] border border-[#D5D1E1] px-5 py-2 text-xs font-semibold leading-[138%] text-[#088269] transition duration-300 ease-in-out hover:border-[#088269] lg:bottom-8 lg:left-8">
                  Подробнее
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

export default BlogData;
