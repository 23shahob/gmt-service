import React from "react";

const FooterTop = () => {
  return (
    <div className="bg-[#E5E4ED]">
      <div className="mx-auto flex max-w-[1440px] gap-16">
        <div className="w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="572"
            height="276"
            viewBox="0 0 572 276"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M480.939 -66.6757C472.877 -90.4588 444.743 -100.839 418.418 -89.7431L35.51 71.6535C9.18508 82.7496 -5.75798 111.287 2.30324 135.07L90.2437 394.522C98.305 418.305 126.439 428.686 152.764 417.59L535.672 256.193C561.997 245.097 576.94 216.559 568.879 192.776L480.939 -66.6757ZM433.075 -46.5011L278.263 142.302L50.1668 114.896L433.075 -46.5011ZM521.016 212.951L138.107 374.348L64.8235 158.138L292.92 185.544L447.732 -3.25907L521.016 212.951Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="py-9">
          <h1 className="mb-5 text-[30px] font-medium leading-[120%]">
            Подпишитесь и будьте в курсе!
          </h1>
          <p className="mb-[45px] font-medium leading-[140%] text-[#7A7687]">
            Акции, скидки, распродажи ждут!
          </p>
          <div>
            <form className="relative mb-5 h-[43px] w-[540px] items-center rounded-[50px] border border-[#D5D1E1] bg-white pl-6">
              <input
                className="h-full w-[350px] text-sm font-normal text-[7A7687] outline-none"
                required
                type="email"
                placeholder="Введите email"
              />
              <button className="absolute right-0 rounded-[50px] bg-[#088269] px-[30px] py-[11px] text-sm font-semibold text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E]">
                Подписаться
              </button>
            </form>
            <div className="flex items-center gap-3">
              <input className="h-5 w-5 outline-none" type="checkbox" />{" "}
              <p className="text-[12px] font-medium">
                Я даю согласие на обработку своих персональных данных.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
