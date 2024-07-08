import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { countryName } from "../../assets/data/countryName";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const FilterBar = () => {
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

  const [value, setValue] = React.useState([20.0, 950.0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="hidden md:block">
        <div className="mb-[5px] flex items-center justify-between rounded-[10px] border border-[#E5E2EE] py-4 md:px-4 lg:px-5">
          <h3 className="text-sm font-medium leading-[140%] lg:text-base">
            Направления
          </h3>
          <MdOutlineKeyboardArrowRight className="rotate-90" />
        </div>
        <div className="rounded-[10px] border border-[#E5E2EE] pb-5 md:px-4 lg:px-5">
          <div className="mb-4 flex items-center justify-between border-b border-[#E5E2EE] py-4">
            <h3 className="lg:textbase text-sm font-medium leading-[140%]">
              Фильтр по товарам
            </h3>
            <MdOutlineKeyboardArrowRight className="-rotate-90" />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xs font-normal leading-[140%] lg:text-sm">
              Цена
            </h3>
            <MdOutlineKeyboardArrowRight className="-rotate-90" />
          </div>
          <ul className="mb-6 grid grid-cols-2 gap-[10px]">
            <li className="mb-4 border-b border-[#E5E2EE] pb-[10px]">
              <span className="text-xs font-normal text-[#7A7687]">От:</span>
              <p className="text-sm font-normal">20.000</p>
            </li>
            <li className="mb-4 border-b border-[#E5E2EE] pb-[10px]">
              <span className="text-xs font-normal text-[#7A7687]">До:</span>
              <p className="text-sm font-normal">950.000</p>
            </li>
          </ul>
          <div className="relative">
            <Box>
              <Slider
                getAriaLabel={() => "Product Range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                sx={{
                  color: "#088269",
                  "& .MuiSlider-thumb": {
                    color: "#088269",
                  },
                  "& .MuiSlider-track": {
                    color: "#088269",
                  },
                  "& .MuiSlider-rail": {
                    color: "#088269",
                  },
                }}
              />
            </Box>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xs font-normal leading-[140%] lg:text-sm">
              Страна
            </h3>
            <MdOutlineKeyboardArrowRight className="-rotate-90" />
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
          <ul className="scrollbar my-4 mb-[10px] flex max-h-60 flex-col overflow-y-scroll md:gap-y-2 lg:gap-y-3">
            {filteredCountries.map((country, index) => (
              <li key={index} className="flex items-center gap-4">
                <input className="h-5 w-5" type="checkbox" />
                <p className="text-xs font-normal lg:text-sm">{country}</p>
              </li>
            ))}
          </ul>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xs font-normal leading-[140%] lg:text-sm">
              Состояние
            </h3>
            <MdOutlineKeyboardArrowRight className="-rotate-90" />
          </div>
          <ul className="mb-6 flex flex-col gap-y-3">
            <li className="flex items-center gap-4">
              <input className="h-5 w-5" type="checkbox" />
              <p className="text-xs font-normal lg:text-sm">Новый</p>
            </li>
            <li className="flex items-center gap-4">
              <input className="h-5 w-5" type="checkbox" />
              <p className="text-xs font-normal lg:text-sm">Демонстрационный</p>
            </li>
          </ul>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xs font-normal leading-[140%] lg:text-sm">
              Назначение
            </h3>
            <MdOutlineKeyboardArrowRight className="-rotate-90" />
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-normal leading-[140%] lg:text-sm">
              Комплектация
            </h3>
            <MdOutlineKeyboardArrowRight className="-rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
