import React from "react";
import FilterBar from "./FilterBar";
import StockProducts from "../stock/StockProducts";

const CatalogProductView = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <h3 className="mb-6 text-lg font-medium leading-[120%] md:text-xl lg:mb-10 lg:text-3xl">
        Оборудование Draeger
      </h3>
      <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4">
        <div>
          <FilterBar />
        </div>
        <div className="col-span-3">
          <StockProducts />
        </div>
      </div>
    </div>
  );
};

export default CatalogProductView;
