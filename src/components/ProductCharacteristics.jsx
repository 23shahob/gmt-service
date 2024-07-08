import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cards } from "../assets/data/Cards";
import { Rate } from "antd";
import { Rating } from "@mui/material";

const ProductCharacteristics = () => {
  const [changeTab, setChangeTab] = useState(1);
  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <div className="hidden rounded-[10px] border border-[#E5E2EE] md:block">
        <nav>
          <ul className="flex items-center gap-5 pl-6 pr-4 md:gap-6">
            <li
              className={`cursor-pointer py-4 text-xs font-semibold leading-[140%] text-[#7A7687] transition duration-500 ease-in-out md:leading-normal lg:text-sm ${changeTab == 1 && "border-b-2 border-[#07745E] text-black"}`}
              onClick={() => {
                setChangeTab(1);
              }}
            >
              Описание оборудования
            </li>
            <li
              className={`cursor-pointer py-4 text-xs font-semibold leading-[140%] text-[#7A7687] transition duration-500 ease-in-out md:text-sm md:leading-normal ${changeTab == 2 && "border-b-2 border-[#07745E] text-black"}`}
              onClick={() => {
                setChangeTab(2);
              }}
            >
              Характеристики и документы
            </li>
            <li
              className={`cursor-pointer py-4 text-xs font-semibold leading-[140%] text-[#7A7687] transition duration-500 ease-in-out md:text-sm md:leading-normal ${changeTab == 3 && "border-b-2 border-[#07745E] text-black"}`}
              onClick={() => {
                setChangeTab(3);
              }}
            >
              Услуги и сервис
            </li>
            <li
              className={`cursor-pointer py-4 text-xs font-semibold leading-[140%] text-[#7A7687] transition duration-500 ease-in-out md:text-sm md:leading-normal ${changeTab == 4 && "border-b-2 border-[#07745E] text-black"}`}
              onClick={() => {
                setChangeTab(4);
              }}
            >
              Оптовым покупателям
            </li>
            <li
              className={`cursor-pointer py-4 text-xs font-semibold leading-[140%] text-[#7A7687] transition duration-500 ease-in-out md:text-sm md:leading-normal ${changeTab == 5 && "border-b-2 border-[#07745E] text-black"}`}
              onClick={() => {
                setChangeTab(5);
              }}
            >
              Отзывы
            </li>
          </ul>
        </nav>
        <div className="border-y border-[#E5E2EE] bg-white py-5 pl-6 pr-4">
          <ul>
            {changeTab == 1 && (
              <li className="flex flex-col gap-y-[10px]">
                <h3 className="text-base font-semibold leading-[136%] lg:text-lg">
                  Описание оборудования
                </h3>
                <p className="text-[10px] font-medium text-[#7A7687] lg:text-xs">
                  Биохимический анализатор Mindr UA-66 оснащен открытой
                  платформой для загрузки образцов и отлично размещается на
                  столе в кабинете врача. Функциональная сочетаемость с
                  дополнительным модулем ISE обеспечивает увеличение
                  «скорострельности» прибора от 100 до 300 обработанных пробирок
                  с биоматериалом в час, а также позволит замерять показатели K,
                  Na, Cl и Li в плазме, моче, цереброспинальной жидкости вместе
                  с другими важными параметрами исследования.
                </p>
                <p className="text-[10px] font-medium text-[#7A7687] lg:text-xs">
                  Прибор интуитивно понятен в использовании и техобслуживании,
                  экономен в части финансовых затрат не реагенты. Что важно,
                  калибровка системы аналогична той, что установлена на более
                  современной аппаратуре, и это – идеальный вариант для
                  небольших лабораторий, поскольку емкость погрузчика для проб
                  меньше, чем у мощного оборудования.
                </p>
                <p className="text-[10px] font-medium text-[#7A7687] lg:text-xs">
                  Только небольшая загрузочная емкость для образцов и химических
                  компонентов, если сравнивать с передовой аналогичной техникой,
                  не позволяет этой системе претендовать на принятие в ряды
                  аппаратуры, которой оснащены крупномасштабные лаборатории.
                </p>
              </li>
            )}
            {changeTab == 2 && (
              <li>
                <h3 className="mb-5 text-base font-semibold leading-[136%] lg:text-lg">
                  Технические характеристики
                </h3>
                <div className="grid grid-cols-1 gap-[10px] lg:grid-cols-2">
                  <ul className="flex flex-col gap-y-[10px]">
                    <li className="flex items-center gap-[10px]">
                      <p className="text-[10px] font-normal text-[#7A7687] lg:text-xs">
                        Вес оборудования . . . . . . . . . . .
                      </p>
                      <p className="text-[10px] font-medium lg:text-xs">
                        90 кг
                      </p>
                    </li>
                    <li className="flex items-center gap-3">
                      <p className="text-[10px] font-normal text-[#7A7687] lg:text-xs">
                        Детектор . . . . . . . . . . . . . . . . . . . .
                      </p>
                      <p className="text-[10px] font-medium lg:text-xs">
                        CsI - на основе аморфного кремния
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <p className="text-[10px] font-normal text-[#7A7687] lg:text-xs">
                        Время сканирования . . . . . . . . .
                      </p>
                      <p className="text-[10px] font-medium lg:text-xs">
                        PAN стандарт - 12 сек
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <p className="text-[10px] font-normal text-[#7A7687] lg:text-xs">
                        Размер фокусного пятна . . . . .
                      </p>
                      <p className="text-[10px] font-medium lg:text-xs">0.6</p>
                    </li>
                    <li className="flex items-center gap-2">
                      <p className="text-[10px] font-normal text-[#7A7687] lg:text-xs">
                        Динамический диапазон . . . . .
                      </p>
                      <p className="text-[10px] font-medium lg:text-xs">
                        16 бит (65 536 градации серого)
                      </p>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-y-[10px]">
                    <li className="flex items-center gap-[10px]">
                      <p className="text-[10px] font-normal text-[#7A7687] lg:text-xs">
                        Рабочее напряжение . . . . . . . . .
                      </p>
                      <p className="text-[10px] font-medium lg:text-xs">
                        90 кг
                      </p>
                    </li>
                    <li className="flex items-center gap-3">
                      <p className="text-[10px] font-normal text-[#7A7687] lg:text-xs">
                        Максимальный ток . . . . . . . . . . .
                      </p>
                      <p className="text-[10px] font-medium lg:text-xs">
                        CsI - на основе аморфного кремния
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
                      <p className="text-[10px] font-normal text-[#7A7687] lg:text-xs">
                        Гарантия . . . . . . . . . . . . . . . . . . . . . .
                      </p>
                      <p className="text-[10px] font-medium lg:text-xs">
                        PAN стандарт - 12 сек
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            {changeTab == 3 && (
              <li>
                <h3 className="mb-5 text-base font-semibold leading-[136%] lg:text-lg">
                  Услуги и сервис
                </h3>
                <div className="mb-4 grid grid-cols-3 gap-[10px]">
                  {Cards.slice(0, 3).map((card) => (
                    <div
                      className="rounded-[10px] border border-[#E5E2EE]"
                      key={card.id}
                    >
                      <div className="h-28 lg:h-36">
                        <img
                          className="h-full w-full rounded-t-[10px] object-cover"
                          src={card.img}
                          alt={card.title}
                        />
                      </div>
                      <div className="p-4 lg:p-5">
                        <p className="text-center text-sm font-medium leading-[118%] lg:text-base lg:leading-[140%]">
                          {card.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Link to="/services">
                    <button className="rounded-[50px] bg-[#088269] px-5 py-2 text-xs font-semibold leading-[140%] text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E] lg:px-[30px] lg:py-[11px] lg:text-sm lg:leading-normal">
                      Все услуги
                    </button>
                  </Link>
                </div>
              </li>
            )}
            {changeTab == 4 && (
              <li>
                <h3 className="mb-3 text-base font-semibold leading-[136%] lg:text-lg lg:leading-normal">
                  Услуги и сервис
                </h3>
                <p className="mb-5 text-[10px] font-medium text-[#7A7687] lg:text-xs">
                  Только небольшая загрузочная емкость для образцов и химических
                  компонентов, если сравнивать с передовой аналогичной техникой,
                  не позволяет этой системе претендовать на принятие в ряды
                  аппаратуры, которой оснащены крупномасштабные лаборатории.
                </p>

                <h4 className="mb-3 text-xs font-semibold leading-[140%] lg:text-sm lg:leading-normal">
                  Заголовок
                </h4>
                <p className="mb-5 text-[10px] font-medium text-[#7A7687] lg:text-xs">
                  Только небольшая загрузочная емкость для образцов и химических
                  компонентов, если сравнивать с передовой аналогичной техникой,
                  не позволяет этой системе претендовать на принятие в ряды
                  аппаратуры, которой оснащены крупномасштабные лаборатории.
                </p>
                <p className="text-[10px] font-normal text-[#088269] lg:text-xs lg:font-medium">
                  Реквизиты для оформеления заказа
                </p>
              </li>
            )}
            {changeTab == 5 && (
              <li>
                <div>
                  <div className="mb-4 flex items-center gap-5">
                    <h3 className="text-base font-semibold leading-[136%] lg:text-lg lg:leading-normal">
                      Отзывы
                    </h3>
                    <select className="rounded-[50px] border border-[#E5E2EE] px-3 py-1 text-xs font-medium outline-none">
                      <option value="">Сначала полезные</option>
                      <option value="">Сначала новые </option>
                      <option value="">Сначала с высокой оценкой</option>
                      <option value="">Сначала с низкой оценкой</option>
                    </select>
                  </div>
                  <div className="grid gap-5 lg:grid-cols-4">
                    <div className="grid grid-rows-2 gap-[10px] lg:col-span-3">
                      <div className="rounded-[10px] border border-[#E5E2EE] p-4">
                        <div className="mb-3 flex items-center gap-3">
                          <h3 className="text-xs font-semibold leading-[140%] lg:text-sm lg:leading-normal">
                            Тишкова Дарья
                          </h3>
                          <Rate disabled defaultValue={5} />
                        </div>
                        <p className="mb-4 text-[10px] font-medium text-[#7A7687] lg:text-xs">
                          Но синтетическое тестирование, в своём классическом
                          представлении, допускает внедрение поэтапного и
                          последовательного развития общества. В рамках
                          спецификации современных стандартов, сторонники
                          тоталитаризма в науке будут функционально разнесены.
                        </p>
                        <p className="text-[10px] font-medium opacity-80 lg:text-xs">
                          12 января 2023
                        </p>
                      </div>
                      <div className="rounded-[10px] border border-[#E5E2EE] p-4">
                        <div className="mb-3 flex items-center gap-3">
                          <h3 className="text-xs font-semibold leading-[140%] lg:text-sm lg:leading-normal">
                            Тепляков Максим
                          </h3>
                          <Rate disabled defaultValue={5} />
                        </div>
                        <p className="mb-4 text-[10px] font-medium text-[#7A7687] lg:text-xs">
                          Но синтетическое тестирование, в своём классическом
                          представлении, допускает внедрение поэтапного и
                          последовательного развития общества. В рамках
                          спецификации современных стандартов, сторонники
                          тоталитаризма в науке будут функционально разнесены.
                        </p>
                        <p className="text-[10px] font-medium opacity-80 lg:text-xs">
                          03 января 2023
                        </p>
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="">
                        <div className="mb-4 flex items-center justify-between border-b border-[#E5E2EE] pb-2">
                          <Rating name="read-only" value={4} readOnly />
                          <span className="ml-2 text-gray-500">4.0 / 5.0</span>
                        </div>
                        <div className="mb-4">
                          {[
                            { label: "5 звезд", value: 12 },
                            { label: "4 звезды", value: 8 },
                            { label: "3 звезды", value: 2 },
                            { label: "2 звезды", value: 0 },
                            { label: "1 звезда", value: 0 },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className="mb-2 flex items-center gap-4"
                            >
                              <span className="text-[10px] font-medium opacity-80 lg:text-xs">
                                {item.label}
                              </span>
                              <div className="h-2 flex-grow rounded-full bg-yellow-100">
                                <div
                                  className="h-2 rounded-full bg-yellow-500"
                                  style={{
                                    width: `${(item.value / 12) * 100}%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-[10px] font-medium opacity-80 lg:text-xs">
                                {item.value}
                              </span>
                            </div>
                          ))}
                        </div>
                        <button className="w-full rounded-[50px] bg-[#088269] py-2 text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E] lg:py-[11px]">
                          Оставить отзыв
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
        <ul className="flex py-[10px] pl-6 md:gap-7 lg:gap-10">
          <li className="text-[10px] font-medium text-[#07745E] lg:text-xs">
            <Link>Новинки</Link>
          </li>
          <li className="text-[10px] font-medium text-[#07745E] lg:text-xs">
            <Link>Получить прайс</Link>
          </li>
          <li className="text-[10px] font-medium text-[#07745E] lg:text-xs">
            <Link>Условия доставки</Link>
          </li>
          <li className="text-[10px] font-medium text-[#07745E] lg:text-xs">
            <Link>Способы оплаты</Link>
          </li>
        </ul>
      </div>
      <div className="block md:hidden">
        <div className="mb-4 rounded-[10px] border border-[#E5E2EE] bg-white py-4">
          <li className="flex flex-col gap-y-[10px]">
            <h3 className="border-b border-[#E5E2EE] px-5 pb-4 text-base font-semibold leading-[136%] lg:text-lg">
              Описание оборудования
            </h3>
            <p className="px-5 text-[10px] font-medium text-[#7A7687] lg:text-xs">
              Биохимический анализатор Mindr UA-66 оснащен открытой платформой
              для загрузки образцов и отлично размещается на столе в кабинете
              врача. Функциональная сочетаемость с дополнительным модулем ISE
              обеспечивает увеличение «скорострельности» прибора от 100 до 300
              обработанных пробирок с биоматериалом в час, а также позволит
              замерять показатели K, Na, Cl и Li в плазме, моче,
              цереброспинальной жидкости вместе с другими важными параметрами
              исследования.
            </p>
            <p className="px-5 text-[10px] font-medium text-[#7A7687] lg:text-xs">
              Прибор интуитивно понятен в использовании и техобслуживании,
              экономен в части финансовых затрат не реагенты. Что важно,
              калибровка системы аналогична той, что установлена на более
              современной аппаратуре, и это – идеальный вариант для небольших
              лабораторий, поскольку емкость погрузчика для проб меньше, чем у
              мощного оборудования.
            </p>
            <p className="px-5 text-[10px] font-medium text-[#7A7687] lg:text-xs">
              Только небольшая загрузочная емкость для образцов и химических
              компонентов, если сравнивать с передовой аналогичной техникой, не
              позволяет этой системе претендовать на принятие в ряды аппаратуры,
              которой оснащены крупномасштабные лаборатории.
            </p>
          </li>
        </div>
        <div className="mb-4 rounded-[10px] border border-[#E5E2EE] bg-white py-4">
          <h3 className="mb-7 border-b border-[#E5E2EE] px-5 pb-4 text-base font-semibold leading-[136%] lg:text-lg">
            Характеристики и документы
          </h3>
          <ul className="flex flex-col gap-y-5 px-5">
            <li className="">
              <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687]">
                Вес оборудования
              </p>
              <p className="text-xs font-medium leading-[118%]">90 кг</p>
            </li>
            <li className="">
              <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687]">
                Детектор
              </p>
              <p className="text-xs font-medium leading-[118%]">
                CsI - на основе аморфного кремния
              </p>
            </li>
            <li className="">
              <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687]">
                Время сканирования
              </p>
              <p className="text-xs font-medium leading-[118%]">
                PAN стандарт - 12 сек
              </p>
            </li>
            <li className="">
              <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687]">
                Размер фокусного пятна
              </p>
              <p className="text-xs font-medium leading-[118%]">0.6</p>
            </li>
            <li className="">
              <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687]">
                Динамический диапазон
              </p>
              <p className="text-xs font-medium leading-[118%]">
                16 бит (65 536 градации серого)
              </p>
            </li>
            <li className="">
              <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687]">
                Рабочее напряжение
              </p>
              <p className="text-xs font-medium leading-[118%]">90 кг</p>
            </li>
            <li className="">
              <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687]">
                Максимальный ток
              </p>
              <p className="text-xs font-medium leading-[118%]">
                CsI - на основе аморфного кремния
              </p>
            </li>
            <li className="">
              <p className="mb-1 text-xs font-medium leading-[118%] text-[#7A7687]">
                Гарантия
              </p>
              <p className="text-xs font-medium leading-[118%]">
                PAN стандарт - 12 сек
              </p>
            </li>
          </ul>
        </div>
        <div className="rounded-[10px] border border-[#E5E2EE] bg-white py-4">
          <div className="mb-4 flex items-center justify-between gap-5">
            <h3 className="border-b w-full border-[#E5E2EE] px-5 pb-4 text-base font-semibold leading-[136%]">
              Отзывы
            </h3>
          </div>
          <div className="px-5 mb-5">
            <div className="mb-4 flex items-center justify-between border-b border-[#E5E2EE] pb-2">
              <Rating name="read-only" value={4} readOnly />
              <span className="ml-2 text-gray-500">4.0 / 5.0</span>
            </div>
            <div className="mb-4">
              {[
                { label: "5 звезд", value: 12 },
                { label: "4 звезды", value: 8 },
                { label: "3 звезды", value: 2 },
                { label: "2 звезды", value: 0 },
                { label: "1 звезда", value: 0 },
              ].map((item) => (
                <div key={item.label} className="mb-2 flex items-center gap-4">
                  <span className="text-[10px] font-medium opacity-80 lg:text-xs">
                    {item.label}
                  </span>
                  <div className="h-2 flex-grow rounded-full bg-yellow-100">
                    <div
                      className="h-2 rounded-full bg-yellow-500"
                      style={{
                        width: `${(item.value / 12) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-medium opacity-80 lg:text-xs">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full rounded-[50px] bg-[#088269] py-2 text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E] lg:py-[11px]">
              Оставить отзыв
            </button>
          </div>
          <div className="px-5">
            <div className="rounded-[10px] mb-3 border border-[#E5E2EE] p-4">
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-xs font-semibold leading-[140%] lg:text-sm lg:leading-normal">
                  Тишкова Дарья
                </h3>
                <Rate disabled defaultValue={5} />
              </div>
              <p className="mb-4 text-[10px] font-medium text-[#7A7687] lg:text-xs">
                Но синтетическое тестирование, в своём классическом
                представлении, допускает внедрение поэтапного и
                последовательного развития общества. В рамках спецификации
                современных стандартов, сторонники тоталитаризма в науке будут
                функционально разнесены.
              </p>
              <p className="text-[10px] font-medium opacity-80 lg:text-xs">
                12 января 2023
              </p>
            </div>
            <div className="rounded-[10px] border border-[#E5E2EE] p-4">
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-xs font-semibold leading-[140%] lg:text-sm lg:leading-normal">
                  Тепляков Максим
                </h3>
                <Rate disabled defaultValue={5} />
              </div>
              <p className="mb-4 text-[10px] font-medium text-[#7A7687] lg:text-xs">
                Но синтетическое тестирование, в своём классическом
                представлении, допускает внедрение поэтапного и
                последовательного развития общества. В рамках спецификации
                современных стандартов, сторонники тоталитаризма в науке будут
                функционально разнесены.
              </p>
              <p className="text-[10px] font-medium opacity-80 lg:text-xs">
                03 января 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCharacteristics;
