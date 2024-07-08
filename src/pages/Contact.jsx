import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Box, TextField } from "@mui/material";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mx-auto mb-10 max-w-[1440px] px-4 md:mb-12 md:px-5 lg:mb-24 lg:px-4">
        <div className="mb-5 flex items-center gap-2 py-5">
          <Link to="/" className="text-sm font-normal text-[#7A7687]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
          <p className="text-sm font-normal">О компании</p>
        </div>
      </div>

      <div className="mx-auto mb-[60px] max-w-[1440px] px-4 md:mb-[120px] md:px-5 lg:mb-[150px] lg:px-4">
        <h1 className="mb-5 text-[28px] font-medium leading-[105%] md:mb-7 md:text-[34px] md:leading-[110%] lg:mb-10 lg:text-5xl">
          Контакты
        </h1>
        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
          <div className="order-1 mb-[60px] rounded-[10px] border border-[#E5E2EE] bg-white md:col-span-2 md:mb-[120px] lg:col-span-1 lg:mb-0">
            <div className="grid grid-cols-1 gap-10 rounded-[10px] px-5 py-5 md:px-5 md:py-7 lg:gap-8 lg:px-10 lg:py-10">
              <div className="grid grid-cols-1">
                <h2 className="mb-6 text-lg font-medium leading-[120%] md:text-xl lg:text-3xl">
                  ООО Глобал Медикал Трейд
                </h2>
                <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 lg:gap-4">
                  <li className="flex gap-[10px]">
                    <SlLocationPin className="h-5 w-5 text-[#7A7687]" />
                    <div>
                      <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:mb-0 lg:text-base lg:leading-[140%]">
                        Юридический адрес:
                      </p>
                      <p className="text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]">
                        Россия, г. Москва, ул. Докукина, 8, стр. 2
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-[10px]">
                    <SlLocationPin className="h-5 w-5 text-[#7A7687]" />
                    <div>
                      <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:mb-0 lg:text-base lg:leading-[140%]">
                        Фактический адрес:
                      </p>
                      <p className="text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]">
                        Россия, г. Москва, ул. Докукина, 8, стр. 2
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-[10px]">
                    <MdOutlineAccessTime className="h-5 w-5 text-[#7A7687]" />
                    <div>
                      <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:mb-0 lg:text-base lg:leading-[140%]">
                        Режим работы:
                      </p>
                      <p className="mb-1 text-xs font-medium leading-[118%] md:text-sm lg:mb-0 lg:text-base lg:leading-[140%]">
                        Пн-Пт с 09:00-19:00
                      </p>
                      <p className="text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]">
                        Сб-Вс - выходной
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-1">
                <h2 className="mb-6 text-lg font-medium leading-[120%] md:text-xl lg:text-3xl">
                  Звоните. Звонки по России бесплатны:
                </h2>
                <ul className="grid grid-cols-1 gap-5 lg:gap-4">
                  <li className="flex gap-[10px]">
                    <FiPhone className="h-5 w-5 text-[#7A7687]" />
                    <div>
                      <p className="mb-[10px] text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:mb-0 lg:text-base lg:leading-[140%]">
                        Телефоны:
                      </p>
                      <ul className="grid grid-cols-1 gap-[10px] md:grid-cols-3">
                        <a
                          href="tel: 8-800-000-00-00"
                          className="text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]"
                        >
                          8-800-000-00-00
                        </a>
                        <a
                          href="tel: +7-000-000-00-00"
                          className="text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]"
                        >
                          +7-000-000-00-00
                        </a>
                        <a
                          href="tel: +7-495-000-00-00"
                          className="text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]"
                        >
                          +7-495-000-00-00
                        </a>
                      </ul>
                    </div>
                  </li>
                  <li className="flex gap-[10px]">
                    <MdOutlineMail className="h-5 w-5 text-[#7A7687]" />
                    <div>
                      <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:mb-0 lg:text-base lg:leading-[140%]">
                        Пишите:
                      </p>
                      <a
                        href="mailto: info@mail.ru"
                        className="text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]"
                      >
                        info@mail.ru
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                  <h2 className="mb-6 text-base font-semibold leading-[134%] lg:text-lg lg:leading-normal">
                    Реквизиты
                  </h2>
                  <ul className="flex gap-7">
                    <li>
                      <span className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:text-base lg:leading-[140%]">
                        ИНН
                      </span>
                      <p className="text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]">
                        9717039181
                      </p>
                    </li>
                    <li>
                      <span className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687] md:text-sm lg:text-base lg:leading-[140%]">
                        ОГРН
                      </span>
                      <p className="text-xs font-medium leading-[118%] md:text-sm lg:text-base lg:leading-[140%]">
                        1167746796986
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-base font-semibold leading-[134%] lg:text-lg lg:leading-normal">
                    Мы в соцсетях
                  </h2>
                  <ul className="flex gap-[10px]">
                    <li className="flex h-[37px] w-[37px] cursor-pointer items-center justify-center rounded-lg bg-[#088269] hover:bg-[#07745E]">
                      <SlSocialVkontakte className="h-5 w-5 fill-white text-white" />
                    </li>
                    <li className="flex h-[37px] w-[37px] cursor-pointer items-center justify-center rounded-lg bg-[#088269] hover:bg-[#07745E]">
                      <FaTelegramPlane className="h-5 w-5 fill-white text-white" />
                    </li>
                    <li className="flex h-[37px] w-[37px] cursor-pointer items-center justify-center rounded-lg bg-[#088269] hover:bg-[#07745E]">
                      <FaWhatsapp className="h-5 w-5 fill-white text-white" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="order-2 h-fit md:order-3 lg:order-2">
            <div className="h-full rounded-[10px] border border-[#E5E2EE] bg-white p-5">
              <h1 className="mb-2 text-lg font-medium leading-[120%] md:mb-5 md:text-xl lg:mb-6 lg:text-[30px]">
                Бесплатная консультация
              </h1>
              <p className="md:text-xm mb-8 font-medium leading-[140%] text-[#7A7687] md:leading-[118%] lg:mb-10 lg:text-[16px]">
                Оставьте свои координаты и наш менеджер перезвонит вам через 10
                минут
              </p>
              <form>
                <Box
                  className="md:mb-8 lg:mb-10"
                  sx={{
                    "& .MuiTextField-root": {
                      m: 1,
                      width: "100%",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#7A7687",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#088269", // Change border color on hover
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#088269", // Change border color when focused
                    },
                    "& .MuiInputBase-input": {
                      color: "#7A7687",
                    },
                    "& .MuiInputBase-input:focus": {
                      color: "#7A7687", // Change text color when focused
                    },
                    "& .MuiInputLabel-root": {
                      color: "#7A7687",
                    },
                    "& .MuiInputLabel-root:hover": {
                      color: "#088269", // Change label color on hover
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#088269", // Change label color when focused
                    },
                  }}
                  noValidate
                  autoComplete="on"
                >
                  <div>
                    <TextField
                      className="w-full"
                      id="standard-multiline-flexible"
                      label="Ваше имя"
                      required
                      maxRows={1}
                      variant="standard"
                    />
                    <TextField
                      className="w-full"
                      id="standard-multiline-flexible"
                      label="Ваш телефон"
                      required
                      maxRows={1}
                      variant="standard"
                    />
                    <TextField
                      className="w-full"
                      id="standard-multiline-flexible"
                      label="Ваш email"
                      required
                      maxRows={1}
                      variant="standard"
                    />
                    <TextField
                      className="w-full"
                      sx={{ paddingBottom: "200px" }}
                      required
                      id="standard-multiline-flexible"
                      label="Ваш вопрос"
                      maxRows={1}
                      variant="standard"
                    />
                  </div>
                </Box>
                <div className="mt-2 lg:flex lg:gap-7">
                  <button
                    type="submit"
                    className="mb-3 rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E] lg:px-[30px] lg:py-[11px] lg:text-sm"
                  >
                    Отправить
                  </button>
                  <p className="text-[10px] font-medium text-[#7A7687] lg:text-[12px]">
                    Нажимая «Отправить», я соглашаюсь c обработкой персональных
                    данных на условиях{" "}
                    <span className="text-[#088269]">
                      Политики конфиденциальности.
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="order-3 md:order-2 lg:order-3 lg:col-span-2">
            <div className="relative mb-6 h-[345px] rounded-[10px] border border-[#E5E2EE] md:h-full lg:mb-10 lg:h-[389px]">
              <iframe
                className="h-full w-full rounded-[10px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.6097804603199!2d69.20378307237195!3d41.28543031743791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1719776352557!5m2!1sru!2s"
              ></iframe>
              <button className="absolute bottom-4 right-4 rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold leading-[138%] text-[#F8F7F3] md:leading-[140%] lg:bottom-5 lg:right-5 lg:px-[30px] lg:py-[11px] lg:text-sm">
                Построить маршрут
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
