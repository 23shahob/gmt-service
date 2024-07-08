import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../redux/productview/ProductViewReducer";
import { IoBarChartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Flex, Rate } from "antd";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/cart/cartReducer";
import ProductCharacteristics from "../components/ProductCharacteristics";
import Products from "../components/home/Products";
import Brends from "../components/home/Brends";
import FooterTop from "../components/home/FooterTop";

const desc = ["1.0", "2.0", "3.0", "4.0", "5.0"];

const ProductView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleIncreaseQuantity = () => {
    if (cartItem) {
      dispatch(increaseQuantity({ id: product.id }));
    }
  };

  const handleDecreaseQuantity = () => {
    if (cartItem) {
      dispatch(decreaseQuantity({ id: product.id }));
    }
  };

  const cartItem = cartItems.find((item) => item.id === product?.id);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
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

  const [value, setValue] = useState(3);

  return (
    <div>
      <div className="mx-auto mb-10 mt-5 max-w-[1440px] px-4 md:px-5 lg:mb-[60px] lg:px-4">
        {product && (
          <div className="grid lg:mb-[60px] lg:grid-cols-5 lg:gap-[60px]">
            <div className="relative col-span-3 mb-5 rounded-[10px] border border-[#E5E2EE] bg-white p-5 md:h-[450px] lg:mb-0 lg:h-[500px]">
              <span
                className={`absolute left-6 top-6 rounded-[76px] border px-2 py-1 text-[12px] font-semibold lg:text-sm ${filterStock(product.stock)}`}
              >
                {product.stock}
              </span>
              <div className="absolute right-6 top-6 flex gap-[6px] lg:gap-[10px]">
                <button className="transition duration-300 ease-in-out hover:text-[#088269]">
                  <IoBarChartOutline className="h-5 w-5 lg:h-6 lg:w-6" />
                </button>
                <button className="transition duration-300 ease-in-out hover:text-[#088269]">
                  <FaRegHeart className="h-5 w-5 lg:h-6 lg:w-6" />
                </button>
              </div>
              <img
                className="h-full w-full object-contain"
                src={product.img}
                alt="Product Img"
              />
            </div>
            <div className="col-span-2 py-4 lg:py-6">
              <p className="mb-1 text-[16px] font-medium lg:mb-[10px] lg:text-3xl lg:leading-[120%]">
                {product.title}
              </p>
              <Flex gap="middle" className="mb-4">
                <Rate tooltips={desc} onChange={setValue} value={value} />
                {value ? <span>{desc[value - 1]}</span> : null}
              </Flex>
              <ul className="mb-4 flex flex-col gap-y-[5px]">
                <li className="text-[10px] font-normal text-[#7A7687] lg:text-xs">
                  Категория: Лабораторное оборудование
                </li>
                <li className="text-[10px] font-normal text-[#7A7687] lg:text-xs">
                  Производитель: Lorem
                </li>
                <li className="text-[10px] font-normal text-[#7A7687] lg:text-xs">
                  Артикул: 213134
                </li>
                <li className="text-[10px] font-normal text-[#7A7687] lg:text-xs">
                  В наличии
                </li>
              </ul>
              <p className="mb-5 text-base font-semibold lg:text-lg">
                {product.price.toFixed(3) + " руб."}
              </p>
              <div className="mb-3 flex items-center gap-[10px] border-b border-[#E5E2EE] pb-6">
                <div className="flex items-center justify-around rounded-[50px] border border-[#D5D1E1] py-2 lg:py-[11px]">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="px-2 md:px-4"
                  >
                    -
                  </button>
                  <span className="text-xs leading-[140%] text-[#088269] lg:text-sm lg:leading-normal">
                    {cartItem ? cartItem.quantity : 1}
                  </span>
                  <button
                    onClick={handleAddToCart}
                    className="px-2 text-[#088269] md:px-4"
                  >
                    +
                  </button>
                </div>
                <Link to="/payment">
                  <button
                    type="submit"
                    className="rounded-[50px] border border-[#D5D1E1] px-5 py-2 text-xs font-semibold leading-[140%] text-[#088269] transition duration-300 ease-in-out hover:border-[#088269] lg:py-[11px] lg:text-sm lg:leading-normal"
                  >
                    Задать вопрос
                  </button>
                </Link>
                <button
                  onClick={handleAddToCart}
                  className="rounded-[50px] bg-[#088269] px-5 py-2 text-xs font-semibold text-white transition duration-300 ease-in-out hover:bg-[#07745E] lg:py-[11px] lg:text-sm"
                >
                  Добавить в корзину
                </button>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-medium leading-[118%] md:text-base">
                  О товаре
                </h3>
                <p className="text-[10px] font-medium opacity-80 md:text-xs">
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <ProductCharacteristics />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <Products />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[135px] xl:pb-[150px]">
        <Brends />
      </div>
      <div>
        <FooterTop />
      </div>
    </div>
  );
};

export default ProductView;
