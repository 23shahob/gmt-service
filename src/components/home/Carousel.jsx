import React, { useEffect, useState, useRef } from "react";
import SliderImg from "../../assets/images/slider_img.png";
import { Link } from "react-router-dom";

const images = [
  <div className="relative h-full bg-[#E5E4ED] md:flex">
    <div className="relative py-5 px-5 md:py-6 md:pl-[30px] lg:py-8 lg:pl-[60px]">
      <h1 className="font-medium text-[28px] mb-4 leading-[110%] md:mb-[30px] md:text-[34px] lg:mb-6 lg:text-5xl">
        Заголовок баннера <br /> в пару строк
      </h1>
      <p className="font-medium mb-6 text-[#7A7687] text-[12px] md:text-sm md:leading-[120%] lg:text-[16px] lg:leading-[140%]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor{" "}
      </p>
      <div className="absolute flex gap-[10px] lg:gap-4 md:bottom-6 lg:bottom-8">
        <Link to="#">
          <button className="rounded-[50px] bg-[#088269] font-semibold text-white transition duration-300 ease-in-out hover:bg-[#07745E] px-5 py-2 text-[12px] lg:px-[30px] lg:py-3 lg:text-sm">
            Запросить цену
          </button>
        </Link>
        <Link to="/catalog">
          <button className="rounded-[50px] border border-[#D5D1E1] font-semibold text-[#088269] transition duration-300 ease-in-out hover:border-[#088269] px-5 py-2 text-[12px] lg:px-[30px] lg:py-3 lg:text-sm">
            В каталог
          </button>
        </Link>
      </div>
    </div>
    <div className="absolute bottom-0 right-0">
      <img
        className="md:h-[264px] w-full h-[230px] md:w-[450px] lg:h-[346px] lg:w-[545px] xl:w-full"
        src={SliderImg}
        alt="Slider Img"
      />
    </div>
  </div>,
  <div className="relative h-full bg-[#E5E4ED] md:flex">
    <div className="relative py-5 px-5 md:py-6 md:pl-[30px] lg:py-8 lg:pl-[60px]">
      <h1 className="font-medium text-[28px] mb-4 leading-[110%] md:mb-[30px] md:text-[34px] lg:mb-6 lg:text-5xl">
        Заголовок баннера <br /> в пару строк
      </h1>
      <p className="font-medium mb-6 text-[#7A7687] text-[12px] md:text-sm md:leading-[120%] lg:text-[16px] lg:leading-[140%]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor{" "}
      </p>
      <div className="absolute flex gap-[10px] lg:gap-4 md:bottom-6 lg:bottom-8">
        <Link to="#">
          <button className="rounded-[50px] bg-[#088269] font-semibold text-white transition duration-300 ease-in-out hover:bg-[#07745E] px-5 py-2 text-[12px] lg:px-[30px] lg:py-3 lg:text-sm">
            Запросить цену
          </button>
        </Link>
        <Link to="/catalog">
          <button className="rounded-[50px] border border-[#D5D1E1] font-semibold text-[#088269] transition duration-300 ease-in-out hover:border-[#088269] px-5 py-2 text-[12px] lg:px-[30px] lg:py-3 lg:text-sm">
            В каталог
          </button>
        </Link>
      </div>
    </div>
    <div className="absolute bottom-0 right-0">
      <img
        className="md:h-[264px] w-full h-[230px] md:w-[450px] lg:h-[346px] lg:w-[545px] xl:w-full"
        src={SliderImg}
        alt="Slider Img"
      />
    </div>
  </div>,
  <div className="relative h-full bg-[#E5E4ED] md:flex">
    <div className="relative py-5 px-5 md:py-6 md:pl-[30px] lg:py-8 lg:pl-[60px]">
      <h1 className="font-medium text-[28px] mb-4 leading-[110%] md:mb-[30px] md:text-[34px] lg:mb-6 lg:text-5xl">
        Заголовок баннера <br /> в пару строк
      </h1>
      <p className="font-medium mb-6 text-[#7A7687] text-[12px] md:text-sm md:leading-[120%] lg:text-[16px] lg:leading-[140%]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor{" "}
      </p>
      <div className="absolute flex gap-[10px] lg:gap-4 md:bottom-6 lg:bottom-8">
        <Link to="#">
          <button className="rounded-[50px] bg-[#088269] font-semibold text-white transition duration-300 ease-in-out hover:bg-[#07745E] px-5 py-2 text-[12px] lg:px-[30px] lg:py-3 lg:text-sm">
            Запросить цену
          </button>
        </Link>
        <Link to="/catalog">
          <button className="rounded-[50px] border border-[#D5D1E1] font-semibold text-[#088269] transition duration-300 ease-in-out hover:border-[#088269] px-5 py-2 text-[12px] lg:px-[30px] lg:py-3 lg:text-sm">
            В каталог
          </button>
        </Link>
      </div>
    </div>
    <div className="absolute bottom-0 right-0">
      <img
        className="md:h-[264px] w-full h-[230px] md:w-[450px] lg:h-[346px] lg:w-[545px] xl:w-full"
        src={SliderImg}
        alt="Slider Img"
      />
    </div>
  </div>,
  <div className="relative h-full bg-[#E5E4ED] md:flex">
    <div className="relative py-5 px-5 md:py-6 md:pl-[30px] lg:py-8 lg:pl-[60px]">
      <h1 className="font-medium text-[28px] mb-4 leading-[110%] md:mb-[30px] md:text-[34px] lg:mb-6 lg:text-5xl">
        Заголовок баннера <br /> в пару строк
      </h1>
      <p className="font-medium mb-6 text-[#7A7687] text-[12px] md:text-sm md:leading-[120%] lg:text-[16px] lg:leading-[140%]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor{" "}
      </p>
      <div className="absolute flex gap-[10px] lg:gap-4 md:bottom-6 lg:bottom-8">
        <Link to="#">
          <button className="rounded-[50px] bg-[#088269] font-semibold text-white transition duration-300 ease-in-out hover:bg-[#07745E] px-5 py-2 text-[12px] lg:px-[30px] lg:py-3 lg:text-sm">
            Запросить цену
          </button>
        </Link>
        <Link to="/catalog">
          <button className="rounded-[50px] border border-[#D5D1E1] font-semibold text-[#088269] transition duration-300 ease-in-out hover:border-[#088269] px-5 py-2 text-[12px] lg:px-[30px] lg:py-3 lg:text-sm">
            В каталог
          </button>
        </Link>
      </div>
    </div>
    <div className="absolute bottom-0 right-0">
      <img
        className="md:h-[264px] w-full h-[230px] md:w-[450px] lg:h-[346px] lg:w-[545px] xl:w-full"
        src={SliderImg}
        alt="Slider Img"
      />
    </div>
  </div>,
  
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  };

  return (
    <div className="relative mx-auto px-4 mt-5 max-w-[1440px] md:mt-5 md:px-5 lg:mt-8 lg:px-4">
      <div className="mb-3 w-full overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-[450px] md:h-[264px] lg:h-[346px] xl:flex-shrink-0"
            >
              {image}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center p-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`mx-1 rounded-full transition duration-500 ease-in-out md:h-2 lg:h-3 ${
              index === currentIndex
                ? "bg-[#7A7687] md:w-8 lg:w-12"
                : "bg-[#B9B6BC] md:w-2 lg:w-3"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
