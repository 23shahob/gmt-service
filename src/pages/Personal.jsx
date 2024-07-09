import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaOdnoklassniki } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Personal = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { email } = user;

  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [phone, setPhone] = useState("+7 911 564-86-86");
  const [mail, setMail] = useState(email);

  return (
    <div className="">
      <div className="mx-auto mb-5 max-w-[1440px] px-4 md:mb-12 md:px-5 lg:mb-24 lg:px-4">
        <div className="mb-5 flex items-center gap-2 py-5">
          <Link to="/" className="text-sm font-normal text-[#7A7687]">
            Главная
          </Link>
          <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
          <p className="text-sm font-normal">Личный кабинет</p>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
        <div className="items-center md:flex md:gap-16 lg:mb-[150px] lg:gap-[120px]">
          <div className="relative mb-12 h-[140px] w-[140px] md:mb-0 md:h-[180px] md:w-[180px] lg:h-[210px] lg:w-[210px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-green-100 text-6xl text-green-800">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                "К"
              )}
            </div>
            <div className="flex flex-col items-center">
              <label
                htmlFor="upload"
                className="absolute bottom-0 right-[45%] mb-2 h-8 w-8 cursor-pointer rounded-full bg-[#088269] p-1 shadow-md transition duration-300 hover:shadow-lg"
              >
                <BiEditAlt className="h-full w-full text-white" />
              </label>
              <input
                id="upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              {image && (
                <div className="rounded-[10px] border border-[#E5E2EE] bg-white p-3">
                  <p className="mb-3 text-xs font-normal">Редактировать</p>
                  <button
                    onClick={handleImageDelete}
                    className="text-xs font-normal text-[#C13515]"
                  >
                    Удалить фото
                  </button>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="mb-5 flex flex-col gap-2 md:mb-0 md:flex md:flex-row">
              <h3 className="text-lg font-medium leading-[120%] md:mb-5 md:text-xl lg:text-3xl">
                Константин
              </h3>
              <h3 className="text-lg font-medium leading-[120%] md:mb-5 md:text-xl lg:text-3xl">
                Константинопольский
              </h3>
            </div>
            <ul className="mb-8 flex gap-4 lg:mb-10">
              <li>
                <Link>
                  <SlSocialVkontakte className="h-6 w-6" />
                </Link>
              </li>
              <li>
                <Link>
                  <FaFacebookF className="h-6 w-6" />
                </Link>
              </li>
              <li>
                <Link>
                  <AiFillInstagram className="h-6 w-6" />
                </Link>
              </li>
              <li>
                <Link>
                  <FaTwitter className="h-6 w-6" />
                </Link>
              </li>
              <li>
                <Link>
                  <FaOdnoklassniki className="h-6 w-6" />
                </Link>
              </li>
            </ul>
            <button className="mb-16 rounded-[50px] border border-[#D5D1E1] px-5 py-2 text-xs font-semibold leading-[120%] lg:mb-[74px] lg:py-[11px] lg:text-sm lg:leading-normal">
              Изменить персональную информацию
            </button>
            <div className="mb-[60px] flex justify-between md:mb-0">
              <div>
                <div className="flex items-center gap-3">
                  {isEditingPhone ? (
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={() => setIsEditingPhone(false)}
                      className="border-b-2 border-gray-300 outline-none focus:border-gray-500"
                    />
                  ) : (
                    <span
                      onClick={() => setIsEditingPhone(true)}
                      className="cursor-pointer"
                    >
                      {phone}
                    </span>
                  )}
                  <BiEditAlt className="h-6 w-6 text-[#088269]" />
                </div>
                <span className="text-xs leading-[118%] text-[#7A7687] md:text-sm lg:text-base lg:leading-[140%]">
                  Телефон
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  {isEditingEmail ? (
                    <input
                      type="text"
                      value={mail}
                      onChange={(e) => setMail(e.target.value)}
                      onBlur={() => setIsEditingEmail(false)}
                      className="border-b-2 border-gray-300 outline-none focus:border-gray-500"
                    />
                  ) : (
                    <span
                      onClick={() => setIsEditingEmail(true)}
                      className="cursor-pointer"
                    >
                      {mail}
                    </span>
                  )}
                  <BiEditAlt className="h-6 w-6 text-[#088269]" />
                </div>
                <span className="text-xs leading-[118%] text-[#7A7687] md:text-sm lg:text-base lg:leading-[140%]">
                  Email
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-32">
          <h3 className="col-span-1 mb-5 text-base font-semibold md:mb-0 lg:text-lg">
            Данные о плательщике
          </h3>
          <div className="relative col-span-3 w-full rounded-[10px] border border-[#E5E2EE] bg-white p-6">
            <p className="mb-1 font-semibold lg:text-lg">Название компании</p>
            <p className="font-medium leading-[140%]">ИНН 9717039181</p>
            <BiEditAlt className="absolute right-6 top-6 h-6 w-6 text-[#088269]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
