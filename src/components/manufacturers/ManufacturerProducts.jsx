import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiSliderHorizontal } from "react-icons/ci";
import { countryName } from "../../assets/data/countryName";
import CragHopper from "../../assets/images/svg/craghopper.svg";
import { MdOutlineClose } from "react-icons/md";

const ManufacturerProducts = () => {
  const [search, setSearch] = useState("");
  const sortedCountries = [...countryName].sort((a, b) => a.localeCompare(b));
  const [filteredCountries, setFilteredCountries] = useState(sortedCountries);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearch(query);

    const filtered = sortedCountries.filter((country) =>
      country.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredCountries(filtered);
  };

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.from({ length: 120 }, (y, x) => x + 1).slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Pagination
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(120 / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <button
        onClick={() => setOpenFilter(true)}
        className="mb-3 flex w-full items-center justify-center gap-2 rounded-[5px] border border-[#E5E2EE] px-5 py-3 md:hidden"
      >
        <CiSliderHorizontal className="h-[17px] w-[17px] text-gray-600" />
        <span className="text-xs font-medium leading-[118%]">Фильтр</span>
      </button>
      <div className="grid grid-cols-2 gap-[10px] md:grid-cols-3 lg:grid-cols-4">
        <div
          className={`md:block md:col-span-1 ${openFilter ? "col-span-2 block" : "hidden"}`}
        >
          <div className="mb-[5px] hidden items-center justify-between rounded-[10px] border border-[#E5E2EE] px-4 py-4 md:flex lg:px-5">
            <h3 className="text-sm font-medium leading-[140%] lg:text-base">
              Направления
            </h3>
            <MdOutlineKeyboardArrowRight className="rotate-90" />
          </div>
          <div className="rounded-[10px] border border-[#E5E2EE] px-4 lg:px-5">
            <div className="flex items-center justify-between py-4">
              <h3 className="lg:textbase text-sm font-medium leading-[140%]">
                Страны
              </h3>
              {openFilter ? (
                <MdOutlineClose className="block md:hidden" onClick={() => setOpenFilter(false)} />
              ) : (
                <MdOutlineKeyboardArrowRight className="-rotate-90 hidden md:block" />
              )}
            </div>
            <form className="flex h-10 w-full items-center rounded-[50px] border border-[#E5E2EE] bg-white">
              <input
                value={search}
                onChange={handleSearch}
                placeholder="Поиск по стране"
                className="h-full w-full rounded-[50px] px-5 text-sm font-normal text-[#7A7687] outline-none"
                type="search"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="pr-3"
              >
                <i className="md:h-[17px] md:w-[17px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10.2489 2C11.8169 1.99983 13.3524 2.44648 14.6756 3.28763C15.9989 4.12878 17.055 5.3296 17.7203 6.74941C18.3856 8.16922 18.6326 9.74922 18.4322 11.3043C18.2318 12.8594 17.5924 14.3252 16.5889 15.53L22.2789 21.22C22.3776 21.3117 22.4498 21.4283 22.4878 21.5575C22.5258 21.6868 22.5283 21.8239 22.4949 21.9544C22.4615 22.0849 22.3936 22.204 22.2982 22.2992C22.2028 22.3943 22.0835 22.462 21.9529 22.495C21.8225 22.5284 21.6856 22.5261 21.5564 22.4882C21.4272 22.4504 21.3107 22.3785 21.2189 22.28L15.5289 16.59C14.5107 17.4378 13.3034 18.0278 12.0089 18.3103C10.7145 18.5928 9.37106 18.5594 8.09227 18.2128C6.81349 17.8663 5.63697 17.2169 4.66223 16.3195C3.6875 15.4222 2.94322 14.3033 2.49237 13.0574C2.04151 11.8116 1.89734 10.4755 2.07204 9.16216C2.24674 7.84883 2.73517 6.59688 3.49603 5.51224C4.25689 4.42759 5.26779 3.54214 6.44321 2.93079C7.61864 2.31944 8.92401 2.00017 10.2489 2ZM3.49891 10.25C3.49891 11.1364 3.67351 12.0142 4.01273 12.8331C4.35194 13.6521 4.84915 14.3962 5.47594 15.023C6.10274 15.6498 6.84685 16.147 7.6658 16.4862C8.48475 16.8254 9.36249 17 10.2489 17C11.1353 17 12.0131 16.8254 12.832 16.4862C13.651 16.147 14.3951 15.6498 15.0219 15.023C15.6487 14.3962 16.1459 13.6521 16.4851 12.8331C16.8243 12.0142 16.9989 11.1364 16.9989 10.25C16.9989 8.45979 16.2878 6.7429 15.0219 5.47703C13.756 4.21116 12.0391 3.5 10.2489 3.5C8.4587 3.5 6.74181 4.21116 5.47594 5.47703C4.21007 6.7429 3.49891 8.45979 3.49891 10.25Z"
                      fill="#7A7687"
                    />
                  </svg>
                </i>
              </button>
            </form>
            <ul className="scrollbar my-4 mb-[10px] flex max-h-60 flex-col gap-y-2 overflow-y-scroll lg:gap-y-3">
              {filteredCountries.map((country, index) => (
                <li key={index} className="flex items-center gap-4">
                  <input className="h-5 w-5" type="checkbox" />
                  <p className="text-xs font-normal lg:text-sm">{country}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-[10px] md:col-span-2 lg:col-span-3 lg:grid-cols-3">
          {currentItems.map((number, index) => (
            <div key={index} className="rounded-[10px] border border-[#E5E2EE]">
              <div className="flex h-[108px] items-center justify-center rounded-t-[10px] border-b border-[#E5E2EE] bg-white md:h-[152px] lg:h-48">
                <img className="object-contain" src={CragHopper} alt="Img" />
              </div>
              <div className="p-4">
                <p className="text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]">
                  НМИЦ онкологии им. Н.Н. Блохина {number}
                </p>
              </div>
            </div>
          ))}
          <ul className="mt-4 inline-flex gap-1 -space-x-px transition duration-300 ease-in-out sm:gap-[5px]">
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
    </div>
  );
};

export default ManufacturerProducts;
