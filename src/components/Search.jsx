import React from "react";
import { ProductsData } from "../assets/data/ProductsData";
import { Link } from "react-router-dom";

const Search = ({ search, setSearch }) => {
  return (
    <div className="absolute z-50 mt-12 rounded-[10px] border border-[#E5E2EE] bg-white px-6 py-3">
      <div className="grid grid-cols-1 gap-5">
        {ProductsData.filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.title.toLowerCase().includes(search);
        }).map((goods) => (
          <Link
            onClick={() => setSearch("")}
            key={goods.id}
            to={`/product/${goods.id}`}
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-[10px]">
                <img
                  className="h-full w-full object-contain"
                  src={goods.img}
                  alt=""
                />
              </div>
              <div>
                <p className="text-[10px] font-medium md:text-xs">
                  {goods.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
